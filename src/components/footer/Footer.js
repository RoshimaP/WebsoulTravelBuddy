import React from "react";
import './Footer.css';
import ReactDOM from 'react-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import image from '../../assets/homepage/logo2.png';

const FooterPage = () => {
  return (
    // <MDBFooter color="black" className="font-small pt-4 mt-4">
    <div className="Footer" >
      <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>
      
         
            
         <MDBCol md="2">
            <ul>
            <h5 className="title">About redbus</h5>
              <li className="list-unstyled">
                <a className="link-style" href="#!">About Us</a>
                
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Mobile Version</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">redBus on MObile</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Sitemap</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Offers</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Careers</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Values</a>
              </li>
            </ul>
         </MDBCol>
          
          <MDBCol md="2">
            
            <ul>
            <h5 className="title">Info</h5>
              <li className="list-unstyled"> 
                <a className="link-style" href="#!">T & C</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">FAQ</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Blog</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Agent Registration</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Insurance Partner</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">User Agreement</a>
              </li>
            </ul>
          </MDBCol>
          
          <MDBCol md="2">
            
            <ul>
            <h5 className="title">Global Sites</h5>
              <li className="list-unstyled">
                <a className="link-style" href="#!">India</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Singapore</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Malaysia</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Indonesia</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Peru</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Colombia</a>
              </li>
              
            </ul>
          </MDBCol>
          
          <MDBCol md="2">
          
            <ul>
            <h5 className="title">Our Partners</h5>
              <li className="list-unstyled">
              
                <a className="link-style" href="#!">Goibibo</a>
              </li>
              <li className="list-unstyled">
                <a className="link-style" href="#!">Makemytrip</a>
              </li>
            </ul>
            </MDBCol>
            <MDBCol md="4">
            <img src={image} class=" " alt=" " />;   
    <div><p>redBus is the world's largest online bus ticket booking service trusted by over 18 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</p></div>
<a href="" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a>
<a href="" class="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
    <div><p>Ⓒ 2020 ibibogroup All rights reserved</p></div>
    </MDBCol>
    
     

</MDBRow>

      </MDBContainer>
      
      {/* // </MDBFooter> */}
   </div>    
  );
}

export default FooterPage;