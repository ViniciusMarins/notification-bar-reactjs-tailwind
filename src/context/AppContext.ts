import { createContext } from "react";

type ThemeContextProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const defaultValue: ThemeContextProps = {
  theme: "light",
  setTheme: () => {},
};

const ThemeContext = createContext(defaultValue);

export default ThemeContext;
