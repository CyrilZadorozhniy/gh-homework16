import React from 'react';
import Authorized from './authorized/Authorized';
import { Switch, Route, Redirect} from 'react-router-dom';
import Initialization from './initialization/Initialization';
import './App.css';



const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={()=> {
            let username = JSON.parse(localStorage.getItem("username")),
                pass = JSON.parse(localStorage.getItem("password"));

            if (!(username === null) && !(pass === null)) {
              return <Component/>
            } else {
                return   <Redirect to="/initialization" />
            }
        }}/>)
    };

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

export default App;
