import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/me1.jpg"
          alt="Imtiyaz"
          className="h-20 w-20 object-contain rounded-full bg-amber-200"
        />

        <h3>Let's Connect</h3>
        <p>
          Got an Idea? A bug to squash? Or just want to say hi? Feel free to
          reach out!
        </p>
        <p>markiconmedia@gmail.com</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
