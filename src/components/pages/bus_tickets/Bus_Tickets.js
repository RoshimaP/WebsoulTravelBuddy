import React, { Component } from 'react';
import background_image from '../../../assets/homepage/image1.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import iconredbus from '../../../assets/homepage/redbuswhiteicon.png'

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
import how_to_book from '../../../assets/bus_tickets/how_to_book.png'
import { MDBDatePicker } from "mdbreact";

import { MDBListGroupItem, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import Header from'../../header/FixedHeader'
import Footer from'../../footer/Footer'
import "../../pages/bus_tickets/Bus_Tickets.css"
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function DatePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="ONWARD DATE"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}

      />
    </form>
  );
}

class  Bus_Tickets extends Component {
  
  handleClick(){
    // their APi is not documented well
    this.datePicker._showDatePickerPopup()
  }
  render()
  {
  return (
  <div class="" style={{width:"fit-content"}}>
    <Header/>
      {/*<Header/>*/}
      {/* <DatePickers
        label='Start date'
        onSelectDate={ date => this.setState({ value: date }) }
        componentRef={instance => this.datePicker = instance} /> */}
  
     <br></br><br/>
      <div  className="" style={{backgroundColor:"#4a4a4a",height:"28px",fontFamily:"Lato,sans-serif"}}>
      <div class="uk-margin-large-left">
  <a href="#" style={{color:"#fff",fontSize:"13px",fontFamily:"Lato"}}>Home ></a>
<a href="#" style={{color:"#ea4c53",fontSize:"13px",fontFamily:"Lato"}}> &nbsp;Bus Tickets</a>
    </div>
     </div>
     
{/**background image */}
 <div class="uk-width-1-1 uk-background-cover" style={{width:"100%", backgroundImage: "url(https://st.redbus.in/seo/ind/redbus-SEO-page-banner_NewYear_1609263392.png)",height:"450px", backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: "center" }}>
 <br/>
     
     <div className="uk-grid uk-text-center " >
       <div className="uk-width-1-1 " >
         <h1 className="uk-text-bold backcont_a" style={{color:"#fff",fontFamily:"Lato,sans-serif"}}>
         Online Bus Ticket Booking
         </h1>

       </div>
       <br/>
       <br/>
       <br/>
       <br/>  <br/>
       <div className="uk-width-1-1" >
         <h3 className="uk-text-bold backcont_b" style={{color:"#fff",fontFamily:"Lato,sans-serif",fontSize:"25px"}}>
         Search for Bus Tickets Online 
         </h3>

       </div>

     </div>

     <div className="uk-flex uk-flex-center" style={{}}>
  
  <div className=" uk-grid-collapse      uk-grid " style={{paddingBottom:"130px",justifyContent:"center",marginTop:"40px"}}>
   
   <div className="" style={{border:"1px solid rgb(210, 210, 210)"}} >
       <div class="uk-background-default " style={{height:"40px"}}>
         <div className="uk-grid" style={{}}>
           <div className="" style={{textAlign:"center"}}>
       <i class='fas fa-city' style={{color:"#404040", marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
       </div>
       <div style={{marginLeft:"-31px"}}>
       <input class="uk-input inputpla" type="text" placeholder="FROM" style={{border:"none",width:"220px",fontSize:"13px"}}/>
   
       </div>
       </div>
       </div>
   </div>
   {/***<i class="fa fa-arrow-circle-o-left"></i> */}
   <div className="" style={{border:"1px solid rgb(210, 210, 210)"}}>
       <div class="uk-background-default " style={{height:"40px"}}>
         <div className="uk-grid" style={{}} >
                                 
           <div className="" style={{textAlign:"center"}}>
       <i class='fas fa-city' style={{color:"#404040",marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
       </div>
       <div style={{marginLeft:"-31px"}}>
       <input class="uk-input inputpla" type="text" placeholder="TO" style={{border:"none",width:"220px",fontSize:"13px"}}/>
       </div>
      
       </div>
       </div>
   </div>
   <div className="" style={{border:"1px solid rgb(210, 210, 210)"}}>
       <div class="uk-background-default " style={{height:"40px"}}>
         <div className="uk-grid" style={{}} >
                                 
           <div className="" style={{textAlign:"center",width:"59px"}}>
       <i class='fa fa-calendar' style={{color:"#404040",marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
       </div>
       <div style={{marginLeft:"-31px"}}>
       <input class="uk-input inputpla" type="text" placeholder="ONWARD DATE" style={{border:"none",width:"220px",fontSize:"13px"}}/>
       </div>
      
       </div>
       </div>
   </div>
   
   
   
   <div class="buttonsearch  "  >
       <div className=" "  style={{height:"40px"}}>
       <button class="uk-button uk-text-bold "  style={{fontSize:"13px", backgroundColor:"#d84e55",height:"42px",color:"#fff",textTransform:"capitalize",fontFamily:"Montserrat",padding:"0px 30px",border:"1px solid #aeaeae"}}>Search Buses</button>
       </div>
   </div>
      </div>
   </div>   

 
        </div>
{/**background image */}
{/**cards */}
     <div style={{backgroundColor:"#f8f8f8"}}> 
     <br/>  <br/>  <br/>  <br/>
   
     <br/>
     
     <div class=" " uk-grid  style={{justifyContent:"center",alignItems:"center",marginTop:"-155px",marginBottom:"8px"}}>
     <a href="https://m.redbus.in/preregister" target="_blank" class="uk-grid " style={{padding:"5px", margin:"auto",width:"40%",backgroundColor:"#fff5e5",boxShadow:"0 3px 7px 0 rgba(0,0,0,.28)",top:"320px"}}>
<div style={{paddingTop:"18px"}}>
<img src={bellimg} class=" " alt=" " style={{height:"64px"}} />
     

</div>
<div style={{paddingLeft:"19px",paddingTop:"23px"}}>
 <div style={{fontSize:"13px",fontWeight:"700",color:"#3d3d3d",fontFamily:'Lato'}}>Pre-Register to get timely updates</div>
 <div style={{fontSize:"11px",fontWeight:"400",color:"#3d3d3d",fontFamily:'Lato'}}>Get notified when travel opens up for your route</div>
</div>
<div style={{paddingLeft:"11px",paddingTop:"61px"}} >
  <button class="uk-button" style={{paddingRight:"10px",marginBottom:"10px",paddingLeft:"10px",fontWeight:"700",borderRadius:"2px", height:"20px",backgroundColor:"#d84e55",color:"#fff",lineHeight:"1px",fontSize:"12px"}} >Register Now </button>
</div>
</a>
   <div className="uk-grid uk-child-width-1-2"  style={{justifyContent:"center",alignItems:"center",marginLeft:"1px"}}>

    <a href="/offers" target="_blank" class="first_card uk-card uk-card-default uk-card-body" style={{height:"244px",width:"350px",paddingTop:"21px",boxShadow:"0 1px 10px #c3c3c3"}}>
        
    <h3 class="uk-card-title" style={{fontFamily:'Lato',fontSize:14,fontWeight:400,color:"#000",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-11px"}}>Save up to Rs 150 for bus tickets</h3>
    <img src={journey_for} class=" " alt=" " />
     <p className="uk-text-bold" style={{fontFamily:'Lato',color:"#000",fontSize:15,WebkitTextStrokeWidth:"thin"}}>Limited Period Offer</p>
                <div><p style={{fontFamily:'Lato',fontSize:14,color:"#000",display:"flex",justifyContent:"center",alignItems:"center"}}>Use code FIRST</p></div>
    </a> 


    <a href="/offers" target="_blank" class="second_card uk-card uk-card-default uk-card-body uk-margin-large-left" style={{height:"262px",width:"350px",paddingTop:"21px",boxShadow:"0 1px 10px #c3c3c3",paddingLeft:"14px",paddingRight:"14px"}}>
    <h3 class="uk-card-title" style={{fontFamily:'Lato', fontSize:14,fontWeight:400,color:"#000",display:"flex",textAlign:"center",marginTop:"-11px"}}>Win Rs 10 to Rs 300 on minimum
     purchase of Rs 300.</h3>
    <img src={amazon_pay} class=" " alt=" " style={{marginTop:"-11px"}} />;
    <p className="uk-text-bold" style={{fontFamily:'Lato',color:"#000",fontSize:15,WebkitTextStrokeWidth:"thin"}}>Limited Period Offer</p>
             <p style={{fontFamily:'Lato',fontSize:14,color:"#000",display:"flex",justifyContent:"center",alignItems:"center"}}>AMAZON pay offer</p>
    </a>
    </div>
</div>
   <br/> 

       </div>
{/**cards */}

{/**why-book */}
       <div style={{marginBottom:"-15px"}}>
         <br/>
       <h3 className=" uk-text-center" style={{color:"#404040",fontWeight:"700",fontSize:"22px",marginBottom:"20px",fontFamily:"Lato"}}>WHY BOOK WITH REDBUS</h3>
       <div className=" uk-grid uk-child-width-1-4@l uk-child-width-1-2@s uk-child-width-1-4@m  uk-padding-remove-top" style={{padding:"36px", justifyContent:"center",alignItems:"center",marginLeft:"15px",marginRight:"15px"}} >
      <div class="weprodiv uk-card  uk-card-body" style={{padding:"0px", paddingTop:"25px", height:366,border:"1px solid #cecece",justifyContent:"center",alignItems:"center"}}>
        
        <img src={why_book_1} class="uk-align-center " alt=" " style={{height:"100px"}} />
        
          <p className="" style={{color:"black",fontSize:"14px",fontFamily:"Lato"}}>SAFETY +</p>
         
                    <div style={{}}  ><p  style={{fontSize:"14px",color:"#737373",textAlign:"center",fontFamily:"Lato",margin:"auto",width:"56%" }}>With Safety+ we have brought in a set of measures like Sanitized buses, mandatory masks etc. to ensure you travel safely.</p></div>
        </div>
        <div class="weprodiv uk-card  uk-card-body" style={{padding:"0px",paddingTop:"25px", height:366 ,border:"1px solid #cecece"}}>
        
        <img src={why_book_2} class=" uk-align-center " alt=" " style={{height:"100px"}} />
          <p className="" style={{color:"black",fontSize:"14px",fontFamily:"Lato",textAlign:"center"}}>SUPERIOR CUSTOMER SERVICE</p>
         
                    <div><p style={{fontSize:"14px",color:"#737373",textAlign:"center",fontFamily:"Lato",margin:"auto",width:"47%"}}>We put our experience and relationships to good use and are available to solve your travel issues.</p></div>
        </div>
        <div class=" weprodiv uk-card  uk-card-body" style={{padding:"0px",paddingTop:"25px", height:366 ,border:"1px solid #cecece"}}>
        
        <img src={why_book_3} class="uk-align-center  " alt=" " style={{height:"100px",width:"100px"}} />
          <p className="" style={{color:"black",fontSize:"14px",fontFamily:"Lato"}}>LOWEST PRICES</p>
               
                    <div><p style={{fontSize:"14px",color:"#737373",textAlign:"center",fontFamily:"Lato",margin:"auto",width:"42%"}}>We always give you the lowest price with the best partner offers.</p></div>
        </div>
        <div class="weprodiv uk-card  uk-card-body" style={{padding:"0px",paddingTop:"25px", height:366,border:"1px solid #cecece"}}>
        
        <img src={why_book_4} class=" uk-align-center " alt=" " style={{height:"100px",width:"100px"}} />
          <p className="" style={{color:"black",fontSize:"14px",fontFamily:"Lato"}}>UNMATCHED BENEFITS</p>
                 
                    <div><p style={{fontSize:"14px",color:"#737373",textAlign:"center",fontFamily:"Lato",margin:"auto",width:"62%"}}>We take care of your travel beyond ticketing by providing you with innovative and unique benefits.</p></div>
        </div>

      </div>
      


       </div>
    {/**why-book */}

     

{/**online-bus-ticket */}
       <div className="uk-grid"  style={{width:"85%",margin:"auto",paddingLeft:"20px",border:"1px solid #cecece",backgroundColor:"rgb(248, 248, 248)"}} >
     
      <div className="uk-width-2-3" style={{margin:"auto"}}>
    <br/>
       <p className=" " style={{color:"#404040",fontSize:"18px",fontWeight:"500px",fontFamily:"Lato"}}> ONLINE BUS TICKET BOOKING VS OFFLINE BUS TICKET BOOKING </p>
      
      <div style={{borderBottom:"2px solid #dc143c",marginTop:"-10px",marginLeft:"38px",marginRight:"38px"}}>
    
      </div>
      <br/>
       </div>
      
      <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-1@s  uk-padding-remove-top" style={{width:"100%",marginBottom:"35px"}} >
      <div class="onlineborder">
      <div class=""  style={{  justifyContent:"center",alignItems:"center",color:"#000",fontSize:"14px",fontWeight:"400"}}>
        <div style={{fontFamily:"Lato"}}>Hassle-free bus booking from anywhere & anytime</div>
        <br/>
        <div style={{fontFamily:"Lato"}}>Wide choice of bus seats, bus types & operators.</div>
        <br/>
        <div style={{fontFamily:"Lato"}}>Great offers and cashbacks on booking tickets</div>
        <br/>
        <div style={{fontFamily:"Lato"}}>Unique benefit for women seat selection</div>
        <br/>
        <div style={{fontFamily:"Lato"}}>24/7 Friendly Customer Care assistance</div>


          </div>
          </div>
        <div class="onlineborderrightcontent" >
          <div class="" style={{justifyContent:"center",alignItems:"center",color:"#000",fontSize:"14px",fontWeight:"400"}}>
         
        <div style={{fontFamily:"Lato"}}>Hassle of reaching bus counter & waiting in long queues</div>
        <br/>
        <div style={{fontFamily:"Lato"}}>Not much choice suiting your preference</div>
        <br/>
        <div style={{fontFamily:"Lato"}}>No discounts</div>
        <br/>
        <div style={{fontFamily:"Lato"}}>No unique benefit for women</div>
        <br/>
        <div style={{fontFamily:"Lato"}}>No Friendly assistance</div>


          </div>
          </div>
        </div>
      
      
       </div>
{/**online-bus-ticket */}

<br></br>
<br/>

{/**find-bus-ticket */}
      <div>
        <h2 style={{fontSize:"23px",color:"#323232",fontWeight:"600",textAlign:"center",fontFamily:"Lato",marginBottom:"15px"}}> FIND BUS TICKET WITH REDBUS </h2>
        
<div style={{margin:"auto",width:"60%",color:"rgb(45, 44, 44)"}}>
<p style={{color:"#2d2c2c",fontSize:"14px"}}>Making the right travel arrangements is the genesis of any good holiday. Providing exceptional bus travel arrangements is the mantra that’s followed at redBus. India’s largest online bus ticketing platform has driven the country’s bus booking journey over the past 13 years through thousands of bus operators and routes. Striving to reach new heights when it comes to online bus booking in India, redBus has become the right tool to use to have a smooth bus ticket booking experience. Anybody can use the official website of redBus or the user-friendly app to book their bus tickets from anywhere in the country. From the comfort of your home or from or office or vehicle, people can make an online bus booking with ease. With these successful USPs, redBus has expanded internationally to countries like Singapore, Malaysia, Indonesia, Peru and Columbia.
</p>
<div class="uk-text-left" style={{color:"#2d2c2c",fontWeight:"700",fontSize:"14px"}}>
Why book bus tickets through redBus
</div>

<p style={{color:"#2d2c2c",fontSize:"14px"}}>
The online bus booking services of redBus offers a plethora of advantages than it’s offline prehistoric booking modes. Firstly, booking a bus ticket through a travel agent or at a counter is in the past. People have begun to recognize the advantages of making an online bus booking. At a counter, people would have to first stand in a queue in front of a particular bus operator. Once they reach the counter, they would have to book a seat among the seats that are available. If a seat isn’t available on the bus of their choice, the dejected customer would then have to stand in another queue in front of another bus operator. Online bus ticket booking with redBus has eliminated these problems that people used to face.
</p>
<div class="uk-text-left" style={{color:"#2d2c2c",fontWeight:"700",fontSize:"14px"}}>


On-Time Guarantee with redBus
</div>
<p style={{color:"#2d2c2c",fontSize:"14px"}}>
The On-Time Guarantee is a unique feature that’s offered by redBus for the benefit of every customer. Look for the “On-Time Guarantee” tag that’s marked against a bus on the route you’ve searched for. If you book bus tickets for your family or yourself on a “On-Time Guarantee” tag, you or your family will fall under the benefits mentioned below:</p>
<ul class="uk-list uk-list-disc" style={{color:"rgb(45, 44, 44)",fontWeight:"400"}}>
            <li><span class="uk-text-bold" style={{fontWeight:"700",fontSize:"14px"}} >Bus On Time:</span>
            <span style={{fontSize:"14px"}} >With this benefit, customers will receive a <span class="uk-text-bold">25% refund</span>  on their bus ticket costs in case the bus that they need to travel in is delayed by 30 minutes.</span>
            </li>
            <li><span class="uk-text-bold" style={{fontWeight:"700",fontSize:"14px"}}>No Bus Cancellation:</span>
            <span style={{fontSize:"14px"}}>
            If you made an online bus booking through redBus and the bus operator cancels the bus without making any alternate arrangements, the customer will receive a <span class="uk-text-bold"> 150% refund</span> on their bus ticket costs.</span>
            </li>
            <li>
            <span class="uk-text-bold" style={{fontWeight:"700",fontSize:"14px"}}>Alternate Assurance: </span>
        <span style={{fontSize:"14px"}} > If a bus breaks down during the journey, the customers who are traveling on the bus would have to wait for an alternate arrangement to be made by the bus operator. If this arrangement is not made within 6 hours from the time of the breakdown, the customers will be eligible for a <span class="uk-text-bold">300% refund</span> on their bus tickets.
           </span> 
              </li>
        </ul>
<div class="uk-text-left" style={{fontWeight:"700",fontSize:"14px"}}>
  Payment Modes on redBus
</div>
<p style={{color:"rgb(45, 44, 44)",fontWeight:"400",fontSize:"14px"}}>
There are a plethora of payment modes that are available on the redBus website and app. Choose a payment mode that meets your needs and complete the bus ticket booking process. Some of these payment modes that are available are:


</p>
<ul class="uk-list uk-list-disc" style={{color:"rgb(45, 44, 44)",fontWeight:"400",fontSize:"14px"}}>
            <li>Debit Card</li>
            <li>Credit Card</li>
            <li>Net Banking with banks like:</li>
            <li>HDFC Bank</li>
            <li>Indian Bank</li>
            <li>Axis Bank</li>
            <li>State Bank of India and many more</li>
            <li>Google Pay</li>
          
        </ul>

        <div class="uk-text-left" style={{fontWeight:"700",fontSize:"14px"}}>
        How to book bus tickets online?
        </div>
<p style={{color:"rgb(45, 44, 44)",fontWeight:"400",fontSize:"14px"}}>
Booking a bus or making an online booking has never been this easy thanks to redBus. After setting industry standards that other competitors have struggled to reach, redBus has now raised the bar again by providing a bus booking experience like no other. Customers have to only follow these simple steps to make an online bus booking with redBus:
</p>
<img src={how_to_book} style={{width:798,height:448}} />
<ul class="uk-list uk-list-disc" style={{color:"rgb(45, 44, 44)",fontWeight:"400",fontSize:"14px"}}>
            <li>Enter the Source and Destination locations in the “From” and “To” tab respectively</li>
            <li>Enter the “Date of Journey” and hit the “Search” button</li>
            <li>Select a bus of your choice from the list of buses that are displayed</li>
            <li>Select a seat, boarding, and dropping points and hit “Proceed to Book”</li>
            <li>Key in the “Passenger Information” and “Contact Information”</li>
            <li>You can even choose to insure your journey so that you will be covered in case of an accident or loss of luggage and then click “Proceed to Pay”</li>
            <li>Enter the offer code (if applicable), select your mode of payment and complete the payment procedure
            </li>
          
        </ul>
        <div style={{color:"rgb(45, 44, 44)",fontWeight:"400",fontSize:"14px"}}>
        Once this is done, you will receive an M-ticket on your mobile and an e-ticket on the email ID that was entered under “Contact Information.”</div>
        <br/>
        <p style={{color:"rgb(45, 44, 44)",fontWeight:"400",fontSize:"14px"}}>
        redBus offers online bus tickets booking option and also promotes hassle-free bus travel across India. Undergo a quick bus ticketing procedure, choose suitable bus seats, bus type and bus operator then complete your secured online payment in just a few seconds. redBus develops incredible travelling experience from selecting bus type, boarding points and operators to bus reservation at lowest fares. It also provides exciting online discounts and cashbacks upon bus booking making your transactions more rewarding. No more waiting for long hours at bus counters, go ahead, order bus tickets to have a hassle-free booking experience. There are more than 2300+ operators listed on the redBus site and app. They provide services throughout most of the cities in India.</p>
        <p style={{color:"rgb(45, 44, 44)",fontWeight:"400",fontSize:"14px"}}>
        Customers can avail a range of exclusive discounts and offers while making a bus ticket booking online. So, what are you waiting for? Trust redBus to offer you cheap bus tickets to luxury buses on a plethora of routes in India. Book bus tickets today through the official website of redBus or by using the user-friendly app.
 </p>
 </div>
     
     
      </div>
    {/**find-bus-ticket */}
{/**faq */}
<div className="uk-padding-large uk-padding-remove-left uk-padding-remove-right uk-padding-remove-bottom" style={{ backgroundColor: "white" }}>
            <div className=" why_pool" style={{width:"75%",margin:"auto"}}>
              <h2 style={{fontSize:"23px",fontWeight:"700",fontFamily:"Lato",color:"#323232",letterSpacing:"2px",textAlign:"center"}}>
             FAQs
              </h2>
              <br/>
              
<div className="uk-grid uk-child-width-1-2@l uk-grid-match">
               
                  <div className="" style={{}}>
                    
                    <div className=" ">
                      <p className="uk-align-left uk-width-1-1 contentsbus" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px",marginBottom:"5px" }}>Q: What are the benefits of making a bus booking through redBus?</p>
                      <p className="uk-align-left uk-width-1-1 contentspbus" style={{  }}>
                      A: There are numerous benefits to making a bus booking or bus ticket booking online through redBus such as: 1) Book bus tickets with ease from the comfort of your home or workspace. 2) Quick and easy cancellation and rescheduling options. 3) Exclusive offers and cashback options. 4) M-ticket and e-ticket facilities are available. 4) Wide variety of bus operators, types of buses and routes to choose from. 5) Impeccable customer service. 5) Lower prices. Visit the redBus website or download the app to see the benefits of making a bus ticket booking.                    </p>
                    </div>
                  </div>
                
              
                  <div className="" style={{}}>
                    
                    <div className=" ">
                      <p className="uk-align-left uk-width-1-1 contentsbus" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px" ,marginBottom:"5px" }}>Q: Can I reschedule my bus ticket?</p>
                      <p className="uk-align-left uk-width-1-1 contentspbus" style={{ }}>
                      A: First, visit https://www.redbus.in/reschedule and then search for your bus ticket by entering your ticket number and registered email ID. Verify your ticket details and select the date to reschedule your journey. Select a bus operator, verify every detail, and make your payment if any difference in bus ticket prices needs to be cleared.                    </p>
                    </div>
                  </div>
                
                  <div className="" style={{}}>
                    
                    <div className="">
                      <p className="uk-align-left uk-width-1-1 contentsbus" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px",marginBottom:"5px"  }}>Q: Can I book an RTC bus ticket on redBus?</p>
                      <p className="uk-align-left uk-width-1-1 contentspbus" style={{ }}>
                      A: Yes, you can. redBus has extended its bus booking services to a number of RTCs in India. Some of these RTCs are Andhra Pradesh State Road Transport Corporation (APSRTC), Assam State Transport Corporation (ASTC), Bihar State Tourism Development Corporation (BSTDC), Gujarat State Road Transport Corporation (GSRTC), Himachal Road Transport Corporation (HRTC), Jammu and Kashmir State Road Transport Corporation (JKSRTC), Kerala RTC, Kadamba Transport Corporation (KTCL), Maharashtra State Road Transport Corporation (MSRTC), Odisha State Road Transport Corporation (OSRTC), Patiala and East Punjab States Union (PEPSU), Puducherry Road Transport Corporation (PRTC), Rajasthan State Road Transport Corporation (RSRTC), South Bengal State Transport Corporation (SBSTC), Tamil Nadu State Transport Corporation (TNSTC), Uttar Pradesh State Road Transport Corporation (UPSRTC), Uttarakhand Transport Corporation (UTC), West Bengal Transport Corporation [WBTC (CTC).                    </p>
                    </div>
                
                </div>
                  <div className="" style={{}}>
                    
                    <div className=" ">
                      <p className="uk-align-left uk-width-1-1 contentsbus" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px"  ,marginBottom:"5px"}}>Q: Is it safe to travel by bus during the COVID-19 pandemic?</p>
                      <p className="uk-align-left uk-width-1-1 contentspbus" style={{ }}>
                      A: redBus, along with bus operators under the redBus banner, have been doing a lot when it comes to upholding the safety standards that have been set by the Government of India and the MoHFW. Passengers can make their bus booking through the redBus platform and travel safely with redBus.                    </p>
                  </div>
                </div>
                  <div className="" style={{}}>
                    
                    <div className=" ">
                      <p className="uk-align-left uk-width-1-1 contentsbus" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px",marginBottom:"5px"  }}>Q: Is it safer to travel by bus or by plane during COVID-19?</p>
                      <p className="uk-align-left uk-width-1-1 contentspbus" style={{ }}>
                      A: Though a flight might save some travel time as it does go from Point A to Point B a lot faster than a bus, it is advisable to travel by bus instead. If a passenger wishes to travel via airplane, they would have to get to the terminal early and wait for a long time before boarding a flight. There is a risk of infection as the air in the plane is circulated within the sealed tube and could pose a danger if an asymptomatic passenger does carry the virus onboard. With a bus, the passenger can wait in their vehicle before boarding the bus, and therefore, crowding at a boarding point is significantly reduced. Passengers can even keep their windows open to ensure that fresh air is circulated in the bus. Measures followed on Safety+ buses considerably minimize the chance of contracting the virus on a bus than an airplane.                   </p>
                   
                  </div>
                </div>
                <div className="" style={{}}>
                    
                    <div className=" ">
                      <p className="uk-align-left uk-width-1-1 contentsbus" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px",marginBottom:"5px"  }}>Q: Can I cancel my bus ticket?</p>
                      <p className="uk-align-left uk-width-1-1 contentspbus" style={{ }}>
                      A: Yes, you can. All you have to do is log in to the redBus website or app and follow the cancellation procedure. You can even call the customer care number of redBus to get your ticket canceled.</p>                   
                  </div>
                </div>
                <div className="" style={{}}>
                    
                    <div className=" ">
                      <p className="uk-align-left uk-width-1-1 contentsbus" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px",marginBottom:"5px"  }}>Q: Do I need a print out of my bus ticket to board a bus?</p>
                      <p className="uk-align-left uk-width-1-1 contentspbus" style={{ }}>
                      A: No, you do not. You can present your M-ticket or e-ticket on your mobile device before boarding the bus. It is advisable to carry a government-issued ID to verify your identity before boarding the bus.</p>                   
                  </div>
                </div>
                <div className="" style={{}}>
                    
                    <div className=" ">
                      <p className="uk-align-left uk-width-1-1 contentsbus" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px",marginBottom:"5px"  }}>
                        Q: What does a PNR number on my bus ticket mean?
                        </p>
                      <p className="uk-align-left uk-width-1-1 contentspbus" style={{ }}>
                      A: PNR stands for 'Passenger Name Record.' This is generally represented as a 10-digit number on your M-ticket or E-ticket.                                </p>
                   
                  </div>
                </div>
                <div className="" style={{}}>
                    
                    <div className=" ">
                      <p className="uk-align-left uk-width-1-1 contentsbus" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px",marginBottom:"5px"  }}>
                      Q: What is Safety+, and what does it have to do with redBus?                        </p>
                      <p className="uk-align-left uk-width-1-1 contentspbus" style={{ }}>
                      A: Safety+ is a new feature that customers can look for when making a bus ticket booking on the redBus platform. Bus operators follow strict safety procedures such as sanitizing buses after every trip, staff with masks, temperate check of both passengers and bus staff before boarding the bus, and much more. Scroll up to learn more about Safety+. Look for the Safety+ icon, which is denoted by a shield with a “plus” sign in the middle when you book your bus tickets online with redBus. 
                      </p>                  
                  </div>
                </div>
                <div className="" style={{}}>
                    
                    <div className=" ">
                      <p className="uk-align-left uk-width-1-1 contentsbus" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px",marginBottom:"5px"  }}>
                      Q: I need to travel with a few family members to my hometown, but COVID-19 is a concern. Can I rent a bus solely for my family?</p>
                                            <p className="uk-align-left uk-width-1-1 contentspbus" style={{ }}>
                                            A: Yes, you can. You can rent a bus depending on your seating requirement through Bus Hire, redBus. You can even rent a car of your choice through Bus Hire.                      </p>                  
                  </div>
                </div>
              </div>
</div>
</div>

{/**faq */}

{/**top bus booking-routes */}
    <div style={{backgroundColor:"rgb(247, 247, 247)"}}>
      <div class="uk-grid uk-grid-collapse uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s   " style={{padding:"40px",paddingBottom:"29px"}} >
      
        <div class="uk-background-muted topbusleft" style={{margin:"auto",borderRight:"2px solid rgb(205, 205, 205)" }}>
          <div class="uk-width-1-2" style={{margin:"auto"}}>
          <h3 class="" style={{color:"#404040", textAlign:"center", fontSize:"18px",fontFamily:"Lato",fontWeight:"400",borderBottom:"solid rgb(220, 20, 60)"}}> TOP BUS BOOKING ROUTES </h3>

          </div>
        <div class="" uk-grid style={{width:"80%",margin:"auto"}}>
        <div className="uk-grid uk-child-width-1-2" style={{paddingLeft:"11px"}}>
          <span className="uk-width-1-3" style={{fontSize:"14px",color:"#606060",paddingTop:"14px",fontFamily:"Lato,sans-serif"}}>Select Source: </span> 
       
       <MDBDropdown  style={{backgroundColor:"#fff"}}>
      <MDBDropdownToggle className="" style= {{top:"5px",marginLeft:"-25px",backgroundColor:"#fff", textTransform:"Capitalize", boxShadow:"none",border:"1px solid grey", padding:"0px",width:"116px",marginTop:"11px"}}  caret color="#fff" >
       <span class="text-primary" style={{fontSize:"12px"}}>Ahmedabad </span> 
      </MDBDropdownToggle>
      <MDBDropdownMenu basic style= {{}}>
        <MDBDropdownItem active href="#">
        <span class="text-white" style={{fontSize:"12px",fontWeight:"100"}}>Ahmedabad</span> 
          </MDBDropdownItem>
        <MDBDropdownItem >
         <span class="text-primary" style={{fontSize:"12px",fontWeight:"100"}}>Bangalore</span> 
        </MDBDropdownItem>
        <MDBDropdownItem ><span class="text-primary" style={{fontSize:"12px",fontWeight:"100"}}>Chennai</span> </MDBDropdownItem>
        <MDBDropdownItem ><span class="text-primary" style={{fontSize:"12px",fontWeight:"100"}}>Coimbatore</span> </MDBDropdownItem>
        <MDBDropdownItem ><span class="text-primary" style={{fontSize:"12px",fontWeight:"100"}}>Delhi</span> </MDBDropdownItem>
        <MDBDropdownItem ><span class="text-primary" style={{fontSize:"12px",fontWeight:"100"}}>Goa</span> </MDBDropdownItem>
        <MDBDropdownItem ><span class="text-primary" style={{fontSize:"12px",fontWeight:"100"}}>Hyderabad</span> </MDBDropdownItem>




      </MDBDropdownMenu>
    </MDBDropdown> 
  
     </div>
      <br/>
        <div>
        <MDBTable borderless style={{fontFamily:"Lato"}}>
      <MDBTableHead>
        <tr>
         
          <th class="uk-padding-remove-top uk-padding-remove-bottom" style={{color:"#404040"}}>Route</th>
          <th class="uk-padding-remove-top uk-padding-remove-bottom" style={{color:"#404040"}}>Fare(Starting)</th>
          <th class="uk-padding-remove-top uk-padding-remove-bottom"></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody  >
        <tr class="" >
        
          <td class="  uk-padding-remove-bottom" style={{fontWeight:"400"}}>Ahmedabad to Udaipur</td>
          <td class="uk-padding-remove-bottom " style={{fontWeight:"400"}}>INR 200</td>
          {/* onClick={e => this.DatePickers()} */}
          <td  class="uk-padding-remove-bottom "><button  style={{backgroundColor:"#f7f7f7",border:"1px solid #d74f55",color:"#d74f55",padding:"3px",paddingLeft:"5px",paddingRight:"5px"}}>Book Now</button></td>
        </tr>
        <tr>
         
          <td class="uk-padding-remove-bottom " style={{fontWeight:"400"}}>Ahmedabad to Mumbai</td>
          <td class="uk-padding-remove-bottom " style={{fontWeight:"400"}}>INR 398</td>
          <td class="uk-padding-remove-bottom "><button style={{backgroundColor:"#f7f7f7",border:"1px solid #d74f55",color:"#d74f55",padding:"3px",paddingLeft:"5px",paddingRight:"5px"}}>Book Now</button></td>
        </tr>
        <tr>
         
          <td class="uk-padding-remove-bottom " style={{fontWeight:"400"}}>Ahmedabad to Pune</td>
          <td class="uk-padding-remove-bottom " style={{fontWeight:"400"}}>INR 400</td>
          <td class="uk-padding-remove-bottom "><button style={{backgroundColor:"#f7f7f7",border:"1px solid #d74f55",color:"#d74f55",padding:"3px",paddingLeft:"5px",paddingRight:"5px"}}>Book Now</button></td>
        </tr>
        <tr>
         
         <td class="uk-padding-remove-bottom " style={{fontWeight:"400"}}>Ahmedabad to Indore</td>
         <td class="uk-padding-remove-bottom " style={{fontWeight:"400"}}>INR 270</td>
         <td class="uk-padding-remove-bottom "><button style={{backgroundColor:"#f7f7f7",border:"1px solid #d74f55",color:"#d74f55",padding:"3px",paddingLeft:"5px",paddingRight:"5px"}}>Book Now</button></td>
       </tr>
       <tr>
         
         <td class="uk-padding-remove-bottom " style={{fontWeight:"400"}}>Ahmedabad to Jamnagar</td>
         <td class="uk-padding-remove-bottom " style={{fontWeight:"400"}}>INR 167</td>
          <td class="uk-padding-remove-bottom "><button style={{backgroundColor:"#f7f7f7",border:"1px solid #d74f55",color:"#d74f55",padding:"3px",paddingLeft:"5px",paddingRight:"5px"}}>Book Now</button></td>
       </tr>
       
      </MDBTableBody>
    </MDBTable>
     
 
   </div>
   </div>
 </div>
    

   
        <div class="uk-background-muted topbusright " style={{}}>
          <div class="uk-width-3-4 topbusrightdivf" style={{marginBottom:"20px",marginLeft:"30px"}}>
          <h3 class="" style={{color:"#404040",textAlign:"center",fontSize:"18px",fontWeight:"400",fontFamily:"Lato",borderBottom:"solid rgb(220, 20, 60)"}}> M TICKET VS E TICKET VS COUNTER TICKET </h3>

          </div>


<div className="uk-grid uk-child-width-1-2 topbusrightdivf" style={{width:"90%",marginLeft:"initial"}}>
<div className="uk-width-1-5">
<img src={mticket_1} class=" " alt=" " />


</div>
<div className="uk-width-4-5" style={{paddingTop:"20px"}}>
  <p style={{color:"#000",fontFamily:"Lato",fontSize:14,textAlign:"center",width:"77%"}}>An mticket is an SMS that is sent to your mobile after booking a bus ticket.</p>

</div>
</div>

<div className="uk-grid uk-child-width-1-2 topbusrightdivf" style={{width:"90%",marginLeft:"initial",marginTop:"10px"}}>
<div className="uk-width-1-5"> 
<img src={mticket_2} class=" " alt=" " />


</div>
<div className="uk-width-4-5" style={{paddingTop:"20px"}}>
  <p style={{color:"#000",fontFamily:"Lato",fontSize:14,textAlign:"center",width:"77%"}}>This is an electronic ticket issued and sent to your email after confirmation of your online booking.</p>

</div>
</div>

<div className="uk-grid uk-child-width-1-2 topbusrightdivf" style={{width:"90%",marginLeft:"initial",marginTop:"10px"}}>
<div className="uk-width-1-5">
<img src={mticket_3} class=" " alt=" " />


</div>
<div className="uk-width-4-5" style={{paddingTop:"20px"}}>
  <p style={{color:"#000",fontFamily:"Lato",fontSize:14,textAlign:"center",width:"77%"}}>Counter Ticket is the hard copy of your bus ticket required while boarding the bus.</p>

</div>
</div>

        </div>
    

      </div>
      </div>
   {/**top bus booking-routes */}
 
{/**redbus offers  */}
<br/>
<br/>
<div style={{width:"80%",margin:"auto"}}>
  <div>
  <p class="headingstyle" style={{WebkitTextStrokeWidth:"thin"}}>
  redBus offers impeccable travel services connecting Indian cities together, top routes are:
  </p>
  <div class="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m ">
    <div className="">
    <a href="https://www.redbus.in/bus-tickets/bangalore-to-hyderabad" >

      <p className="contentstyle" style={{}}>
      Bangalore To Hyderabad Bus
      </p>
      </a>
      <a href="https://www.redbus.in/bus-tickets/pune-to-goa" >

      <p className="contentstyle" style={{}}>
      Pune To Goa Bus
            </p>
            </a>

            <a href="https://www.redbus.in/bus-tickets/bangalore-to-goa" >

      <p className="contentstyle" style={{}}>
      Bangalore To Goa Bus
            </p>
            </a>

            <a href="https://www.redbus.in/bus-tickets/delhi-to-shimla" >

      <p className="contentstyle" style={{}}>
      Delhi To Shimla Bus
            </p>
            </a>

    </div>
    <div className="margintop" >
    <a href="" >

      <p className="contentstyle" style={{}}>
      Bangalore To Hyderabad Bus
      </p>
      </a>

      <a href="" >

      <p className="contentstyle" style={{}}>
      Pune To Goa Bus
            </p>      </a>

            <a href="" >

      <p className="contentstyle" style={{}}>
      Bangalore To Goa Bus
            </p>      </a>

            <a href="" >

      <p className="contentstyle" style={{}}>
      Delhi To Shimla Bus
            </p>      </a>

    </div>
    <div className="margintop">
    <a href="" >

      <p className="contentstyle" style={{}}>
      Bangalore To Hyderabad Bus
      </p>      </a>

      <a href="" >

      <p className="contentstyle" style={{}}>
      Pune To Goa Bus
            </p>      </a>

            <a href="" >

      <p className="contentstyle" style={{}}>
      Bangalore To Goa Bus
            </p>      </a>

            <a href="" >

      <p className="contentstyle" style={{}}>
      Delhi To Shimla Bus
            </p>      </a>

    </div>

  </div>
  </div>
  <br/>
  <br/>
  <div>
  <p class="headingstyle" style={{WebkitTextStrokeWidth:"thin"}}>
  redBus offers impeccable travel services connecting Indian cities together, top routes are:
  </p>
  <div class="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m ">
    <div className="">
      <a href="" >
      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Bangalore To Hyderabad Bus
      </p>
      </a>
      <a href="" >
      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Pune To Goa Bus
            </p>
            </a>
            <a href="" >

      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Bangalore To Goa Bus
            </p>      </a>

            <a href="" >

      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Delhi To Shimla Bus
            </p>      </a>

    </div>
    <div className="margintop" >
    <a href="" >

      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Bangalore To Hyderabad Bus
      </p>      </a>

      <a href="" >

      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Pune To Goa Bus
            </p>      </a>

            <a href="" >

      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Bangalore To Goa Bus
            </p>      </a>

            <a href="" >

      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Delhi To Shimla Bus
            </p>      </a>

    </div>
    <div className="margintop">
    <a href="" >

      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Bangalore To Hyderabad Bus
      </p>      </a>

      <a href="" >

      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Pune To Goa Bus
            </p>      </a>

            <a href="" >

      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Bangalore To Goa Bus
            </p>      </a>

            <a href="" >

      <p className="contentstyle" style={{color:"rgb(0,0,0)"}}>
      Delhi To Shimla Bus
            </p>      </a>

    </div>

  </div>
  </div>
  <br/>
  <br/>
  <div>
  <p class="headingstyle" style={{WebkitTextStrokeWidth:"thin"}}>
  redBus offers impeccable travel services connecting Indian cities together, top routes are:
  </p>
  <div class="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m ">
    <div className="">
      <p className="contentstyle" style={{}}>
      Bangalore To Hyderabad Bus
      </p>
      <p className="contentstyle" style={{}}>
      Pune To Goa Bus
            </p>
      <p className="contentstyle" style={{}}>
      Bangalore To Goa Bus
            </p>
      <p className="contentstyle" style={{}}>
      Delhi To Shimla Bus
            </p>
    </div>
    <div className="margintop" >
      <p className="contentstyle" style={{}}>
      Bangalore To Hyderabad Bus
      </p>
      <p className="contentstyle" style={{}}>
      Pune To Goa Bus
            </p>
      <p className="contentstyle" style={{}}>
      Bangalore To Goa Bus
            </p>
      <p className="contentstyle" style={{}}>
      Delhi To Shimla Bus
            </p>
    </div>
    <div className="margintop">
      <p className="contentstyle" style={{}}>
      Bangalore To Hyderabad Bus
      </p>
      <p className="contentstyle" style={{}}>
      Pune To Goa Bus
            </p>
      <p className="contentstyle" style={{}}>
      Bangalore To Goa Bus
            </p>
      <p className="contentstyle" style={{}}>
      Delhi To Shimla Bus
            </p>
    </div>

  </div>
  </div>
  </div>
  <br/>
  

{/**redbus offers  */}

 
    {/***subfooter */}
<div style={{backgroundColor:"rgb(237,237,237"}}>
   <br/>
   <div  >
  <div className="subfooterdiv uk-grid subfootergrid "  style={{margin:"auto",width:"91%",paddingBottom:"13px"}}>
    <div className="uk-width-1-4@m subfootergriddiv footermargin  "  style={{marginBottom:"10px"}} >
    <ul style={{listStyle:"none"}}>
                 <div class="listlinkbus" style={{color:"rgb(0,0,0)",fontWeight:"700",fontSize:"13px",WebkitTextStrokeWidth:"thin",marginBottom:"10px"}}>Top Bus Routes</div>
           
             <li style={{marginBottom:"10px"}}>
             <a class="listlinkbus" href="https://www.redbus.in/bus-tickets/hyderabad-to-bangalore" style={{color:"#444343",}} >
             Hyderabad to Bangalore Bus
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
             <a class="listlinkbus" href="" style={{}} >
             Bangalore to Chennai Bus
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
             <a class="listlinkbus" href="https://www.redbus.in/bus-tickets/pune-to-bangalore"style={{}} >
             Pune to Bangalore Bus
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
             <a class="listlinkbus" href="https://www.redbus.in/bus-tickets/mumbai-to-bangalore"  style={{}}>
             Mumbai to Bangalore Bus
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
             <a class="listlinkbus" href="https://www.redbus.in/bus-tickets/routes-directory"style={{}} >
             More >>
                   </a>
             </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-5@m subfootergriddiv" style={{marginBottom:"10px",marginLeft:"-40px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"10px"}}>
                 <div class="listlinkbus" style={{color:"rgb(0,0,0)",fontWeight:"700",fontSize:"13px",WebkitTextStrokeWidth:"thin",marginBottom:"10px"}}>Top Cities</div>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href="https://www.redbus.in/buses/hyderabad-bus-tickets" style={{marginBottom:"10px"}} >
             Hyderabad Bus Tickets
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href="https://www.redbus.in/buses/bangalore-bus-tickets"style={{marginBottom:"10px"}} >
             Bangalore Bus Tickets
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href="https://www.redbus.in/buses/chennai-bus-tickets"style={{marginBottom:"10px"}} >
             Chennai Bus Tickets
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href="https://www.redbus.in/buses/chennai-bus-tickets"style={{marginBottom:"10px"}} >
             Pune Bus Tickets
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href="https://www.redbus.in/buses/chennai-bus-tickets"style={{marginBottom:"10px"}} >
             More >>
                   </a>
             </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px",marginLeft:"-35px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"10px"}}>
                 <div class="listlinkbus" style={{color:"rgb(0,0,0)",fontWeight:"700",fontSize:"13px",WebkitTextStrokeWidth:"thin",marginBottom:"10px"}}>Top RTC's</div>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             APSRTC
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             MSRTC
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             MSRTC
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             MSRTC
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             More >>
                   </a>
             </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px",marginLeft:"-35px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"10px"}}>
                 <div class="listlinkbus" style={{color:"rgb(0,0,0)",fontWeight:"700",fontSize:"13px",WebkitTextStrokeWidth:"thin",marginBottom:"10px"}}>Other</div>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             GSRTC  </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             RSRTC
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             KTCL
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             PEPSU
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             More >>
                   </a>
             </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-4@m subfootergriddiv" style={{marginBottom:"10px",marginLeft:"-35px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"10px"}}>
                 <div class="listlinkbus" style={{color:"rgb(0,0,0)",fontWeight:"700",fontSize:"13px",WebkitTextStrokeWidth:"thin",marginBottom:"10px"}}>Top RTC Bus Types</div>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             Shivshahi Bus
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             Shivneri Bus
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             Amaravathi Bus
                   </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             Indra Bus
             </a>
             </li>
             <li style={{marginBottom:"10px"}}>
            <a class="listlinkbus" href=""style={{marginBottom:"10px"}} >
             Garuda Bus

                   </a>
             </li>
             
         </ul>
    
     </div>
     
     </div>
     </div>
     <div className="" style={{margin:"auto",width:"84%",paddingBottom:"27px"}}>
    
    <p class="footerht" style={{color:"rgb(0,0,0)",fontSize:"12px",WebkitTextStrokeWidth:"thin"}}>Top Operators</p>
 <div class="uk-grid uk-margin-remove" >
   <div class="uk-padding-remove"  style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">SRS Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Evacay Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Kallada Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">KPN Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Orange Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Parveen Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Rajadhani Express&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">VRL Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus"> Chartered Speed Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Bengali Tiger&nbsp;</a>

   </div>
   <div class="uk-padding-remove"  style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">SRM Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Infant Jesus Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">JBT Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Shatabti Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Orange Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Eagle Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Kanker Express&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Komitla Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus"> Sri Krishna Speed Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Humsafar Tiger&nbsp;</a>

   </div>
   <div class="uk-padding-remove"  style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">SRS Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Mahasagar Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Kallada Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">KPN Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Orange Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Parveen Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Rajadhani Express&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">VRL Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus"> Chartered Speed Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Bengali Tiger&nbsp;</a>

   </div>
   <div class="uk-padding-remove"  style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">SRS Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Evacay Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Kallada Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">KPN Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Orange Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Parveen Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Rajadhani Express&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">VRL Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus"> Chartered Speed Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinkbus">Bengali Tiger&nbsp;</a>

   </div>

