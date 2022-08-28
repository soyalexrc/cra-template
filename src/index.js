import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import {store, persistor} from "./redux/store";
import {Provider as ReduxProvider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";
import {CollapseDrawerProvider} from "./context/CollapseDrawerContext";
import LoadingScreen from "./components/LoadingScreen";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor} loading={<LoadingScreen/>}>
          <BrowserRouter>
            <CollapseDrawerProvider>
              <App/>
            </CollapseDrawerProvider>
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
