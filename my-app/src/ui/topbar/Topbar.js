import React, { Component } from 'react';
import './Topbar.css'


class Toptbar extends React.Component {
    render() {
        return (
            <div className={'topbar'} >
                <div className="topbar-container">
                    <i className="material-icons">menu</i>
                </div>
            </div>
        )
    }
}

export default Toptbar