</div>

    </div>
  
</div>
{/***subfooter */}

    
<div style={{backgroundColor:"#1a2230"}}>
  
  <br/>
  <div uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .subfooterdiv; delay: 300" >
 <div className="subfooterdiv uk-grid subfootergrid "  style={{margin:"auto",width:"91%",paddingBottom:"33px"}}>
 <div className="uk-width-1-6@m subfootergriddiv secondfootermargin  "  style={{marginBottom:"10px"}} >
   <ul style={{listStyle:"none"}}>
            <li  style={{}}>
                <div class="footerhead" style={{color:"#fff",fontWeight:"400",fontSize:"13px"}}>Book</div>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" style={{}} >
Bus Tickets                 </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" style={{}} >
Bus Hire                 </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Tempo Traveller                   </a>
            </li>
           
        </ul>
   
    </div>
   
   <div className="uk-width-1-6@m subfootergriddiv  "  style={{marginBottom:"10px",paddingLeft:"0px",marginLeft:"-34px"}} >
   <ul style={{listStyle:"none"}}>
            <li  style={{ }}>
                <div class="footerhead" style={{color:"#fff",fontWeight:"400",fontSize:"13px"}}>About Redbus</div>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" style={{}} >
About Us                   </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Contact Us                   </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Mobile Version                   </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Agent Registration                 </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Careers                 </a>
            </li>
          
        </ul>
   
    </div>
    <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px",paddingLeft:"0px",marginLeft:"-34px"}} >
    <ul style={{listStyle:"none"}}>
            <li style={{}}>
            <div class="footerhead" style={{color:"#fff",fontWeight:"400",fontSize:"13px"}}>Traveller Tools</div>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Track my bus                 </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Cancellation                  </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Ptint E Ticket                  </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
