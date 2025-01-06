import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './styles/theme';
import Navbar from './components/Navbar';
import Header from './components/Header';
import GlobalStyle from './styles/globalStyle';

function App() {
  const [dark, setDark] = useState(true);

  const theme = dark ? darkTheme : lightTheme;

  const initializePreferences = () => {
    const savedThemePreference = localStorage.getItem('themePreference');
    if (savedThemePreference) {
      setDark(savedThemePreference === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefersDark);
    }
  };

  useEffect(() => {
    initializePreferences();
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !dark;
    setDark(newTheme);
    localStorage.setItem('themePreference', newTheme ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Header background={'var(--secondary)'} />
      <button onClick={handleThemeToggle}> troca o tema aqui carai</button>
    </ThemeProvider>
  );
}

export default App;
