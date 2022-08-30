import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import {ProgressBarStyle} from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import Router from "./routes";
import 'react-phone-input-2/lib/material.css'
import { useEffect, useState } from 'react';
import SplashScreen from "./pages/SplashScreen";
import {SnackbarProvider} from 'notistack'
import {ConfirmationModalContextProvider} from "./context/ConfirmationModalContext";


function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <ProgressBarStyle />
      <ScrollToTop />
      <ConfirmationModalContextProvider>
        <SnackbarProvider maxSnack={4} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Router/>
        </SnackbarProvider>
      </ConfirmationModalContextProvider>
    </ThemeConfig>
  );
}

export default App;
