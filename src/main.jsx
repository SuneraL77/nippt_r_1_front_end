import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { createStore } from "redux";
import rootReducer from "./reducers"; // Ensure this path is correct
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

// Create Redux store with DevTools extension
const store = createStore(rootReducer, composeWithDevTools());

const root = createRoot(document.getElementById('root')); // Correct use of createRoot from 'react-dom/client'
root.render(
  <StrictMode>

      <BrowserRouter>
        <MantineProvider>
        <Provider store={store}>  {/* Redux Provider */}
          <App />
          </Provider>
        </MantineProvider>
      </BrowserRouter>
   
  </StrictMode>
);
