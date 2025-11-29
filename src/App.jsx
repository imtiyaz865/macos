import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Home, Navbar, Welcome } from "#components";
import {
  Finder,
  Resume,
  Safari,
  Terminal,
  Text,
  ImageFile,
  Contact,
  Photos,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageFile />
      <Contact />
      <Photos />

      <Home />
    </main>
  );
};

export default App;
