import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Leftbar.css';

import Logo from '../../assets/img/logo.png'


const NavigationList = () => {
    return (
        <nav className={'leftbar-nav'}>
            <ul className={'nav-list'}>
                <li>
                    <NavLink to={'/'} exact activeClassName={'nav-active'} className="home-ico">Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/workflow'} exact activeClassName={'nav-active'} className="workflow-ico">Workflow</NavLink>
                </li>
                <li>
                    <NavLink to={'/statistics'} exact activeClassName={'nav-active'} className="statistics-ico">Statistics</NavLink>
                </li>
                <li>
                    <NavLink to={'/calendar'} exact activeClassName={'nav-active'} className="calendar-ico">Calendar</NavLink>
                </li>
                <li>
                    <NavLink to={'/users'} exact activeClassName={'nav-active'} className="users-ico">Users</NavLink>
                </li>
                <li>
                    <NavLink to={'/settings'} exact activeClassName={'nav-active'} className="settings-ico">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
};

class Leftbar extends React.Component {
    render() {
        return (
            <div className="leftbar">
                <div className="wrap-logo">
                    <img src={Logo} alt="Merkury"/>
                    <h1>Merkury</h1>
                </div>
                <NavigationList/>
            </div>
        )
    }
}

export default Leftbar