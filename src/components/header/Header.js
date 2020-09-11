import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import image from '/Users/Admin/travel_buddy/src/assets/images/logo.png'
import './Header.css';

class Header extends Component {
    
    render() { 
       return (
        <div className="Header" >
            <div class="uk-container header">
                <div class="row">
                <div class="col-9">
                <a class="uk-text-bold bus-ticket " href="#"><img src={image} class=" " alt=" " width="80" height="50"/></a>&nbsp;
                    <a class="uk-text-bold bus-ticket  "href="#">Bus Ticket  </a>&nbsp;&nbsp;&nbsp;
                    <a class="uk-text-bold bus-ticket  "href="#">rpool New   </a>&nbsp;&nbsp;&nbsp;
                    <a class="uk-text-bold bus-ticket  "href="#">BUS HIRE    </a>&nbsp;&nbsp;&nbsp;

                </div>
                <div class="col-3">
                <a class="uk-text-bold bus-ticket " href="#">Help</a>&nbsp;&nbsp;&nbsp;&nbsp;


                    <a class="uk-text-bold bus-ticket  "href="#">Manage Booking  </a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="" uk-icon="user"></a>
                    

                </div>
                </div>
            </div>
         {/* <div class="uk-height-max-small nav-style"> 
         <nav class="uk-navbar-container uk-navbar"> 
        <div class="uk-navbar-left">
        
        <ul class="uk-navbar-nav">
        <a class="uk-navbar-item uk-margin-remove-top uk-logo" href="#"><img src={image} class=" " alt=" " width="80" height="50"/></a>
            <li class="uk-active"><a href="#">BUS TICKETS</a></li>
            <li class="uk-active"><a href="#">rpool New</a></li>
            <li class="uk-active"><a href="#">BUS HIRE</a></li>
        </ul> 
        </div>
        </nav>
        </div> */}
        </div>
        
    
       )
    }
}
 
export default Header;