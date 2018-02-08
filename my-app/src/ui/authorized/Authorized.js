import React from 'react';
import Leftbar from './../leftbar/Leftbar';
import Topbar from './../topbar/Topbar';
import Main from './../main/Main';




class Authorized extends React.Component {
    render() {
        return (
            <div className={'site-body'}>
                <Leftbar/>
                <div className={'topbar-main-section'}>
                    <Topbar/>
                    <Main/>
                </div>
            </div>
        );
    }
}

export default Authorized;