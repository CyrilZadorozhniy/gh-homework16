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
                <Route path="/workflow" component={Workflow}/>
                <Route path="/statistics" component={Statistics}/>
                <Route path="/calendar" component={Calendar}/>
                <Route path="/users" component={Users}/>
                <Route path="/settings" component={Settings}/>
            </div>
        )
    }
}

export default Main