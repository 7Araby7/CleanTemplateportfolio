import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './styles/theme';
import Navbar from './components/Navbar';
import Header from './components/Header';
import GlobalStyle from './styles/globalStyle';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(false);
  const [animate, setAnimate] = useState(false);

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

  const handleThemeToggle = (isDark) => {
    const newTheme = isDark ? true : false;
    setDark(newTheme);
    localStorage.setItem('themePreference', newTheme ? 'dark' : 'light');
  };

  const handleScrollToSection = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView();
    }
  };

  const handleAnimate = (status) => {
    setAnimate(status);
  };

  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      <Navbar handleThemeToggle={handleThemeToggle} dark={dark} />
      <Header
        handleScrollToSection={handleScrollToSection}
        handleAnimate={handleAnimate}
        animate={animate}
      />
      <About handleScrollToSection={handleScrollToSection} />
      <Projects handleScrollToSection={handleScrollToSection} />
      <Contact handleScrollToSection={handleScrollToSection} handleAnimate={handleAnimate} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
