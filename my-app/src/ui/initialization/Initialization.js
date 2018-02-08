import React from 'react';
import './initialization.css';
import Logo from '../../assets/img/logo.png'

const styles = {
    inkStyle: {
        marginLeft: 100 / 2 +"%",
    }
};

class Initialization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: 'b',
            username: '',
            password: '',
        };
    }
    tabsClick = (value) => {
        this.setState({
            tabs: value
        });
    };
    handleChange = (e) => {
        let name = e.target.name;
      this.setState({
        [name]: e.target.value
      })
    };

    handleSubmitRegister = (e) => {
        e.preventDefault();
        console.log('username - ', this.state.username, 'pass - ', this.state.password);
        localStorage.setItem("username", JSON.stringify(this.state.username));
        localStorage.setItem("password", JSON.stringify(this.state.password));
        this.setState ({
            username: '',
            password: '',
            tabs: 'b',
        });
    };
    handleSubmitLogin = (e) => {
        e.preventDefault();
        const { history } = this.props;
        let username = JSON.parse(localStorage.getItem("username")),
            pass = JSON.parse(localStorage.getItem("password"));

        if (username === this.state.username && pass === this.state.password) {
            this.setState ({
                username: '',
                password: '',
            });
            history.push('/');
        } else if (!(username === this.state.username)) {
            alert('This user is not registered');
        } else {
            alert('username or password is not correct')
        }

    };
    render() {
        return (
            <div className="initialization-site">
                <div className="initialization-body">
                    <header className="initialization-header"> 
                        <div className="wrap-logo">
                            <img src={Logo} alt="Merkury"/>
                        </div>
                        <div className="tabs-bar">
                            <ul className="tabs-list">
                                <li onClick={() => this.tabsClick('a')}>Register</li>
                                <li onClick={() => this.tabsClick('b')}>Login</li>
                            </ul>
                            <div className="inkbar">
                                <span  style={this.state.tabs === 'b' ? styles.inkStyle : null }> </span>
                            </div>
                        </div>
                    </header>
                    <div className="initialization-main">
                        {this.state.tabs === 'a' ?
                            <div className="initialization-tab-register">
                                <form onSubmit={this.handleSubmitRegister}>
                                    <h2>Register </h2>
                                    <label className="username-ico">
                                        <input  name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
                                    </label>
                                    <label className="password-ico">
                                        <input   name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password"/>
                                    </label>
                                    <button className="submit-btn" type="submit" >Enter</button>
                                </form>
                            </div>
                        :
                            <div className="initialization-tab-login">
                                <form onSubmit={this.handleSubmitLogin}>
                                    <h2>Welcome <span>back!</span></h2>
                                    <label className="username-ico">
                                        <input  name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
                                    </label>
                                    <label className="password-ico">
                                        <input   name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password"/>
                                    </label>
                                    <button className="submit-btn" type="submit" >Enter</button>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Initialization;