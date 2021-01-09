import React from "react";
import './Footer.css';
import ReactDOM from 'react-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import image from '../../assets/homepage/logo2.png';

const Footernew = () => {
  return (
    // <MDBFooter color="black" className="font-small pt-4 mt-4">
    <div className="Footer" >
      <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>
      
         
            
         <MDBCol md="2">
            <ul>
            
            </ul>
         </MDBCol>
          
          <MDBCol md="2">
            
            <ul>
            
            </ul>
          </MDBCol>
          
          <MDBCol md="2">
            
            <ul>
            
              
            </ul>
          </MDBCol>
          
          <MDBCol md="2">
          
            <ul>
            
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

export default Footernew;