import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import useLocalStorage from "use-local-storage";

// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import'./App.css';

// ----------------------------------------------------------------------

export default function App() {
  const defaultDark = window.matchMedia(
    "(prefers-colors-scheme: dark)"
  ).matches;
  const [mytheme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    setTheme(mytheme === "light" ? "dark" : "light");
  };
  return (
    <HelmetProvider >
      <BrowserRouter>
        <ThemeProvider >
          <ScrollToTop  />
          <StyledChart  />
          <Router mytheme={mytheme} switchTheme={switchTheme} />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
