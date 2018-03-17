import React from 'react';
import './../ui/users/Users.css'
import Tabel from './../ui/atoms/Table'
import Select from '../ui/atoms/Select'

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
                    filterCustomers: res.customers,
                    loading: false
                });
            })
    }
    filterActiveUsers = (e) => {
        if (e === 'Active Second') {
            this.setState({
                filterCustomers: this.state.customers.filter((item)=> {
                    return (item.active === true)
                })
            })
        } else {
            this.setState({
                filterCustomers: this.state.customers
            })
        }
    };
    render() {
        const options = {
            sizePerPage: 7,
            hideSizePerPage: true
        };
        const selects = ['Active First','Active Second'];

        if (this.state.loading) {

            return (
                <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center', height: '100vh'}}>
                    <CircularProgress size={60} thickness={7} />
                </div>
            )
        } else {
            return(
                <div className="section-users">
                    <header style={{display:'flex', justifyContent:'space-between', marginBottom: 20}}>
                        <h2>Users</h2>
                        <Select data={selects} onChangeSelect={this.filterActiveUsers}/>
                    </header>
                    <Tabel users={ this.state.filterCustomers } options={ options }/>
                </div>
            )
        }
    }
}
export default Users