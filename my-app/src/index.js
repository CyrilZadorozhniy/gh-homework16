import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './ui/App';
import { BrowserRouter } from 'react-router-dom'
import './ui/index.css';

ReactDOM.render((
    <BrowserRouter>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </BrowserRouter>),
    document.getElementById('root'));

