import React, { Component } from 'react';

import journey_for from '../../../../assets/bus_tickets/journey_for.jpg';
import amazon_pay from '../../../../assets/bus_tickets/amazon_pay.jpg';

import Header from'../../../header/Header'
import '../../homepage/offers/offers.css'
import circlecheck from '../../../../assets/homepage/circle.png'
import { Link } from 'react-router-dom';




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
       
 
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>

<div class="modal fade modelscrollf " style={{width:"100%",borderRadius:"0px"}} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div class="modal-dialog widthcf " role="document" style={{}}>

<button class="buttoncf close" type="button" style={{fontSize:"50px",color:"#fff",fontWeight:"100",marginLeft:"1px"}}  data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

  <div class="modal-content  modalfull" style={{borderRadius:"0px",marginLeft:"1px"}} >
 
    <div class="modal-body borderrf" style={{}}>
    <button class="buttonvf  close" type="button" style={{fontSize:"50px",color:"black",fontWeight:"100"}} data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div style={{textAlign:"center",width:"61%",margin:"auto",color:"#333",paddingTop:"40px"}}>  
      <div style={{fontSize:"28px",marginBottom:"16px",lineHeight:"29px",fontFamily:"Roboto,sans-serif"}}>
        Leave your contact information                         
        </div>
        <div style={{fontSize:"22px",fontWeight:"300",lineHeight:"25px"}}>
        We will contact you in the next 5 minutes                         
        </div>
        </div>
     
   
    <div class="formwf" style={{margin:"auto",paddingTop:"40px"}}>
      <form>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">Name</label>
          <input required type="text" class="form-control" id="recipient-name"/>
        </div>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">Phone</label>
          <input required type="text" class="form-control" id="recipient-name"/>
        </div>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">E-mail</label>
          <input required type="text" class="form-control" id="recipient-name"/>
        </div>
        <div class="form-group"  >
          <label for="message-text" class="col-form-label">Message:</label>
          <textarea class="form-control  overflow-auto" id="message-text" style={{height:"90px",lineHeight:"1.3",fontSize:"16px",fontFamily:"inherit"}}>I am interested in the property 
          One bedroom apartment in Protaras, Sotira |
           Ref. : 
           11-3922 http://antariahomes.com/en/catalog/odnospalnye-apartamenty-v-protarase-sotira/</textarea>
        </div>
        <div class="form-group">
      <button style={{width:"100%",background:"#3b3d3e",borderColor:"#111d23",lineHeight:"37px",marginTop:"32px",fontSize:"14px"}} type="button" class="btn btn-primary">SEND TO</button>
    </div>
      </form>
    </div>
    
  </div>
  </div>
</div>
</div>
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


 
<div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog" id="exampleModal">


<div class="modal-dialog widthcf " role="document" style={{maxWidth:"900px"}}>

{/** <button class="buttoncf close" type="button" style={{fontSize:"50px",color:"#fff",fontWeight:"100",marginLeft:"1px"}}  data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>*/}

  <div class="modal-content  modalfull" style={{borderRadius:"0px",marginLeft:"1px",boxShadow:"none",border:"1px solid darkgrey"}} >
 
    <div class="modal-body borderrf uk-padding-remove" style={{}}>
   <div>
   <button type="button" className="close" style={{fontSize:"30px",color:"black",fontWeight:"700",marginRight:"10px"}}  onClick={this.handleShow}>
                                    <span>&times;</span>
                                </button>
   </div>
    
      <div class="" style={{textAlign:"center",width:"auto",margin:"auto",color:"#333",background:"#e1e5e4",paddingBottom:"25px"}}>  
    <div style={{PaddingTop:"10px"}}> 
     <p style={{color:"grey",fontFamily:'Montserrat',fontSize:"12px"}}>BUS OFFER</p>
       <p style={{color:"#484747",marginTop:"-1rem"}}>Use code FIRST
       <br/>
       Save up to Rs 150 on bus tickets
       </p></div>
       <div className=" uk-grid-collapse  uk-grid " style={{justifyContent:"center"}}>
    
    <div className="" style={{border:"1px solid rgb(210, 210, 210)"}} >
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
    {/***<i class="fa fa-arrow-circle-o-left"></i> */}
    <div className="" style={{border:"1px solid rgb(210, 210, 210)"}}>
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
    <div className="" style={{border:"1px solid rgb(210, 210, 210)"}}>
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
    
    
    
    <div >
        <div class=" " style={{height:"40px"}}>
        <button class="uk-button uk-text-bold "  style={{fontSize:"13px", backgroundColor:"#d84e55",height:"42px",color:"#fff",textTransform:"capitalize",fontFamily:"Montserrat",padding:"0px 15px"}}>Search Buses</button>
        </div>
    </div>
       </div>
      
    
        </div>
        
     <div>
         <p style={{color:"#5d5b5b",fontWeight:"700",fontFamily:"Montserrat",fontSize:"14px"}}>What is the Offer</p>
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

