import { useContext } from "react";
import Notification from "./components/Notification";
import ThemeContext from "./context/AppContext";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`md:h-screen bg-zinc-200 dark:bg-black/90 flex items-center justify-center p-3 ${theme}`}
    >
      <ToggleTheme />
      <Notification />
    </main>
  );
}

export default App;
