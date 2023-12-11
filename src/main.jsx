import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './app/styles/index.scss';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ThemeProvider from './widgetes/switchTheme/ThemeProvider.jsx';

// добавляет в id root разметку jsx
ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <HashRouter>
            <App />
        </HashRouter>
    </ThemeProvider>
);
