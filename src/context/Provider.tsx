import { useState } from "react";
import ThemeContext from "./AppContext";

type Props = {
  children: React.ReactNode;
};

function Provider({ children }: Props) {
  const [theme, setTheme] = useState("light");

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default Provider;
