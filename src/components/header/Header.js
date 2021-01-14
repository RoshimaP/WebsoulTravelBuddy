
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
 import { Link } from 'react-router-dom';
 import iconredbus from '../../assets/homepage/redbus_real_logo.png'
   import '../header/Header.css';
   import modalimg from '../../assets/help/modelimg.svg';
   import redicon from '../../assets/homepage/logo_org.png';
   import facebook from '../../assets/help/facebookicon.svg';
   import google from '../../assets/help/googleicon.svg';
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
     <Link class="navbar-brand bus-ticket "  style={{margin:"0px",marginLeft:"35px"}} href="/homepage">
      <img src={iconredbus} class=" " alt=" " style={{marginTop:"-46px",marginBottom:"-46px",fontWeight:700}} width="80" height="50"/>
     </Link>       
      </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse className="Headercolor" id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem>
          <Link to="/BusTickets" class=" navbar-brand uk-text-bold bus-ticket" style={{fontSize:"14px",fontFamily:"Lato"}} >
          BUS TICKETS
         </Link>
         </MDBNavItem>
          <MDBNavItem>
          <Link to="/rpool" class=" navbar-brand bus-ticket " style={{fontSize:"14px",fontFamily:"Lato"}}>
          rPool<sup style={{fontWeight:"bold"}}>New</sup>    
          </Link>
         </MDBNavItem>
         <MDBNavItem>
         <Link class="  navbar-brand bus-ticket" style={{fontSize:"12px"}} to="/Bushire">
         BUS HIRE    
         </Link>
         </MDBNavItem>
          </MDBNavbarNav>
          <div class="NavRight">
          <MDBNavbarNav right >
            <MDBNavItem nav caret style={{marginTop:"7px",fontFamily:"Lato"}}>
            <Link to="/Help" target="_blank"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"10px",fontWeight:"100"}} >
                Help
                </Link>
             
            </MDBNavItem>
           
            <MDBNavItem nav caret style={{marginTop:"7px",fontFamily:"Lato"}}>
            <Link href="/Showmyticket"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"10px",fontWeight:"100"}} >
               Print/SMS Ticket
               </Link>
             
            </MDBNavItem>
            <MDBNavItem nav caret style={{marginTop:"7px",fontFamily:"Lato"}}>
            <Link href="/Cancel"  class="navbar-brand uk-text-bold bus-ticket "  style={{fontSize:"12px",fontWeight:"100"}} >Cancel</Link>

             
            </MDBNavItem>
          
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user"  />
                  
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">

                  <button type="button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                    Sign In/Sign Up
                    </button>
                 
     
                  </MDBDropdownItem>
                 </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
           </MDBNavbarNav>
           </div>


        </MDBCollapse>
      </MDBNavbar>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  
  <div class="modal-dialog widthcf " role="document" style={{maxWidth:"679px"}}>
  
  
  
    <div class="modal-content  modalfull" style={{borderRadius:"8px",marginLeft:"1px",boxShadow:"none",border:"1px solid darkgrey"}} >
   
      <div class="modal-body borderrf uk-padding-remove" style={{}}>
    
      
      <div class="uk-grid uk-child-width-1-2@l  uk-child-width-1-2@s uk-margin-remove" style={{padding:"4px",paddingRight:"14px"}}>
        <div class="uk-padding-remove-right" style={{backgroundImage:'url(' +modalimg+ ')',backgroundRepeat:"no-repeat"}}>
        <br/>   
  <div style={{fontSize:"22px",fontWeight:"700",color:"#fff",fontFamily:"Montserrat"}}>Unlock the</div>
  <div style={{fontSize:"22px",fontWeight:"700",color:"#fff",fontFamily:"Montserrat"}}>Smarter Way to Travel</div>
        </div>
        <div class="" uk-grid style={{paddingLeft:"20px",paddingBottom:"100px"}} >
        <button  type="button " style={{fontWeight:"100",fontSize:"40px",color:'black'}} class="close buttonclosea" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          
        <div style={{marginTop:"10px"}}>
                  <img src={redicon} />                          
  
                    </div> 
                   
           <div style={{marginTop:"10px"}}>
                     <p className="" style={{width:"78%",color:"#d84e55",fontWeight:"700",fontSize:"17px",fontFamily:"Montserrat"}}>
                     Sign in to avail exciting discounts and cashbacks!!                         
                        </p>                           
           </div>
           <div class="uk-margin" style={{}}>
              <input class="uk-input" type="text" style={{fontSize:"14px",fontWeight:"600",fontFamily:"Montserrat", width:"92%",border:"1px solid black",borderRadius:"4px",height:"44px"}} placeholder="Enter your Mobile Number"/>
          </div> 
          <div>
                       <button className="uk-button" disabled  style={{fontSize:"12px", fontFamily:"Montserrat", paddingLeft:"9px", borderRadius:"3px",height:"44px",fontWeight:"700", width:"92%",textTransform:"capitalize", backgroundColor:"#d84e55",opacity:"0.5",color:"#fff"}}>
                            GENERATE OTP<span style={{fontWeight:"100",fontSize:"12px"}}>(One Time Password)</span>                      
                           </button>                             
              </div> 
              
                          <div >
                            <div style={{textAlign:"center",marginTop:"10px"}}>
                        <span style={{fontSize:"12px",fontWeight:"700",fontFamily:"Montserrat"}}> OR,</span><span style={{fontSize:"12px",fontFamily:"Montserrat"}}> Connect using social accounts                          
                       </span></div>
                </div> 
  
                  
                            <div className="uk-grid" style={{marginTop:"10px"}}>
                            <div>
                                <button class="uk-button" style={{backgroundColor:"#fff",border:"1px solid ",width:"138px",borderRadius:"3px"}}>
                                   <img src={google} style={{marginLeft:"-24px"}}   /><span style={{textTransform:"capitalize",fontSize:"12px",marginLeft:"28px",fontWeight:"600",color:"#ff3d00"}}>Google</span>                        
                                          </button>                          
                                    </div> 
                              <div class="buttonfb">
                                <button class="uk-button " style={{backgroundColor:"#fff",border:"1px solid ",width:"138px",marginLeft:"-29px",borderRadius:"3px"}}>
                                  
                                    <img src={facebook} style={{marginLeft:"-24px"}}   /> 
  
                                    
                                    <span style={{textTransform:"capitalize",fontSize:"12px",fontWeight:"600",color:"#485a96",marginLeft:"27px"}}>Facebook</span>                       
  
                                    
                                          </button>                          
                                    </div>  
                                                           
                              </div> 
                             
                              <div>
                               <div style={{fontSize:"10px",color:"#9b9b9b",textAlign:"center",fontFamily:"Montserrat",marginTop:"6px"}}>
                               By signing up, you agree to
                               <br/>
                               
                         <span style={{textAlign:"center",fontFamily:"Montserrat"}}> our < a href="" style={{fontWeight:"700"}}>Terms & Conditions</a> and <a href="" style={{fontWeight:"700"}}> Privacy Policy</a>                           
                         </span> </div>                           
                            
                               </div>    
  
  
  
        </div>
  
      </div>
      
    </div>
    </div>
  </div>
  
  
  
                  </div>

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