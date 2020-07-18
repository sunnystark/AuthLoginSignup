import React, { Component } from 'react';
import './App.css';
// import Nav from './_components/nav'; 
import { Router, Switch, Route} from 'react-router-dom';
import { Vendor } from './vendors/vendor.component';
import { UserList } from './vendors/userlist.component'
import  { Login } from './login/';
import { Register } from './registration/register.component';
import { Home } from './home/';
import { history } from './_helpers';
import { PrivateRoute } from './_components';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>            
              <Switch>
                <Route exact path='/' component={Login} />
                <PrivateRoute exact path='/home' component={Home} />
                <PrivateRoute exact path='/user-list' component={UserList}/>
                <PrivateRoute exact path='/vendor' component={Vendor} />
                <Route  path='/register' component={Register} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
 