import React, { Component } from 'react';
import background_image from '../../../assets/homepage/image1.png';
import journey_for from '../../../assets/bus_tickets/journey_for.jpg';
import amazon_pay from '../../../assets/bus_tickets/amazon_pay.jpg';
import why_book_1 from '../../../assets/bus_tickets/why_book_1.svg';
import why_book_2 from '../../../assets/bus_tickets/why_book_2.jpg';
import why_book_3 from '../../../assets/bus_tickets/why_book_3.jpg';
import why_book_4 from '../../../assets/bus_tickets/why_book_4.jpg';
import mticket_1 from '../../../assets/bus_tickets/mticket_1.jpg';
import mticket_2 from '../../../assets/bus_tickets/mticket_2.jpg';
import mticket_3 from '../../../assets/bus_tickets/mticket_3.jpg';
import bellimg from '../../../assets/bus_tickets/new.svg';


import { MDBListGroupItem, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import Header from'../../header/Header'
import Footer from'../../footer/Footer'
import "../../pages/bus_tickets/Bus_Tickets.css"


function Bus_Tickets() {
  
 
  
  return (
  <div>
      {/*<Header/>*/}
      <Header/>
      <div  className="" style={{backgroundColor:"#4a4a4a",height:"28px"}}>
      <ul class="uk-breadcrumb uk-margin-large-left  " >
    <li><a href="#" style={{color:"#fff"}}>Home </a></li>
    <li><a href="#" style={{color:"#ea4c53"}}>Bus Tickets</a></li>
     </ul>
     </div>
 {/* <div className="bg">
    <br/>
     
       <div className="uk-grid uk-text-center " >
         <div className="uk-width-1-1 " >
           <h1 className="uk-text-bold" style={{color:"#fff"}}>
           Online Bus Ticket Booking
           </h1>

         </div>
         <br/>
         <br/>
         <br/>
         <br/>  <br/>
         <div className="uk-width-1-1" >
           <h3 className="uk-text-bold" style={{color:"#fff"}}>
           Search for Bus Tickets Online 
           </h3>

         </div>

       </div>

       <div className=" uk-grid-collapse  uk-position-center  uk-margin-large-top  uk-grid" style={{paddingBottom:"130px"}}>
      
    <div className="" >
        <div class="uk-background-default ">
          <div className="uk-grid" style={{height:"47px"}}>
            <div className="" style={{textAlign:"center"}}>
        <i class='fas fa-city' style={{marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
        </div>
        <div style={{marginLeft:"-31px"}}>
        <input class="uk-input" type="text" placeholder="FROM" style={{border:"none"}}/>
        </div>
        </div>
        </div>
   </div>

   <div className="" >
        <div class="uk-background-default ">
          <div className="uk-grid" style={{height:"47px"}} >
            <div className="" style={{textAlign:"center"}}>
        <i class='fas fa-city' style={{marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
        </div>
        <div style={{marginLeft:"-31px"}}>
        <input class="uk-input" type="text" placeholder="TO" style={{border:"none"}}/>
        </div>
        </div>
        </div>
   </div>
   <div className="" >
        <div class="uk-background-default ">
          <div className="uk-grid" style={{height:"47px"}}>
            <div className="" style={{textAlign:"center"}}>
            <i class="fa fa-calendar" style={{marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
        </div>
        <div style={{marginLeft:"-31px"}}>
        <input class="uk-input" type="text" placeholder="ONWARD DATE" style={{border:"none"}}/>
        </div>
        </div>
        </div>
   </div>
   
   
  
    <div>
        <div class=" ">
        <button class="uk-button uk-text-bold "  style={{backgroundColor:"#d84e55",height:"47px",color:"#fff"}}>Search Buses</button>
        </div>
    </div>
       </div>
       
       
      
      

       <div class="uk-grid  uk-position-relative" style={{margin:"auto",width:"40%",backgroundColor:"#fff5e5",boxShadow:"0 3px 7px 0 rgba(0,0,0,.28)",top:"320px"}}>
  <div style={{paddingTop:"18px"}}>
  <img src={bellimg} class=" " alt=" " style={{height:"64px"}} />

  </div>
<div style={{paddingLeft:"19px",paddingTop:"23px"}}>
   <div style={{fontSize:"14px",fontWeight:"700",color:"#3d3d3d"}}>Pre-Register to get timely updates</div>
   <div style={{fontSize:"12px",fontWeight:"400",color:"#3d3d3d"}}>Get notified when travel opens up for your route</div>
  </div>
  <div style={{paddingLeft:"11px",paddingTop:"61px"}} >
    <button class="uk-button" style={{paddingRight:"10px",marginBottom:"10px",paddingLeft:"10px",fontWeight:"700",borderRadius:"5px", height:"30px",backgroundColor:"#d84e55",color:"#fff"}} >Register Now </button>
  </div>
</div>
      
</div>
*/}
{/**background image */}
 <div class="uk-background-cover" style={{width:"100%", backgroundImage: 'url(' + require('../../../assets/bus_tickets/image1.jpg') + ')',height:"600px"}}>
 <br/>
     
     <div className="uk-grid uk-text-center " >
       <div className="uk-width-1-1 " >
         <h1 className="uk-text-bold" style={{color:"#fff"}}>
         Online Bus Ticket Booking
         </h1>

       </div>
       <br/>
       <br/>
       <br/>
       <br/>  <br/>
       <div className="uk-width-1-1" >
         <h3 className="uk-text-bold" style={{color:"#fff"}}>
         Search for Bus Tickets Online 
         </h3>

       </div>

     </div>

<div className="uk-flex uk-flex-center" style={{}}>
  
     <div className=" uk-grid-collapse     uk-margin-large-top  uk-grid" style={{paddingBottom:"130px"}}>
    
  <div className="" >
      <div class="uk-background-default ">
        <div className="uk-grid" style={{height:"47px"}}>
          <div className="" style={{textAlign:"center"}}>
      <i class='fas fa-city' style={{marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
      </div>
      <div style={{marginLeft:"-31px"}}>
      <input class="uk-input" type="text" placeholder="FROM" style={{border:"none"}}/>
      </div>
      </div>
      </div>
 </div>

 <div className="" >
      <div class="uk-background-default ">
        <div className="uk-grid" style={{height:"47px"}} >
          <div className="" style={{textAlign:"center"}}>
      <i class='fas fa-city' style={{marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
      </div>
      <div style={{marginLeft:"-31px"}}>
      <input class="uk-input" type="text" placeholder="TO" style={{border:"none"}}/>
      </div>
      </div>
      </div>
 </div>
 <div className="" >
      <div class="uk-background-default ">
        <div className="uk-grid" style={{height:"47px"}}>
          <div className="" style={{textAlign:"center"}}>
          <i class="fa fa-calendar" style={{marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
      </div>
      <div style={{marginLeft:"-31px"}}>
      <input class="uk-input" type="text" placeholder="ONWARD DATE" style={{border:"none"}}/>
      </div>
      </div>
      </div>
 </div>
 
 

  <div>
      <div class=" ">
      <button class="uk-button uk-text-bold "  style={{backgroundColor:"#d84e55",height:"47px",color:"#fff"}}>Search Buses</button>
      </div>
  </div>
     </div>
     
     </div>  
    
    

 {/*  <div class="uk-grid " style={{margin:"auto",width:"40%",backgroundColor:"#fff5e5",boxShadow:"0 3px 7px 0 rgba(0,0,0,.28)",top:"320px"}}>
<div style={{paddingTop:"18px"}}>
<img src={bellimg} class=" " alt=" " style={{height:"64px"}} />

</div>
<div style={{paddingLeft:"19px",paddingTop:"23px"}}>
 <div style={{fontSize:"14px",fontWeight:"700",color:"#3d3d3d"}}>Pre-Register to get timely updates</div>
 <div style={{fontSize:"12px",fontWeight:"400",color:"#3d3d3d"}}>Get notified when travel opens up for your route</div>
</div>
<div style={{paddingLeft:"11px",paddingTop:"61px"}} >
  <button class="uk-button" style={{paddingRight:"10px",marginBottom:"10px",paddingLeft:"10px",fontWeight:"700",borderRadius:"5px", height:"30px",backgroundColor:"#d84e55",color:"#fff"}} >Register Now </button>
</div>
</div>
 */}
        </div>
{/**background image */}

     <div style={{backgroundColor:"#f8f8f8"}}> 
     <br/>  <br/>  <br/>  <br/>
   
     <br/>
     
     <div class=" " uk-grid  style={{justifyContent:"center",alignItems:"center",marginTop:"-155px"}}>
     <div class="uk-grid " style={{margin:"auto",width:"40%",backgroundColor:"#fff5e5",boxShadow:"0 3px 7px 0 rgba(0,0,0,.28)",top:"320px"}}>
<div style={{paddingTop:"18px"}}>
<img src={bellimg} class=" " alt=" " style={{height:"64px"}} />

</div>
<div style={{paddingLeft:"19px",paddingTop:"23px"}}>
 <div style={{fontSize:"14px",fontWeight:"700",color:"#3d3d3d"}}>Pre-Register to get timely updates</div>
 <div style={{fontSize:"12px",fontWeight:"400",color:"#3d3d3d"}}>Get notified when travel opens up for your route</div>
</div>
<div style={{paddingLeft:"11px",paddingTop:"61px"}} >
  <button class="uk-button" style={{paddingRight:"10px",marginBottom:"10px",paddingLeft:"10px",fontWeight:"700",borderRadius:"5px", height:"30px",backgroundColor:"#d84e55",color:"#fff"}} >Register Now </button>
</div>
</div>
   <div className="uk-grid uk-child-width-1-2"  style={{justifyContent:"center",alignItems:"center",marginLeft:"1px"}}>
    <div class="first_card uk-card uk-card-default uk-card-body" style={{height:"300",width:"auto"}}>
        
    <h3 class="uk-card-title" style={{fontSize:16,fontWeight:400,color:"#000",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-11px"}}>Save up to Rs 150 for bus tickets</h3>
    <img src={journey_for} class=" " alt=" " />
     <p className="uk-text-bold" style={{color:"#000"}}>Limited Period Offer</p>
                <div><p style={{fontSize:15,color:"#000",display:"flex",justifyContent:"center",alignItems:"center"}}>Use Code FIRST</p></div>
    </div>

    <div class="second_card uk-card uk-card-default uk-card-body uk-margin-large-left" style={{height:"300",width:"auto"}}>
    <h3 class="uk-card-title" style={{fontSize:16,fontWeight:400,color:"#000",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-11px"}}>Win Rs 10 to Rs 300 on minimum
    <br/> purchase of Rs 300.</h3>
    <img src={amazon_pay} class=" " alt=" " />;
    <p className="uk-text-bold" style={{color:"#000"}}>Limited Period Offer</p>
             <p style={{fontSize:15,color:"#000",display:"flex",justifyContent:"center",alignItems:"center"}}>Amazon Pay Offer</p>
    </div>
    </div>
</div>
   <br/>  <br/>  <br/>  <br/>

       </div>

       <div>
         <br/>
       <h3 className=" uk-text-center" style={{color:"#404040",fontWeight:"500"}}>WHY BOOK WITH REDBUS</h3>
      <div className="uk-grid uk-child-width-1-4@l uk-child-width-1-2@s uk-child-width-1-4@m uk-padding-large uk-padding-remove-top" style={{justifyContent:"center",alignItems:"center",marginLeft:"1px"}} >
      <div class="uk-card uk-card-default uk-card-body" style={{height:340,border:"1px solid #cecece",justifyContent:"center",alignItems:"center"}}>
        
        <img src={why_book_1} class="uk-align-center " alt=" " style={{height:"100px"}} />
        
         <p className="" style={{color:"#000",fontSize:"15px"}}>SAFETY +</p>
                    <div  ><p  style={{fontSize:15,color:"#686868",textAlign:"center"}}>With Safety+ we have brought in a set of measures like Sanitized buses, mandatory masks etc. to ensure you travel safely.</p></div>
        </div>
        <div class="uk-card uk-card-default uk-card-body" style={{height:340 ,border:"1px solid #cecece"}}>
        
        <img src={why_book_2} class=" uk-align-center " alt=" " style={{height:"90px"}} />
         <p className="" style={{color:"#000",fontSize:"15px",textAlign:"center"}}>SUPERIOR CUSTOMER SERVICE</p>
                    <div><p style={{fontSize:15,color:"#686868",display:"flex",textAlign:"center"}}>We put our experience and relationships to good use and are available to solve your travel issues.</p></div>
        </div>
        <div class="uk-card uk-card-default uk-card-body" style={{height:340 ,border:"1px solid #cecece"}}>
        
        <img src={why_book_3} class="uk-align-center  " alt=" " style={{height:"90px"}} />
         <p className="" style={{color:"#000",fontSize:"15px"}}>LOWEST PRICES</p>
                    <div><p style={{fontSize:15,color:"#686868",display:"flex",textAlign:"center"}}>We always give you the lowest price with the best partner offers.</p></div>
        </div>
        <div class="uk-card uk-card-default uk-card-body" style={{height:340,border:"1px solid #cecece"}}>
        
        <img src={why_book_4} class=" uk-align-center " alt=" " style={{height:"90px"}} />
         <p className="" style={{color:"#000",fontSize:"15px"}}>UNMATCHED BENEFITS</p>
                    <div><p style={{fontSize:15,color:"#686868",display:"flex",textAlign:"center"}}>We take care of your travel beyond ticketing by providing you with innovative and unique benefits.</p></div>
        </div>

      </div>
      


       </div>
    
     


       <div className="uk-grid"  style={{width:"85%",margin:"auto",paddingLeft:"20px",border:"1px solid #cecece",backgroundColor:"rgb(248, 248, 248)"}} >
     
      <div className="uk-width-2-3" style={{margin:"auto"}}>
    <br/>
       <p className=" " style={{color:"#404040",fontSize:"20px",fontWeight:"500px",borderBottom:"2px solid #dc143c"}}> ONLINE BUS TICKET BOOKING VS OFFLINE BUS TICKET BOOKING </p>
      <br/>
       </div>
      
      <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-1@s  uk-padding-remove-top" style={{marginLeft:"1px",margin:"auto"}} >
      <div class="uk-width-1-2">
      <div  style={{ borderRight:"1px solid #cecece",justifyContent:"center",alignItems:"center",color:"#000",fontSize:"15px",fontWeight:"400"}}>
        <div style={{}}>Hassle-free bus booking from anywhere & anytime</div>
        <br/>
        <div style={{}}>Wide choice of bus seats, bus types & operators.</div>
        <br/>
        <div style={{}}>Great offers and cashbacks on booking tickets</div>
        <br/>
        <div style={{}}>Unique benefit for women seat selection</div>
        <br/>
        <div style={{}}>24/7 Friendly Customer Care assistance</div>


          </div>
          </div>
        <div class="uk-width-1-2" >
          <div class="" style={{justifyContent:"center",alignItems:"center",color:"#000",fontSize:"15px",fontWeight:"400"}}>
         
        <div style={{}}>Hassle of reaching bus counter & waiting in long queues</div>
        <br/>
        <div style={{}}>Not much choice suiting your preference</div>
        <br/>
        <div style={{}}>No discounts</div>
        <br/>
        <div style={{}}>No unique benefit for women</div>
        <br/>
        <div style={{}}>No Friendly assistance</div>


          </div>
          </div>
        </div>
      
      
       </div>

<br></br>
<br/>
      <div>
        <h2 style={{fontSize:"24px",color:"#323232",fontWeight:"600",textAlign:"center"}}> FIND BUS TICKET WITH REDBUS </h2>
        <br/>
<div style={{margin:"auto",width:"60%",color:"rgb(45, 44, 44)"}}>
<p style={{color:"rgb(45, 44, 44)"}}>Making the right travel arrangements is the genesis of any good holiday. Providing exceptional bus travel arrangements is the mantra that’s followed at redBus. India’s largest online bus ticketing platform has driven the country’s bus booking journey over the past 13 years through thousands of bus operators and routes. Striving to reach new heights when it comes to online bus booking in India, redBus has become the right tool to use to have a smooth bus ticket booking experience. Anybody can use the official website of redBus or the user-friendly app to book their bus tickets from anywhere in the country. From the comfort of your home or from or office or vehicle, people can make an online bus booking with ease. With these successful USPs, redBus has expanded internationally to countries like Singapore, Malaysia, Indonesia, Peru and Columbia.
</p>
<div class="uk-text-left" style={{color:"rgb(45, 44, 44)",fontWeight:"600"}}>
Why book bus tickets through redBus
</div>
<br/>
<p style={{color:"rgb(45, 44, 44)"}}>
The online bus booking services of redBus offers a plethora of advantages than it’s offline prehistoric booking modes. Firstly, booking a bus ticket through a travel agent or at a counter is in the past. People have begun to recognize the advantages of making an online bus booking. At a counter, people would have to first stand in a queue in front of a particular bus operator. Once they reach the counter, they would have to book a seat among the seats that are available. If a seat isn’t available on the bus of their choice, the dejected customer would then have to stand in another queue in front of another bus operator. Online bus ticket booking with redBus has eliminated these problems that people used to face.
</p>
<div class="uk-text-left" style={{color:"rgb(45, 44, 44)",fontWeight:"600"}}>


On-Time Guarantee with redBus
</div>
<p style={{color:"rgb(45, 44, 44)"}}>
The On-Time Guarantee is a unique feature that’s offered by redBus for the benefit of every customer. Look for the “On-Time Guarantee” tag that’s marked against a bus on the route you’ve searched for. If you book bus tickets for your family or yourself on a “On-Time Guarantee” tag, you or your family will fall under the benefits mentioned below:</p>
<ul class="uk-list uk-list-disc" style={{color:"rgb(45, 44, 44)"}}>
            <li><span class="uk-text-bold">Bus On Time:</span>
            <span>With this benefit, customers will receive a <span class="uk-text-bold">25% refund</span>  on their bus ticket costs in case the bus that they need to travel in is delayed by 30 minutes.</span>
            </li>
            <li><span class="uk-text-bold">No Bus Cancellation:</span>
            <span>
            If you made an online bus booking through redBus and the bus operator cancels the bus without making any alternate arrangements, the customer will receive a <span class="uk-text-bold"> 150% refund</span> on their bus ticket costs.</span>
            </li>
            <li>
            <span class="uk-text-bold">Alternate Assurance: </span>
            If a bus breaks down during the journey, the customers who are traveling on the bus would have to wait for an alternate arrangement to be made by the bus operator. If this arrangement is not made within 6 hours from the time of the breakdown, the customers will be eligible for a <span class="uk-text-bold">300% refund</span> on their bus tickets.
            </li>
        </ul>
<div class="uk-text-left" style={{fontWeight:"600"}}>
  Payment Modes on redBus
</div>
<p style={{color:"rgb(45, 44, 44)"}}>
There are a plethora of payment modes that are available on the redBus website and app. Choose a payment mode that meets your needs and complete the bus ticket booking process. Some of these payment modes that are available are:


</p>
<ul class="uk-list uk-list-disc" style={{color:"rgb(45, 44, 44)"}}>
            <li>Debit Card</li>
            <li>Credit Card</li>
            <li>Net Banking with banks like:</li>
            <li>HDFC Bank</li>
            <li>Indian Bank</li>
            <li>Axis Bank</li>
            <li>State Bank of India and many more</li>
            <li>Google Pay</li>
          
        </ul>
</div>
     
     
      </div>
    
    <div style={{backgroundColor:"rgb(247, 247, 247)"}}>
      <div class="uk-grid uk-grid-collapse uk-child-width-expand@s  uk-margin-large-top" >
      <div style={{borderRight:"1px solid rgb(205, 205, 205)"}}>
        <div class="uk-background-muted uk-padding" style={{margin:"auto"}}>
          <div class="uk-width-1-2" style={{margin:"auto"}}>
          <h3 class="" style={{textAlign:"center", fontSize:"20px",fontWeight:"500",borderBottom:"solid rgb(220, 20, 60)"}}> TOP BUS BOOKING ROUTES </h3>

          </div>
        <div class="" uk-grid style={{margin:"auto"}}>
        <div className="uk-grid uk-child-width-1-2" style={{paddingLeft:"11px"}}>
          <span className="uk-width-1-4" style={{color:"#606060",paddingTop:"14px",fontFamily:"Lato,sans-serif"}}>Select Source: </span> 
       
       <MDBDropdown  style={{backgroundColor:"#fff"}}>
      <MDBDropdownToggle className="" style= {{border:"1px solid grey", padding:"4px",width:"116px",marginTop:"11px"}}  caret color="#fff" >
       <span class="text-primary">Ahmedabad </span> 
      </MDBDropdownToggle>
      <MDBDropdownMenu basic style= {{}}>
        <MDBDropdownItem active href="#">
        <span class="text-white">Ahmedabad</span> 
          </MDBDropdownItem>
        <MDBDropdownItem >
         <span class="text-primary">Bangalore</span> 
        </MDBDropdownItem>
        <MDBDropdownItem ><span class="text-primary">Chennai</span> </MDBDropdownItem>
        <MDBDropdownItem ><span class="text-primary">Coimbatore</span> </MDBDropdownItem>
        <MDBDropdownItem ><span class="text-primary">Delhi</span> </MDBDropdownItem>
        <MDBDropdownItem ><span class="text-primary">Goa</span> </MDBDropdownItem>
        <MDBDropdownItem ><span class="text-primary">Hyderabad</span> </MDBDropdownItem>




      </MDBDropdownMenu>
    </MDBDropdown> 
  
     </div>
      
        <div>
        <MDBTable borderless>
      <MDBTableHead>
        <tr>
         
          <th style={{color:"#404040"}}>Route</th>
          <th style={{color:"#404040"}}>Fare(Starting)</th>
          <th></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody  >
        <tr >
        
          <td class style={{fontWeight:"400"}}>Ahmedabad to udaipur</td>
          <td style={{fontWeight:"400"}}>INR 200</td>
          <td ><button style={{backgroundColor:"#f7f7f7",border:"1px solid #d74f55",color:"#d74f55",padding:"5px"}}>Book Now</button></td>
        </tr>
        <tr>
         
          <td style={{fontWeight:"400"}}>Ahmedabad to Mumbai</td>
          <td style={{fontWeight:"400"}}>INR 398</td>
          <td ><button style={{backgroundColor:"#f7f7f7",border:"1px solid #d74f55",color:"#d74f55",padding:"5px"}}>Book Now</button></td>
        </tr>
        <tr>
         
          <td style={{fontWeight:"400"}}>Ahmedabad to Pune</td>
          <td style={{fontWeight:"400"}}>INR 400</td>
          <td><button style={{backgroundColor:"#f7f7f7",border:"1px solid #d74f55",color:"#d74f55",padding:"5px"}}>Book Now</button></td>
        </tr>
        <tr>
         
         <td style={{fontWeight:"400"}}>Ahmedabad to Indore</td>
         <td style={{fontWeight:"400"}}>INR 270</td>
         <td><button style={{backgroundColor:"#f7f7f7",border:"1px solid #d74f55",color:"#d74f55",padding:"5px"}}>Book Now</button></td>
       </tr>
       <tr>
         
         <td style={{fontWeight:"400"}}>Ahmedabad to Jamnagar</td>
         <td style={{fontWeight:"400"}}>INR 167</td>
          <td><button style={{backgroundColor:"#f7f7f7",border:"1px solid #d74f55",color:"#d74f55",padding:"5px"}}>Book Now</button></td>
       </tr>
       
      </MDBTableBody>
    </MDBTable>
     {/*     <table class="uk-table  " style={{width:"600px"}}>
    <thead>
        <tr>
            <th >Route</th>
            <th class="" > Fare(Starting)</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ahmedabad to Udaipur</td>
            <td>INR 200</td>
            <td><button class="uk-button uk-button-default " style={{color:"#d74f55",borderColor:"#d74f55",fontWeight:"500"}} type="button">Book Now</button></td>
        </tr>
        <tr>
            <td>Ahmedabad to Mumbai</td>
            <td>	INR 398</td>
            <td><button class="uk-button uk-button-default"style={{color:"#d74f55",borderColor:"#d74f55",fontWeight:"500"}} type="button">Book Now</button></td>
        </tr>
        <tr>
            <td>Ahmedabad to Pune</td>
            <td>	INR 400</td>
            <td><button class="uk-button uk-button-default" style={{color:"#d74f55",borderColor:"#d74f55",fontWeight:"500"}} type="button">Book Now</button></td>
        </tr>
        <tr>
            <td>Ahmedabad to Indore</td>
            <td>	INR 270</td>
            <td><button class="uk-button uk-button-default" style={{color:"#d74f55",borderColor:"#d74f55",fontWeight:"500"}} type="button">Book Now</button></td>
        </tr>'<tr>
            <td>Ahmedabad to Jamnagar</td>
            <td>	INR 167</td>
            <td><button class="uk-button uk-button-default" style={{color:"#d74f55",borderColor:"#d74f55",fontWeight:"500"}} type="button">Book Now</button></td>
        </tr>'
    </tbody>
</table>
*/}
{/**table */}
 
   </div>
   </div>
 </div>
    </div>


    <div>
        <div class="uk-background-muted uk-padding ">
          <div class="uk-width-3-4" style={{margin:"auto"}}>
          <h3 class="" style={{textAlign:"center",fontSize:"20px",fontWeight:"500",borderBottom:"solid rgb(220, 20, 60)"}}> M TICKET VS E TICKET VS COUNTER TICKET </h3>

          </div>

<br/><br/>
<div className="uk-grid uk-child-width-1-2" style={{width:"90%",margin:"auto"}}>
<div className="uk-width-1-5">
<img src={mticket_1} class=" " alt=" " />


</div>
<div className="uk-width-4-5" style={{paddingTop:"20px"}}>
  <p style={{color:"#000"}}>An mticket is an SMS that is sent to your mobile after booking a bus ticket.</p>

</div>
</div>
<br/>
<div className="uk-grid uk-child-width-1-2" style={{width:"90%",margin:"auto"}}>
<div className="uk-width-1-5"> 
<img src={mticket_2} class=" " alt=" " />


</div>
<div className="uk-width-4-5" style={{paddingTop:"20px"}}>
  <p style={{color:"#000"}}>This is an electronic ticket issued and sent to your email after confirmation of your online booking.</p>

</div>
</div>
<br/>
<div className="uk-grid uk-child-width-1-2" style={{width:"90%",margin:"auto"}}>
<div className="uk-width-1-5">
<img src={mticket_3} class=" " alt=" " />


</div>
<div className="uk-width-4-5" style={{paddingTop:"20px"}}>
  <p style={{color:"#000"}}>Counter Ticket is the hard copy of your bus ticket required while boarding the bus.</p>

</div>
</div>
<br/>
        </div>
    </div>

      </div>
      </div>
    
    
    
     {/*<Footer/>*/} 
      </div>
  )
}
export default Bus_Tickets;





