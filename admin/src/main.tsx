import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { StyledEngineProvider } from '@mui/material/styles';
import i18n from './i18n.ts';
import { I18nextProvider } from 'react-i18next'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
     <BrowserRouter>
        <StrictMode>
            <StyledEngineProvider injectFirst>
                <I18nextProvider i18n={i18n}>
                    <App />
                </I18nextProvider>
            </StyledEngineProvider>
        </StrictMode>
    </BrowserRouter>
)
