import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./assets/css/main.css"
import { BrowserRouter } from "react-router";
import "./i18n.ts"

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
)
