import React from 'react';
import {Home} from './Home';
import { Login } from "./Login";
import { Register } from "./Register";
import { Switch, Route, Redirect } from 'react-router-dom';

export class Main extends React.Component {
    // under the topbar
    getLogin = () =>{
        //if user have login , we should render to home, otherwise render to login
        return this.props.isLoggedIn ? <Redirect to='/home'/> : <Login handleSuccessfulLogin = {this.props.handleSuccessfulLogin}/>
    }

    getHome = () => {
        return this.props.isLoggedIn ? <Home/> : <Redirect to='/login'/>;
    }

    render() {
        return (
            <div className='main'>
                <Switch>
                    <Route exact path="/" render={this.getLogin}/>
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" render={this.getHome}/>
                    <Route render={this.getLogin}/>
                </Switch>
            </div>
        );
    }
}