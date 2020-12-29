
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
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
        <div  style={{ zIndex:"100",width:"-webkit-fill-available"}}>
      <MDBNavbar className="Header" color="py-0 px-4" dark  expand="md"  >
     
     <MDBNavbarBrand>
     <a class="navbar-brand bus-ticket "  style={{margin:"0px",marginLeft:"35px"}} href="/homepage">
      <img src={iconredbus} class=" " alt=" " style={{marginTop:"-46px",marginBottom:"-46px",fontWeight:700}} width="80" height="50"/>
     </a>       
      </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse className="Headercolor" id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem>
          <a class=" navbar-brand uk-text-bold bus-ticket" style={{fontSize:"14px",fontFamily:"Lato"}} href="/BusTickets">
          BUS TICKETS
         </a>
         </MDBNavItem>
          <MDBNavItem>
          <a class=" navbar-brand bus-ticket " style={{fontSize:"14px",fontFamily:"Lato"}} href="/rpool">
          rPool<sup style={{fontWeight:"bold"}}>New</sup>    
          </a>
         </MDBNavItem>
         <MDBNavItem>
         <a class="  navbar-brand bus-ticket" style={{fontSize:"14px",fontFamily:"Lato"}} href="/Homepage">
         BUS HIRE    
          </a>
         </MDBNavItem>
          </MDBNavbarNav>
          <div class="NavRight">
          <MDBNavbarNav right >
            <MDBNavItem nav caret style={{marginTop:"7px",fontFamily:"Lato"}}>
            <a href="/Help"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"10px",fontWeight:"100"}} >
                Help
                </a>
             
            </MDBNavItem>
           
            <MDBNavItem nav caret style={{marginTop:"7px",fontFamily:"Lato"}}>
            <a href="/Showmyticket"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"10px",fontWeight:"100"}} >
               Print/SMS Ticket
                </a>
             
            </MDBNavItem>
            <MDBNavItem nav caret style={{marginTop:"7px",fontFamily:"Lato"}}>
            <a href="#"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"10px",fontWeight:"100"}} >
               Cancel Ticket
                </a>
             
            </MDBNavItem>
          
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user"  />
                  
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Sign In/Sign Up</MDBDropdownItem>
                 </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
           </MDBNavbarNav>
           </div>


        </MDBCollapse>
      </MDBNavbar>
      </div>
    </Router>
    );
  }
}

export default Header;
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
// import image from '../../assets/homepage/logo.png';
// import iconredbus from '../../assets/homepage/redbuswhiteicon.png'
// import './Header.css';

// class Header extends Component {
    
//     render() { 
//        return (
//         <div className="Header" style={{position:"fixed",zIndex:"100",width:"-webkit-fill-available"}}>
//             <div class="uk-container header ">
//                 <div class="row">
//                 <div class="col-9">
               
//                 <Link to="/Homepage" class="uk-text-bold bus-ticket "><img src={iconredbus} class=" " alt=" " style={{marginTop:"-6px"}} width="70" height="50"/></Link>&nbsp;
//                 <Link to="/BusTickets" className="uk-text-bold bus-ticket" style={{color:"#fff"}}>BUS TICKETS </Link>&nbsp;&nbsp;&nbsp;
//                     <Link to="/rpool" class=" bus-ticket  ">rPool<sup style={{fontWeight:"bold"}}>New</sup>    </Link>&nbsp;&nbsp;&nbsp;
//                     <Link to="/Homepage" class=" bus-ticket  ">BUS HIRE    </Link>&nbsp;&nbsp;&nbsp;

//                 </div>
                
//                 <ul style={{display:"flex",listStyle:"none"}} >
//               <li>  <a href="/Help" target="_blank" class=" bus-ticket " style={{color:"#fff"}} >Help</a>&nbsp;&nbsp;&nbsp;&nbsp;
//               </li>

//                   <li>  <a class="bus-ticket  "href="#" style={{color:"#fff"}}>Manage Booking  </a>
//                   </li>
//                   <li>  <a href="" uk-icon="icon: chevron-down;ratio:1"  style={{color:"#fff",marginTop:"-13px"}}></a>             
//                 </li>&nbsp;&nbsp;&nbsp;&nbsp;
//                   <li>  <a href="" ><i class='far fa-user-circle' style={{fontSize:"35px",color:"#fff"}}></i></a> </li>
//                 <li>  <a href="" uk-icon="icon: chevron-down;ratio:1"  style={{color:"#fff",marginTop:"-13px"}}></a>             
//                 </li>
//                  </ul>
               
                


//                 </div>
//                 </div>
//             </div>
        
        
        
    
//        )
//     }
// }
 
// export default Header;