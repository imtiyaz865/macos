import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { Search } from "lucide-react";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (!item) return;

    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    // Defensively derive a safe window name
    const fileType = item.fileType || "";
    const kind = item.kind || "";
    const windowName = fileType || kind || "unknown";
    
    // Only call openWindow if we have a valid window name
    if (windowName !== "unknown" || (fileType && kind)) {
      openWindow(`${fileType}${kind}`, item);
    } else {
      console.warn("Cannot open item: missing fileType and kind", item);
    }
  };

  const renderList = (name, items) => {
    // Ensure items is an array
    const safeItems = Array.isArray(items) ? items : [];
    
    return (
      <div>
        <h3>{name}</h3>
        <ul>
          {safeItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveLocation(item)}
              className={clsx(
                // Use optional chaining to safely compare IDs
                item.id === activeLocation?.id ? "active" : "not-active"
              )}
            >
              <img src={item.icon} alt={item.name} className="w-4" />
              <p className="text-sm font-medium truncate">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {/* Defensively handle locations object */}
          {renderList("Favorites", locations ? Object.values(locations) : [])}
          {/* Safely access work.children with fallback to empty array */}
          {renderList("Work", locations?.work?.children ?? [])}
        </div>

        <ul className="content">
          {/* Only map when activeLocation exists and children is a valid array */}
          {activeLocation && Array.isArray(activeLocation.children)
            ? activeLocation.children.map((item) => (
                <li
                  key={item.id}
                  className={item.position}
                  onClick={() => openItem(item)}
                >
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
