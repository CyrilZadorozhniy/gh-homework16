import React from 'react';
import './Topbar.css'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

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
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const style = {
    iconButton: {
        padding: 0,
        width: 'auto',
        height: 'auto',
    },
};

class Topbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Popover: false,
            signOutDialog: false,
            leftBarToggle: true
        };
    }
    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            Popover: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            Popover: false,
        });
    };
    handleSignOut = () =>{
        this.setState({signOutDialog: true, Popover: false});
    };


    handleClose = (e) => {
        const { history } = this.props;
        if (e) {
            this.setState({signOutDialog: false});
            localStorage.removeItem("token");
            history.push('/initialization');
        } else {
            this.setState({signOutDialog: false});
        }

    };
    leftBarToggle = () => {
      this.setState({
          leftBarToggle: !this.state.leftBarToggle
      })  ;
        this.props.onClickLeftBar(this.state.leftBarToggle)
    };
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => this.handleClose(false)}
            />,
            <FlatButton
                label="Sign out"
                primary={true}
                onClick={() =>this.handleClose(true)}
            />,
        ];
        return (
            <div className={'topbar'} >
                <div className="left-container">
                    <IconButton style={{marginLeft: 15}} onClick={this.leftBarToggle}>
                        <i className="material-icons">menu</i>
                    </IconButton>
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
                            {
                                (this.props.statusProps === 'Hide Avatar')? null:<Avatar src={User} size={50}/>
                            }
                        </IconButton>
                        <IconButton style={style.iconButton}  onClick={this.handleClick}>
                            <i className="material-icons">arrow_drop_down</i>
                        </IconButton>
                        <Popover
                            open={this.state.Popover}
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
                <Dialog
                    title="Sign out"
                    actions={actions}
                    modal={false}
                    open={this.state.signOutDialog}
                    onRequestClose={this.handleClose}
                >
                    Are you sure you want to sign out of your account?
                </Dialog>
            </div>
        )
    }
}

const  mapState = (state, props) => {
    return {
        statusProps: state.status
    }
};
export default connect(mapState)(withRouter(Topbar));