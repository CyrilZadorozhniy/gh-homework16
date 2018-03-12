import React from 'react';
import './../ui/users/Users.css'
import Tabel from './../ui/atoms/Table'

import CircularProgress from 'material-ui/CircularProgress';


class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    componentWillMount() {
        fetch('/api/user/customers')
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({
                    customers: res.customers,
                    loading: false
                });
            })
    }
    render() {
        const options = {
            sizePerPage: 7,
            hideSizePerPage: true
        };

        if (this.state.loading) {

            return (
                <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center', height: '100vh'}}>
                    <CircularProgress size={60} thickness={7} />
                </div>
            )
        } else {
            return(
                <div className="section-users">
                    <Tabel users={ this.state.customers } options={ options }/>
                </div>
            )
        }
    }
}
export default Users