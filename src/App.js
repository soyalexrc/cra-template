import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import {ProgressBarStyle} from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import Router from "./routes";
import 'react-phone-input-2/lib/material.css'
import { useEffect, useState } from 'react';
import SplashScreen from "./pages/SplashScreen";

function App() {
  const [component, setComponent] = useState(<SplashScreen />)
  useEffect(() => {
    setTimeout(() => {
      setComponent(<Router />)
    }, 4000)
  }, [])
  return (
    <ThemeConfig>
      <GlobalStyles />
      <ProgressBarStyle />
      <ScrollToTop />
      {component}
    </ThemeConfig>
  );
}

export default App;