FAQ                  </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Site Map                  </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Offers   </a>         </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Blog </a>             </li>
            
        </ul>
   
    </div>
    <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px",paddingLeft:"0px",marginLeft:"-34px"}} >
    <ul style={{listStyle:"none"}}>
            <li style={{}}>
            <div class="footerhead" style={{color:"#fff",fontWeight:"400",fontSize:"13px"}}>Legal</div>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Terms and Conditions                   </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Privacy Policy                  </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Cookie Policy                   </a>
            </li>
           
        </ul>
   
    </div>
    <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px",paddingLeft:"0px",marginLeft:"-34px"}} >
    <ul style={{listStyle:"none"}}>
            <li style={{}}>
            <div class="footerhead" style={{color:"#fff",fontWeight:"400",fontSize:"13px"}}>Global Site</div>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
India </a>             </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Indonesia                 </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Singapore                </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Malaysia                 </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Colombia               </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Peru              </a>
            </li>
           
           
            
            
        </ul>
   
    </div>
    <div className="uk-width-1-4@m subfootergriddiv" style={{marginBottom:"10px",paddingLeft:"0px",marginLeft:"-34px"}} >
    <ul style={{listStyle:"none"}}>
            <li style={{}}>
                <a class="" style={{color:"#3e3e52",fontWeight:"700"}}>
                  <img src={iconredbus} style={{height:"31px"}} />
                </a>
            </li>
            <li style={{}}>
            <a class="listlink" href=""  style={{fontSize:"10px", color:"#fff",fontWeight:"100"}}>
            redBus is the world's largest online bus ticket booking 
            service trusted by over 8 million happy 
            customers globally. redBus offers bus ticket 
            booking through its website,iOS and Android mobile 
            apps for all major routes.
 </a>
            </li>
            <li style={{}}>
            <a href="" class="uk-icon-button uk-margin-small-right" style={{color:"#fff",backgroundColor:"#1a2230",height:"30px",width:"30px",border:"1px solid #b1babf"}} uk-icon="facebook"></a>

            <a href="" class="uk-icon-button uk-margin-small-right" style={{color:"#fff",backgroundColor:"#1a2230",height:"30px",width:"30px",border:"1px solid #b1babf"}} uk-icon="twitter"></a>
    
            </li>
            <li style={{}}>
            <a class="listlink" href="" style={{fontSize:"12px",color:"#fff"}} >
            Ⓒ 2019 ibibogroup All rights reserved
                  </a>
            </li>
            
           
            
            
        </ul>
   
    </div>
   
    </div>
    </div>
   
</div>
 



      </div>
  );
}
}
export default Bus_Tickets;





