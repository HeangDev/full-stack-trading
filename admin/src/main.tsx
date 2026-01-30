import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
     <BrowserRouter>
        <StrictMode>
            <StyledEngineProvider injectFirst>
                <App />
            </StyledEngineProvider>
        </StrictMode>
    </BrowserRouter>
)
