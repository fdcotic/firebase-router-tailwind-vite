import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider.jsx'

import { CssBaseline } from '@mui/material';

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <StrictMode>
        <CssBaseline />
        <App />
      </StrictMode>
    </BrowserRouter>
  </UserProvider>
);
