import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;
  const displayName = name || "Unknown";

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{displayName}</h2>
      </div>

      <div className="bg-white p-8 h-full overflow-y-auto">
        {image && (
          <div className="mb-6">
            <img
              src={image}
              alt={displayName || "Image"}
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        )}

        {subtitle && (
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            {subtitle}
          </h3>
        )}

        {description &&
          Array.isArray(description) &&
          description.length > 0 && (
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
