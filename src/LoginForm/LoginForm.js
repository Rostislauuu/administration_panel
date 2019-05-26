import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import {Redirect} from "react-router-dom";

import LoginComponent from './LoginComponent';
import SubmitButton from './SubmitButton';
import Header from './Header';
import Footer from './Footer';

import './loginForm.css';
import MainSite from '../MainSite/MainSite';

const cookie = new Cookies();

class LoginForm extends Component{
    constructor(props){
        super(props);
    };
    
    // Sending data to server
    // Getting response from server
    // Setting cookie based on response

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        
        fetch('api/auth/login', {
            method: 'POST',
            body: data
            })
            .then(response => response.json())
            .then(backData => cookie.set('myCookie', 
                                         backData.token,
                                         {path: '/' , expires: new Date(backData.exp)}
                                         ));
            
            if(cookie.get('myCookie')) {
                return <Redirect to="/content" />
            }else{
                console.log('You have no access');
            }       

    }

    render(){
        return(
            <div className="root-box">
                <Header />
                <form onSubmit={this.handleSubmit} className="login-box" >
                <LoginComponent id="email" type="email" name="email" placeholder="Email" />
                <LoginComponent id="password" type="password" name="password" placeholder="Password" / > 
                <SubmitButton />
                </form>
                <Footer />
            </div>
        )
    }
}

export default LoginForm;