import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import image1 from '../../../../assets/homepage/safety.svg';
import image2 from '../../../../assets/homepage/safety.svg';
import image3 from '../../../../assets/homepage/lowest.png';
import image4 from '../../../../assets/homepage/benefits.png';
import image5 from '../../../../assets/homepage/promise.png';
import image6 from '../../../../assets/homepage/Business.png';
import image7 from '../../../../assets/homepage/Brand.png';
import image8 from '../../../../assets/homepage/Eye.png';
import './Cards.css';


class Cards extends Component {
  
        render() {
        return ( 

            <div className="Cards">

              <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"}}>WE PROMISE TO DELIVER</h3>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
              <img src={image5} class=" " alt=" " />;
              </div>
              <br></br>
              <br></br>
      <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>

            <MDBCol md="3">
            <div>
            <hr/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <img src={image1} class=" " alt=" " style={{height:130,width:130}}/>;
           </div>
            </div> 
            
         </MDBCol>
          
          <MDBCol md="3">
            
          <hr/>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <img src={image2} class=" " alt=" "/>;
           </div>  
          </MDBCol>
          
          <MDBCol md="3">
          <hr/>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <img src={image3} class=" " alt=" " />;
           </div> 
          </MDBCol>
          
          <MDBCol md="3">
          <hr/>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <img src={image4} class=" " alt=" " />;
            </div>
            </MDBCol>
</MDBRow>
<MDBRow>

            <MDBCol md="3">
            <h5 className="title">SAFETY+</h5>
         </MDBCol>
           <MDBCol md="3">
            <h5 className="title">SUPERIOR CUSTOMER SERVICE</h5>
             
          </MDBCol>
          
          <MDBCol md="3">
            <h5 className="title">LOWEST PRICES</h5> 
          </MDBCol>
          
          <MDBCol md="3"> 
            <h5 className="title">UNMATCHED BENEFITS</h5>  
            </MDBCol>
    </MDBRow>
    <MDBRow>

            <MDBCol md="3">
            <p style={{fontSize:13,fontWeight:400,color:"#43464b",display:"flex",justifyContent:"center",alignItems:"center"}}>With Safety+ we have brought in a set of measures like Sanitized buses, mandatory masks etc. to ensure you travel safely.</p>
            
         </MDBCol>
         
          
          <MDBCol md="3">
            <p style={{fontSize:13,fontWeight:400,color:"#43464b",display:"flex",justifyContent:"center",alignItems:"center"}}>We put our experience and relationships to good use and are available to solve your travel issues.</p>
            
          </MDBCol>
          
          <MDBCol md="3">
            <p style={{fontSize:13,fontWeight:400,color:"#43464b",display:"flex",justifyContent:"center",alignItems:"center"}}>We always give you the lowest price with the best partner offers.</p>
            
          </MDBCol>
          
          
          <MDBCol md="3">
            <p style={{fontSize:13,fontWeight:400,color:"#43464b",display:"flex",justifyContent:"center",alignItems:"center"}}> We take care of your travel beyond ticketing by providing you with innovative and unique benefits.</p>
             
            </MDBCol> 
              

</MDBRow>


      </MDBContainer>
      <br></br>
      <br></br>

      <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"}}>AWARDS & RECOGNITION</h3>
              
              <br></br>
              <br></br>
      <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>

            <MDBCol md="4">
            
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <img src={image6} class=" " alt=" " />;
           
            </div> 
            
         </MDBCol>
          
          <MDBCol md="4">
            
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <img src={image7} class=" " alt=" " />;
            
            </div> 
          </MDBCol>
          
          <MDBCol md="4">
          
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <img src={image8} class=" " alt=" " />;
            </div>
          </MDBCol>
          
          
</MDBRow>
<MDBRow>

            <MDBCol md="4">
            <h6 className="title">Most Innovative Company</h6>
         </MDBCol>
           <MDBCol md="4">
            <h6 className="title">Most Trusted Brand</h6>
             
          </MDBCol>
          
          <MDBCol md="4">
            <h6 className="title">Mobile Innovation Award</h6> 
          </MDBCol>
          
          
    </MDBRow>



      </MDBContainer>
      <br></br>
            


      <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"}}>THE NUMBERS ARE GROWING!</h3>
              
              <br></br>
              <br></br>
      <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>

            <MDBCol md="4">
            <h5 className="title">CUSTOMERS</h5>
            
         </MDBCol>
          
          <MDBCol md="4">
            
          <h5 className="title">OPERATORS</h5>
            
             
          </MDBCol>
          
          <MDBCol md="4">
          <h5 className="title">BUS TICKETS</h5>            
          </MDBCol>
          
        
</MDBRow>
<MDBRow>

            <MDBCol md="4">
            <h1 className="title" style={{color:"#ff0000"}}>23 M</h1>
         </MDBCol>
           <MDBCol md="4">
            <h1 className="title" style={{color:"red"}}>2600</h1>
             
          </MDBCol>
          
          <MDBCol md="4">
            <h1 className="title" style={{color:"red"}}>180+ M</h1> 
          </MDBCol>
          
         
    </MDBRow>
    <MDBRow>

            <MDBCol md="4">
            <p style={{fontSize:13,fontWeight:400,color:"#43464b",display:"flex",justifyContent:"center",alignItems:"center"}}>redBus is trusted by over 23 million happy customers globally</p>
            
         </MDBCol>
          
          <MDBCol md="4">
            <p style={{fontSize:13,fontWeight:400,color:"#43464b",display:"flex",justifyContent:"center",alignItems:"center"}}>network of over 2600 bus operators worldwide</p>
             
          </MDBCol>
          
          <MDBCol md="3">
            <p style={{fontSize:13,fontWeight:400,color:"#43464b",display:"flex",justifyContent:"center",alignItems:"center"}}>Over 180 million trips booked using redBus</p>
   
          </MDBCol>
          
             

</MDBRow>


      </MDBContainer>




      
   </div>    

         );
    }
  }
 
export default Cards;
