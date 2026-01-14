import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./assets/css/main.css"
import { BrowserRouter } from "react-router";
import i18n from './i18n.ts';
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux';
import { store } from './redux/store/index.ts';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <StrictMode>
                <I18nextProvider i18n={i18n}>
                <App />
                </I18nextProvider>
            </StrictMode>
        </BrowserRouter>
    </Provider>
)
