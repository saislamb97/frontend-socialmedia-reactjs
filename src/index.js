import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './contextapi/AuthContext';
import { DarkmodeContextProvider } from './contextapi/DarkmodeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkmodeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkmodeContextProvider>
  </React.StrictMode>
);