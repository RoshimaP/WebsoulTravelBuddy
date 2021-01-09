import React, { Component } from 'react';

import journey_for from '../../../../assets/bus_tickets/journey_for.jpg';
import amazon_pay from '../../../../assets/bus_tickets/amazon_pay.jpg';

import Header from'../../../header/Header'
import '../../homepage/offers/offers.css'
import circlecheck from '../../../../assets/homepage/circle.png'
import { Link } from 'react-router-dom';
import modalimg from '../../../../assets/help/modelimg.svg';
import redicon from '../../../../assets/homepage/logo_org.png';
import facebook from '../../../../assets/help/facebookicon.svg';
import google from '../../../../assets/help/googleicon.svg';



class  Offer extends Component {
                            constructor(props) {
                                                        super(props);
                                                
                                                        this.state = {
                                                            modalState: true
                                                        };
                                                
                                                        this.handleShow = this.handleShow.bind(this);
                                                    }
                                                
                                                    handleShow() {
                                                        this.setState({ modalState: !this.state.modalState });
                                                    }                  
 
  render()
  {
  return (
  <div>
      {/*<Header/>*/}
     
    <div>
        <p style={{textAlign:"center",fontSize:"22px",color:"#4a4a4a",fontFamily:"Montserrat",fontWeight:"700",marginTop:"40px"}}>Offers</p>
       <br/>
       <br/>
 
       






<div className="uk-grid "  style={{justifyContent:"center"}}>
<div className="">
<a href=""> 
 <div  class="first_card uk-card uk-card-default uk-card-body" data-toggle="modal" data-target="#exampleModal" style={{height:"17em",width:"17em",border:"1px solid #ddd",boxShadow:"0 0 5px 0 rgba(0,0,0,.75)"}}>
     <div >
    <h3 class="" style={{fontSize:14,color:"#737373",display:"flex",justifyContent:"flex-end",marginTop:"-31px"}}>Till: 31-Dec-2020</h3>
    <img src={journey_for} class=" " alt=" " />
                <div><p className="uk-text-bold" style={{fontSize:14,color:"#737373",display:"flex",justifyContent:"right",alignItems:"right"}}>Save up to Rs 150 for bus tickets</p></div>
   <p style={{color:"#737373",fontSize:"12px",justifyContent:"flex-end"}}> Use code FIRST</p>
    </div>
</div> 
</a>
</div>
<div className="">
    <a href=""> 
 <div  class="first_card uk-card uk-card-default uk-card-body" data-toggle="modal" data-target="#exampleModal" style={{height:"17em",width:"17em",border:"1px solid #ddd",boxShadow:"0 0 5px 0 rgba(0,0,0,.75)"}}>
     <div >
    <h3 class="" style={{fontSize:14,color:"#737373",display:"flex",justifyContent:"flex-end",marginTop:"-31px"}}>Till: 31-Dec-2020</h3>
    <img src={amazon_pay} class=" " alt=" " style={{}}/>
                <div><p className="uk-text-bold" style={{fontSize:14,color:"#737373",display:"flex",justifyContent:"right",alignItems:"right"}}> Win Rs 10 to Rs 300 on minimum purchase of Rs 300.</p></div>
   <p style={{color:"#737373",fontSize:"12px",justifyContent:"flex-end"}}> AMAZON pay offer</p>
    </div>
</div> 
</a>
</div>
 </div>


 <br/>

 <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  
 <div class="modal-dialog widthcf " role="document" style={{maxWidth:"900px"}}>



<div class="modal-content  modalfull" style={{borderRadius:"0px",marginLeft:"1px",boxShadow:"none",border:"1px solid darkgrey"}} >

  <div class="modal-body borderrf uk-padding-remove" style={{}}>
 <div>
 <button  type="button " style={{fontWeight:"100",fontSize:"30px",color:'black',marginRight:"20px"}} class="close buttonclosea" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
 </div>
  
    <div class="" style={{textAlign:"center",width:"auto",margin:"auto",color:"#333",background:"#e1e5e4",paddingBottom:"25px"}}>  
  <div style={{PaddingTop:"10px"}}> 
   <p style={{color:"grey",fontFamily:'Montserrat',fontSize:"12px"}}>BUS OFFER</p>
     <p style={{color:"#484747",marginTop:"-1rem",fontSize:"14px",fontWeight:"700"}}>Use code FIRST
     <br/>
     Save up to Rs 150 on bus tickets
     </p></div>
     <div className=" uk-grid-collapse  uk-grid " style={{justifyContent:"center"}}>
  
  <div className="" style={{border:"1px solid rgb(210, 210, 210)",boxShadow:"0 1px 5px #000"}} >
      <div class="uk-background-default " style={{height:"40px"}}>
        <div className="uk-grid" style={{}}>
          <div className="" style={{textAlign:"center"}}>
      <i class='fas fa-city' style={{marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
      </div>
      <div style={{marginLeft:"-31px"}}>
      <input class="uk-input inputpla" type="text" placeholder="FROM" style={{border:"none",width:"157px",fontSize:"13px"}}/>
  
      </div>
      </div>
      </div>
  </div>
  <div className="" style={{border:"1px solid rgb(210, 210, 210)",boxShadow:"0 1px 5px #000"}}>
      <div class="uk-background-default " style={{height:"40px"}}>
        <div className="uk-grid" style={{}} >
                                
          <div className="" style={{textAlign:"center"}}>
      <i class='fas fa-city' style={{marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
      </div>
      <div style={{marginLeft:"-31px"}}>
      <input class="uk-input inputpla" type="text" placeholder="TO" style={{border:"none",width:"157px",fontSize:"13px"}}/>
      </div>
     
      </div>
      </div>
  </div>
  <div className="" style={{border:"1px solid rgb(210, 210, 210)",boxShadow:"0 1px 5px #000"}}>
      <div class="uk-background-default " style={{height:"40px"}}>
        <div className="uk-grid" style={{}}>
          <div className="" style={{textAlign:"center"}}>
          <i class="fa fa-calendar" style={{marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
      </div>
      <div style={{marginLeft:"-31px"}}>
      <input class="uk-input inputpla" type="text" placeholder="DATE" style={{border:"none",width:"130px",fontSize:"13px"}}/>
      </div>
      </div>
      </div>
  </div>
  
  
  
  <div style={{boxShadow:"0 1px 5px #000"}} >
      <div class=" " style={{height:"40px"}}>
      <button class="uk-button uk-text-bold "  style={{fontSize:"13px", backgroundColor:"#d84e55",height:"42px",color:"#fff",textTransform:"capitalize",fontFamily:"Montserrat",padding:"0px 15px"}}>Search Buses</button>
      </div>
  </div>
     </div>
    
  
      </div>
      
   <div>
       <p style={{color:"#5d5b5b",fontWeight:"700",fontFamily:"Montserrat",fontSize:"13px",marginTop:"10px"}}>What is the Offer</p>
   </div>
   <div>
       <ul style={{listStyle:"none",marginLeft:"50px"}}>
           <li style={{marginBottom:"14px"}}>
               <img src={circlecheck} style={{float:"left",height:"21px"}}/>
               <span style={{color:"#4a4a4a",fontFamily:"Montserrat",fontWeight:"400",fontSize:"11px"}}>
                   &nbsp;&nbsp;&nbsp;&nbsp;Use code FIRST to get 10% off up to Rs 100 + Rs 50 Cashback on bus ticket bookings.</span>

           </li>
           <li style={{marginBottom:"14px"}}>
               <img src={circlecheck} style={{float:"left",height:"21px"}}/>
               <span style={{color:"#4a4a4a",fontFamily:"Montserrat",fontWeight:"400",fontSize:"11px"}} >
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   Offer available only for first time users..             
                           </span>

           </li>
           <li style={{marginBottom:"14px"}}>
               <img src={circlecheck} style={{float:"left",height:"21px"}}/>
               <span style={{color:"#4a4a4a",fontFamily:"Montserrat",fontWeight:"400",fontSize:"11px"}} >
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   Offer is applicable for a minimum ticket value of Rs 200.                             </span>

           </li>
           <li style={{marginBottom:"14px"}}>
               <img src={circlecheck} style={{float:"left",height:"21px"}}/>
               <span style={{color:"#4a4a4a",fontFamily:"Montserrat",fontWeight:"400",fontSize:"11px"}} >
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   Offer is applicable once per customer email or mobile number.                                   </span>

           </li>
           <li style={{marginBottom:"14px"}}>
               <img src={circlecheck} style={{float:"left",height:"21px"}}/>
               <span style={{color:"#4a4a4a",fontFamily:"Montserrat",fontWeight:"400",fontSize:"11px"}} >
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   This offer is valid only for logged-in users who verify their mobile number with OTP (one time password).                          
                        </span>

           </li>
           <li style={{marginBottom:"14px"}}>
               <img src={circlecheck} style={{float:"left",height:"21px"}}/>
               <span style={{color:"#4a4a4a",fontFamily:"Montserrat",fontWeight:"400",fontSize:"11px"}} >
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   This offer is valid only for logged-in users who verify their mobile number with OTP (one time password).             
                    </span>

           </li>
           <li style={{marginBottom:"14px"}}>
               <img src={circlecheck} style={{float:"left",height:"21px"}}/>
               <span style={{color:"#4a4a4a",fontFamily:"Montserrat",fontWeight:"400",fontSize:"11px"}} >
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   Redbus Cashback will be credited to redBus wallet within 48 working hours after date of journey. The offer cash is valid for 6 months from the day it is credited into the wallet, after which it will expire and cannot be used. redBus offer is applicable on all channels.                      </span>

           </li>
           <li style={{marginBottom:"14px"}}>
               <img src={circlecheck} style={{float:"left",height:"21px"}}/>
               <span style={{color:"#4a4a4a",fontFamily:"Montserrat",fontWeight:"400",fontSize:"11px"}} >
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   Ibibo Group Pvt. Ltd. reserves the right to end any or all offers at its discretion without any prior notice.    
                                     </span>

           </li>
           <li style={{marginBottom:"14px"}}>
               <img src={circlecheck} style={{float:"left",height:"21px"}}/>
               <span style={{color:"#4a4a4a",fontFamily:"Montserrat",fontWeight:"400",fontSize:"11px"}} >
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   All disputes are subject to New Delhi jurisdiction
                   </span>
           </li>
       </ul>
   </div>
 
  
</div>
</div>
</div>

  
                  </div>
  
  


    
    </div>



 
     {/*<Footer/>*/} 
      </div>
  )
  }
}
export default Offer;

