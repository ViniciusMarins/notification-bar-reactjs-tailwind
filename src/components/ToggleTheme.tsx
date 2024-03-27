import { useContext } from "react";
import ThemeContext from "../context/AppContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const ToggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const createIconTheme = (Icon: any) => {
    return (
      <Icon
        className="absolute top-[30px] right-[30px] text-3xl cursor-pointer"
        onClick={ToggleTheme}
      />
    );
  };

  return theme === "light"
    ? createIconTheme(MdDarkMode)
    : createIconTheme(MdLightMode);
}

export default ToggleTheme;
