import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme, ColorSchemeName } from "react-native";

const defaultTheme: ColorSchemeName = "light";

type ThemeContextProps = {
  theme: ColorSchemeName;
  setTheme: React.Dispatch<React.SetStateAction<ColorSchemeName>>;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const useTheme = (): ThemeContextProps => useContext(ThemeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState<ColorSchemeName>(defaultTheme);

  useEffect(() => {
    setTheme(colorScheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
