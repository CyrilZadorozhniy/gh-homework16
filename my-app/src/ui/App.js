import React from 'react';
import Authorized from './authorized/Authorized';
import { Switch, Route, Redirect} from 'react-router-dom';
import Initialization from './initialization/Initialization';
import CircularProgress from 'material-ui/CircularProgress';
import './App.css';


class DefaultLayout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
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
                setInterval(()=> {
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
                    return <Component/>
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


            <DefaultLayout exact path="/" component={Authorized}/>
            <DefaultLayout exact path="/workflow" component={Authorized}/>
            <DefaultLayout exact path="/statistics" component={Authorized}/>
            <DefaultLayout exact path="/calendar" component={Authorized}/>
            <DefaultLayout exact path="/users" component={Authorized}/>
            <DefaultLayout exact path="/settings" component={Authorized}/>
        </Switch>
      </div>
    );
  }
}

export default App
