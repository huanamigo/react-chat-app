import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './reset.css';
import { HashRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.tsx';
import { ChatContextProvider } from './context/ChatContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChatContextProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ChatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
