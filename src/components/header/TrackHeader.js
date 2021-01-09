
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import modalimg from '../../assets/help/modelimg.svg';
import redicon from '../../assets/homepage/logo_org.png';
import facebook from '../../assets/help/facebookicon.svg';
import google from '../../assets/help/googleicon.svg';

 import { Link } from 'react-router-dom';
 import iconredbus from '../../assets/homepage/redbus_real_logo.png'
   import '../header/Header.css';

class Header extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
        <div  style={{ position:"relative",zIndex:"100",width:"-webkit-fill-available"}}>
      <MDBNavbar className="Header" color="py-0 px-4" dark  expand="md"  >
     
     <MDBNavbarBrand>
     <a class="navbar-brand uk-text-bold bus-ticket "  style={{margin:"0px"}} href="/homepage">
      <img src={iconredbus} class=" " alt=" " style={{marginTop:"-46px",marginBottom:"-46px"}} width="70" height="50"/>
     </a>       
      </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse className="Headercolor" id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem>
          <a class=" navbar-brand uk-text-bold bus-ticket" style={{fontSize:"12px"}} href="/BusTickets">
          BUS TICKETS
         </a>
         </MDBNavItem>
          <MDBNavItem>
          <a class=" navbar-brand bus-ticket " style={{fontSize:"12px"}} href="/rpool">
          rPool<sup style={{fontWeight:"bold"}}>New</sup>    
          </a>
         </MDBNavItem>
         <MDBNavItem>
         <a class="  navbar-brand bus-ticket" style={{fontSize:"12px"}} href="/Bushire">
         BUS HIRE    
          </a>
         </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem nav caret style={{marginTop:"7px"}}>
            <a href="/Help"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"12px",fontWeight:"100"}} >
                Help
                </a>
             
            </MDBNavItem>
            <MDBNavItem>
            <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className=" d-md-inline" style={{fontSize:"12px"}}>Manage Booking </div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default "  >
                  <MDBDropdownItem  header  href="#!"  >Bus Ticket</MDBDropdownItem>
                  <MDBDropdownItem  href="#!"><a href="/Cancel"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"12px",fontWeight:"100"}} >Cancel</a></MDBDropdownItem>
                  <MDBDropdownItem href="#!"><a href="/Reschedule"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"12px",fontWeight:"100"}} >
               ReSchedule
                </a></MDBDropdownItem>
                  <MDBDropdownItem href="#!"> <a href="/Showmyticket"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"12px",fontWeight:"100"}} >
                Show My Ticket
                </a></MDBDropdownItem>
                  <MDBDropdownItem href="#!"><a href="/SMSand"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"12px",fontWeight:"100"}} >
               Email/SMS
                </a></MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>
          
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user"  />
                  
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem >
                  <a href="/Signin"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"12px",fontWeight:"100"}} >Sign In/Sign Up</a>

                 
  
                </MDBDropdownItem>
                 </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
           </MDBNavbarNav>
        


        </MDBCollapse>
      </MDBNavbar>
      </div>
    </Router>
    );
  }
}

export default Header;
