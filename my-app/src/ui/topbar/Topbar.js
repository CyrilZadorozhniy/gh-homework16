import React from 'react';
import './Topbar.css'
import { withRouter } from 'react-router';

// img
import  User from '../../assets/img/user.jpg'
// Material UI
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const style = {
    iconButton: {
        padding: 0,
        width: 'auto',
        height: 'auto',
    },
};

class Toptbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }
    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };
    handleSignOut = () =>{
        const { history } = this.props;
        localStorage.removeItem("token");
        history.push('/initialization');
    };
    render() {
        return (
            <div className={'topbar'} >
                <div className="left-container">

                </div>
                <div className="right-container">
                    <button className="button-add">Add project</button>
                    <IconButton style={{marginLeft: 15}}>
                        <i className="material-icons">mail</i>
                    </IconButton>
                    <Badge
                        style={{padding: 0, paddingRight: 20}}
                        badgeContent={3}
                        primary={true}
                        badgeStyle={{top: 5, right: 18, border: '2px solid #ffffff'}}
                    >
                        <IconButton tooltip="Notifications">
                            <NotificationsIcon />
                        </IconButton>
                    </Badge>
                    <div className="avatar-button">
                        <IconButton style={style.iconButton}  onClick={this.handleClick}>
                            <Avatar src={User} size={50}  />
                        </IconButton>
                        <IconButton style={style.iconButton}  onClick={this.handleClick}>
                            <i className="material-icons">arrow_drop_down</i>
                        </IconButton>
                        <Popover
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                            onRequestClose={this.handleRequestClose}
                        >
                            <Menu>
                                <MenuItem primaryText="Refresh" />
                                <MenuItem primaryText="Help &amp; feedback" />
                                <MenuItem primaryText="Settings" />
                                <MenuItem primaryText="Sign out" onClick={this.handleSignOut} />
                            </Menu>
                        </Popover>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Toptbar)