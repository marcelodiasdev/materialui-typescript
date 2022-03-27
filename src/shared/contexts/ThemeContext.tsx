import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';


import { DarkTheme, LightTheme } from './../themes';


interface IThemeContextData {
   themeName: 'Light' | 'Dark';
   toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};


export const AppThemeProvider: React.FC = ({ children }) => {
  const [themeName, SetThemeName ] = useState<'Light' | 'Dark'>('Light');

  const toggleTheme = useCallback(() => {
    SetThemeName(oldThemeName => oldThemeName === 'Light' ? 'Dark' : 'Light');
  }, []);

  const theme = useMemo(() => {
    if(themeName === 'Light')  return  LightTheme;
      
    return DarkTheme;
  }, [themeName]);


  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
