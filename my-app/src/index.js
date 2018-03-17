import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './ui/App';
import { BrowserRouter } from 'react-router-dom'
import './ui/index.css';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render((
    <Provider store={ store }>
        <BrowserRouter>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root'));

