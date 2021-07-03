import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import logo from './../../assets/logo.svg';
import './Header.css';
import SignUp from './SignUp';

import Modal from 'react-modal';


class Header extends Component{
    clickHandler(){
        
        <SignUp />
        }
    render(){
        return (
            <div className='heading'>    
                
                    <img className='center' src={logo} alt='logo' id='logo-properties' />
                    <Button className='login' variant='contained' color='default' onClick={this.clickHandler} >login</Button>
                    <Button className='book' variant='contained' color='primary' >Book Show</Button>
                    <SignUp />

                    
                
                
            </div>
        ) 
    }
}

export default Header;




