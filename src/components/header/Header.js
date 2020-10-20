import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import image from '../../assets/homepage/logo.png';
import './Header.css';

class Header extends Component {
    
    render() { 
       return (
        <div className="Header">
            <div class="uk-container header ">
                <div class="row">
                <div class="col-9">
               
                <Link to="/Homepage" class="uk-text-bold bus-ticket "><img src={image} class=" " alt=" " width="70" height="50"/></Link>&nbsp;
                <Link to="/BusTickets" className="uk-text-bold bus-ticket">Bus Ticket  </Link>&nbsp;&nbsp;&nbsp;
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
        
        </div>
        
    
       )
    }
}
 
export default Header;