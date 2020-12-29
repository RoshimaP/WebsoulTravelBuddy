import React, { Component } from 'react';
import Header from '../../header/FixedHeader';
import Footer from '../../footer/Footer';
import '../rescheduleticket/rescheduleticket.css'
import searchimg from '../../../assets/reschedule/search_reschedule.png';
import chooseimg from '../../../assets/reschedule/choose_reschedule.png';
import confirmimg from '../../../assets/reschedule/confirm_reschedule.png';


class  ReSchedule extends Component {
                          

render()
{
    return(
           <div>
<Header/>
<br/>
<br/>
<div>
  <div class="" uk-grid >

    <br/>
    <br/>                    
<div className="fontstyle" style={{textAlign:"center"}}>
RESCHEDULE TICKETS
                            </div>
<br/>

<div className="fontstyle"  style={{textAlign:"center",fontSize:"17px",color:"#4a4a4a"}}>
Verify your details, and   <span style={{color:"red"}}> Re-Schedule</span> your tickets
                            </div>
                            <br/>

<div class="uk-grid" style={{textAlign:"center",justifyContent:"center",paddingBottom:"40px"}}>
                            <div class="" uk-grid >
                            <div class="fontstyle" style={{textAlign:"Justify",fontSize:"14px"}}>
                               TICKET NUMBER                         
                                </div> 
                                <div>
                                <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input" placeholder="enter your ticket number" type="text"/>
        </div>                             
                              </div>                           

                              </div>

                              <div class="" uk-grid >
                            <div class="fontstyle" style={{textAlign:"Justify",fontSize:"14px"}}>
                              E-MAIL                       
                                </div> 
                                <div>
                                <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: mail" style={{color:"#4a4a4a"}}></span>
            <input class="uk-input" placeholder="enter email used for booking" type="text"/>
        </div>                             
                              </div>                           

                              </div>
                              <div class="" style={{marginTop:"19px"}} >
                            <button class="uk-button" style={{background:"#e6545b",color:"#f8d1ce",height:"42px"}}>SUBMIT</button>
                            </div >
                          


</div>
<br/>
<div className="fontstyle" style={{textAlign:"center",fontSize:"22px"}}>
How it works?                            </div>
<br/>

<div class=" uk-grid uk-child-width-1-3@l uk-child-width-1-1@s " style={{justifyContent:"Center",margin:"auto"}}>
   <div class="firstgrid">
   <div class="uk-grid howitworkdiv ">
     
     <div>
     <img src={searchimg} />                            
        </div>   
      <div class=" uk-padding-remove"   uk-grid style={{width:"40%"}}>
             <div class="fontstyle" style={{fontSize:"14px",fontWeight:"700"}}>
             Search Ticket:
            </div> 
            <div  class="fontstyle" style={{fontSize:"14px"}}>
            Enter your ticket number and Email id and search the ticket.                        
              </div>                      
          </div>                         
                  
   </div>
    </div> 
    
  
    <div class=" uk-padding-remove">
   <div class="uk-grid  howitworkdiv">
     
     <div>
     <img src={chooseimg} />                            
        </div>   
      <div class=" uk-padding-remove"  uk-grid style={{width:"40%"}}>
             <div class="fontstyle"  style={{fontSize:"14px",fontWeight:"700"}}>
             Choose Reschedule Date:
            </div> 
            <div class="fontstyle" style={{fontSize:"14px"}}>
            Verify your ticket and choose a date to reschedule your journey.              </div>                      
          </div>                         
                  
   </div>
    </div> 
    
    <div class="  uk-padding-remove" >
   <div class="uk-grid howitworkdiv">
     
     <div>
     <img src={confirmimg} />                            
        </div>   
      <div class=" uk-padding-remove"  uk-grid style={{width:"40%"}}>
             <div class="fontstyle"  style={{fontSize:"14px",fontWeight:"700"}}>
             Confirmation:
            </div> 
            <div  class="fontstyle" style={{fontSize:"14px"}}>
            Select your bus and confirm rescheduling by paying the difference amount.              </div>                      
          </div>                         
                  
   </div>
    </div> 
    
  
</div>
<br/>
<br/>
</div>
</div>
<Footer/>
</div>
   
                        

    );                      
}

}
export default ReSchedule