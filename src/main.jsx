import React from 'react';
import ReactDOM from 'react-dom/client';
import { MeliApp } from './MeliApp';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
      <AuthProvider>
          <MeliApp/>
      </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>,
)
