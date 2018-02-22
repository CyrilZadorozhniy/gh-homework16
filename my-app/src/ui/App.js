import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Initialization from './initialization/Initialization';
import CircularProgress from 'material-ui/CircularProgress';
import './App.css';

import Leftbar from './leftbar/Leftbar';
import Topbar from './topbar/Topbar';

//Routes
import Home from '../routes/Home';
import Workflow from '../routes/Workflow';
import Statistics from '../routes/Statistics';
import Calendar from '../routes/Calendar';
import Users from '../routes/Users';
import Settings from '../routes/Settings';

class DefaultLayout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
        document.getElementsByTagName('title')[0].text = 'React App';
    }
    componentWillMount() {
        let data = {
            token: JSON.parse(localStorage.getItem("token"))
        };
        fetch('/api/user/check',{
            headers: {
                'Content-type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json()
            })

            .then(res => {
                setTimeout(()=> {
                    this.setState({
                        loading: false,
                        check: res.check
                    })
                },1000);

            });
    }

    render() {
        const  {component: Component, ...rest } = this.props;
        return (
            <Route {...rest} render={()=> {
                if (this.state.loading) {
                    return <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center', height: '100vh'}}>
                                 <CircularProgress size={60} thickness={7} />
                           </div>
                }
                if (this.state.check){
                    return (
                        <div className={'site-body'}>
                            <Leftbar/>
                            <div className={'topbar-main-section'}>
                                <Topbar/>
                                <div className='main'>
                                    <Component/>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    localStorage.removeItem("token");
                    return   <Redirect to="/initialization" />
                }
            }}/>
        )
    };
}


class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>

            <Route   path={'/initialization'} component={Initialization}  />


            <DefaultLayout exact path="/" component={Home}/>
            <DefaultLayout exact path="/workflow" component={Workflow}/>
            <DefaultLayout exact path="/statistics" component={Statistics}/>
            <DefaultLayout exact path="/calendar" component={Calendar}/>
            <DefaultLayout exact path="/users" component={Users}/>
            <DefaultLayout exact path="/settings" component={Settings}/>
        </Switch>
      </div>
    );
  }
}

export default App
