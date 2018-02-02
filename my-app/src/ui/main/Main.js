import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './Main.css'

import Home from '../../routes/Home';
import Workflow from '../../routes/Workflow';
import Statistics from '../../routes/Statistics';
import Calendar from '../../routes/Calendar';
import Users from '../../routes/Users';
import Settings from '../../routes/Settings';

class Main extends React.Component {
    render() {
        return (
            <div className={'main'}>
                <Route exact path="/" component={Home} />
                <Route exact path="/workflow" component={Workflow}/>
                <Route exact path="/statistics" component={Statistics}/>
                <Route exact path="/calendar" component={Calendar}/>
                <Route exact path="/users" component={Users}/>
                <Route exact path="/settings" component={Settings}/>
            </div>
        )
    }
}

export default Main