import React, { Component } from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import '../showmyticket/showmyticket.css'
import leftdivimg from '../../../assets/help/backgroundimg.jpg';
import modalimg from '../../../assets/help/modelimg.svg';
import redicon from '../../../assets/homepage/logo_org.png';
import facebook from '../../../assets/help/facebookicon.svg';
import google from '../../../assets/help/googleicon.svg';

class  ShowMyTicket extends Component {
                          

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
                            PRINT TICKET
                            </div>
<br/>

<div className="fontstyle"  style={{textAlign:"center",fontSize:"17px",color:"#4a4a4a"}}>
                            Verify your details, and <span style={{color:"red"}}> Print</span> your tickets
                            </div>
                            <br/>

<div class="uk-grid" style={{textAlign:"center",justifyContent:"center",paddingBottom:"40px"}}>
                            <div class="" uk-grid >
                            <div class="fontstyle" style={{textAlign:"Justify",fontSize:"14px"}}>
                               TICKET NUMBER                         
                                </div> 
                                <div>
                                <div class="uk-inline">
                                <span class="uk-form-icon" uk-icon="icon: tag" style={{fontSize:"24px",color:"black"}}></span>
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

</div>
</div>
<Footer/>
</div>
   
                        

    );                      
}

}
export default ShowMyTicket