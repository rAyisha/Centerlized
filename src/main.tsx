import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { BrowserRouter } from "react-router-dom";
import { initialState, reducer } from "./contex/Reducer.tsx";
import StateProvider from "./contex/StateProvider.tsx";
import { ToastProvider } from "./components/Toast/index.tsx";
import {LanguageProvider} from './config/LanguageContext.tsx'
render(
  <BrowserRouter future={{ v7_startTransition: true }}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <LanguageProvider>
      <Provider store={store}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </Provider>
      </LanguageProvider>
    </StateProvider>
  </BrowserRouter>,

  document.getElementById("app")!
);
