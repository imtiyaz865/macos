import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import Clock from "./Clock";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="apple-logo" />
        <p className="font-bold">Imtiyaz</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => {
                  if (type) {
                    openWindow(type);
                  }
                }}
                aria-label={name || `Navigate to ${type || "page"}`}
              >
                <p>{name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
            </li>
          ))}
        </ul>

        <Clock />
      </div>
    </nav>
  );
};

export default Navbar;
