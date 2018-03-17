import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Leftbar.css';

import Logo from '../../assets/img/logo.png'

const styles = {
    openLeftBar: {
        width: 270
    },
    closeLeftBar: {
        width: 0,
    }
};

class NavigationList extends React.Component {
    titleSet = (e) => {
        document.getElementsByTagName('title')[0].text = e.target.text;
    };
    render() {
        return (
            <nav className={'leftbar-nav'}>
                <ul className={'nav-list'}>
                    <li>
                        <NavLink to={'/'} exact activeClassName={'nav-active'} className="home-ico" onClick={this.titleSet}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/workflow'} exact activeClassName={'nav-active'} className="workflow-ico" onClick={this.titleSet}>Workflow</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/statistics'} exact activeClassName={'nav-active'} className="statistics-ico" onClick={this.titleSet}>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/calendar'} exact activeClassName={'nav-active'} className="calendar-ico" onClick={this.titleSet}>Calendar</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/users'} exact activeClassName={'nav-active'} className="users-ico" onClick={this.titleSet}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/settings'} exact activeClassName={'nav-active'} className="settings-ico" onClick={this.titleSet}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }

};

class Leftbar extends React.Component {
    render() {
        return (
            <div className="leftbar" style={this.props.leftBarToggle? styles.openLeftBar: styles.closeLeftBar}>
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