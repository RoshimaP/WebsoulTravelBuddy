import React, { Component, useState }  from 'react';

import Header from'../../header/FixedHeader'
import Footer from'../../footer/Footer'
import "../../pages/homepage/homepagenew.css"
import plusimg from '../../../assets/bus_tickets/why_book_1.svg';
import convinience_back from '../../../assets/homepage/convinience_back.jpg';
import convinience_img from '../../../assets/homepage/convinience_img.jpg';
import track_my_bus from '../../../assets/homepage/track_my_bus.png';

import promise from '../../../assets/homepage/promise.png';
import why_book_1 from '../../../assets/bus_tickets/why_book_1.svg';
import why_book_2 from '../../../assets/bus_tickets/why_book_2.jpg';
import why_book_3 from '../../../assets/bus_tickets/why_book_3.jpg';
import why_book_4 from '../../../assets/bus_tickets/why_book_4.jpg';
import business from '../../../assets/homepage/Business.png';
import brand from '../../../assets/homepage/Brand.png';
import eye from '../../../assets/homepage/Eye.png';
import india from '../../../assets/homepage/india.png';
import colombia from '../../../assets/homepage/colombia.png';
import indonesia from '../../../assets/homepage/indonesia.png';
import peru from '../../../assets/homepage/peru.png';
import malaysia from '../../../assets/homepage/malaysia.png';
import singapore from '../../../assets/homepage/singapore.png';
import appleicon from '../../../assets/homepage/appleicon.png';
import googleplay from '../../../assets/homepage/googleplay.png';
import light from '../../../assets/homepage/lighticon.png'
import safetyplus from '../../../assets/homepage/safety_plus.svg'
import { Link } from 'react-router-dom';
import journey_for from '../../../assets/bus_tickets/journey_for.jpg';
import amazon_pay from '../../../assets/bus_tickets/amazon_pay.jpg';
import "../../../components/pages/homepage/offers/offers.css"
import bb  from '../../../assets/homepage/image1.png'

{/**function openWin() {
   window.open("https://www.w3schools.com");
 }**/}
class Homepage extends Component {
  
   openWin() {
      window.open("/offers");
    }
  render()
  {

  return (
  <div style={{width:"fit-content"}}>
      <Header/>
     

{/**background image */}
 <div class=" background" style={{backgroundSize:"Cover",backgroundRepeat:"no-repeat",backgroundPosition:"center", width:"100%",padding:"56px", backgroundImage: "url('https://st.redbus.in/Images/INDOFFER/redbus-website-banner-bg.png')"}}>
 <br/>
     <br/>
     <br/>
   <div className="uk-flex uk-flex-center" style={{}}>
  
   <div className=" uk-grid-collapse      uk-margin-large-top uk-grid " style={{paddingBottom:"130px",justifyContent:"center"}}>
    
    <div className="" style={{border:"1px solid rgb(210, 210, 210)"}} >
        <div class="uk-background-default " style={{height:"40px"}}>
          <div className="uk-grid" style={{}}>
            <div className="" style={{textAlign:"center"}}>
        <i class='fas fa-city' style={{color:"#404040", marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
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
        <i class='fas fa-city' style={{color:"#404040",marginLeft:"9px",paddingTop:"11px",color:"#9e9898"}}></i>
        </div>
        <div style={{marginLeft:"-31px"}}>
        <input class="uk-input inputpla" type="text" placeholder="TO" style={{border:"none",width:"157px",fontSize:"13px"}}/>
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
        <input class="uk-input inputpla" type="text" placeholder="DATE" style={{border:"none",width:"157px",fontSize:"13px"}}/>
        </div>
       
        </div>
        </div>
    </div>
    
    
    
    <div class="buttonsearch   "  >
        <div className=" "  style={{height:"40px"}}>
        <button class="uk-button uk-text-bold "  style={{fontSize:"13px", backgroundColor:"#d84e55",height:"42px",color:"#fff",textTransform:"capitalize",fontFamily:"Montserrat",padding:"0px 15px"}}>Search Buses</button>
        </div>
    </div>
       </div>
    </div>
{/***         */}
 
        </div>
        
{/**background image */}

{/***3 div grid */}
<div style={{backgroundColor:"#f8f8f8"}}> 
     <br/>  <br/>  <br/>  <br/>
   
     <br/>
     <div className="" uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .gridf; delay: 300" >
     <div class="    gridf"  uk-grid  style={{justifyContent:"center",alignItems:"center",marginTop:"-155px"}}>
     <div class="uk-grid cardf " style={{margin:"auto",width:"44%",backgroundColor:"#fff5e5",top:"320px",boxShadow:"0 3px 7px 0 rgba(0,0,0,.28)"}}>
<div class="imgdiv" style={{paddingTop:"18px",paddingLeft:"20px"}}>
<img src={plusimg} class="uk-align-center " alt=" " style={{height:"70px"}} />

</div>
<div class="paradiv" style={{paddingLeft:"19px",paddingTop:"23px"}}>
 <div class="firstpara" style={{fontSize:"12px",fontWeight:"700",color:"#3d3d3d",fontFamily:"Montserrat"}}>Introducing Safety+ Program</div>
 <div class="secondpara" style={{fontSize:"11px",fontWeight:"400",color:"#3d3d3d",fontFamily:"Montserrat"}}>A unique certification program to ensure safety in all buses.</div>
</div>

<div class="buttondiv" style={{paddingLeft:"10px",paddingTop:"61px"}} >
   <Link class="uk-button knowmore" style={{fontSize:"11px",fontFamily:"Montserrat", lineHeight:"22px", paddingRight:"10px",marginBottom:"10px",paddingLeft:"10px",fontWeight:"700",borderRadius:"4px", height:"22px",backgroundColor:"#d84e55",color:"#fff"}}  to="/homepage/knowmore">
 {/*  <button class="uk-button" style={{paddingRight:"10px",marginBottom:"10px",paddingLeft:"10px",fontWeight:"700",borderRadius:"5px", height:"30px",backgroundColor:"#d84e55",color:"#fff"}} >KNOW MORE </button>*/}
 KNOW MORE </Link>
</div>
</div>
   <div className="uk-grid uk-child-width-1-2"  style={{marginTop:"25px", justifyContent:"center",alignItems:"center",marginLeft:"1px"}}>
   <a href="/offers" target="_blank" class=" first_card uk-card uk-card-default uk-card-body" style={{height:"210px",width:"360px",transition:"all .2s ease-in-out",margin:"0px"}} onClick="openWin()">
<div class="offersdiv" style={{paddingTop:"10px"}} >
   
<h3 class=" uk-card-title" style={{fontFamily:"Montserrat", fontSize:"11px",fontWeight:700,color:"#737373",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-31px"}}>Save up to Rs 150 for bus tickets</h3>
<img src={journey_for} class=" " alt=" " />
           <div><p className="uk-text-bold" style={{fontFamily:"Montserrat", fontSize:"11px",color:"#737373",display:"flex",justifyContent:"center",alignItems:"center"}}>Use Code FIRST</p></div>
</div>
</a> 
<a href="/offers" target="_blank" class="   second_card uk-card uk-card-default uk-card-body uk-margin-medium-left" style={{height:"210px",width:"360px"}} >

<div class="offersdiv" style={{paddingTop:"10px"}}>
<h3 class="uk-text-bold uk-card-title" style={{fontFamily:"Montserrat", fontSize:"11px",fontWeight:700,color:"#737373",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-31px"}}>Win Rs 10 to Rs 300 on minimum purchase of Rs 300
</h3>
<img src={amazon_pay} class=" " alt=" " style={{marginTop:"-10px"}} />;
<p className="uk-text-bold psecond_card" style={{fontFamily:"Montserrat", fontSize:"11px",color:"#737373"}}>Limited Period Offer</p>
</div>
</a>
    </div>
    
</div>
</div>
   <br/>  <br/>  <br/>  <br/>

       </div>
    {/***3 div grid */}





{/**introdusing safety */}
    <br/>
    <br/>
    <div style={{width:"83%",margin:"auto",border:"1px solid #ddd"}}>
     <div className="uk-grid uk-child-width-1-2">
      <div className="uk-width-1-6" >
      <img src={plusimg} class="uk-align-center " alt=" " style={{height:"90px",marginTop:"25px"}} />


      </div>
   
  
    <div className="uk-width-5-6 uk-float-left" uk-grid style={{fontFamily:'Montserrat',paddingLeft:"0px"}}>
    <div style={{marginTop:"25px"}}>
         <h2 style={{fontSize:"28px", color:"#3e3e52",fontWeight:600,fontFamily:'Montserrat'}}>
Introducing Safety+ </h2>
</div>
   <div>
      <div className="uk-grid">  
      <div>
      <h4 style={{fontSize:"22px", color:"#7e7e8c",fontWeight:"400",fontFamily:'Montserrat'}}>Opt to Travel Safe with redBus</h4>
</div>
<Link  style={{fontSize:"12px",fontWeight:700,marginTop:"11px",letterSpacing:"1.3px",color:"darkblue",marginLeft:"-17px",fontFamily:'Montserrat'}}  to="/homepage/knowmore">
KNOW MORE
</Link>
<div ></div>                    
</div>
</div>
<br/>
  
<div className="uk-float-left" style={{textAlign:"left"}}>
 <img src={light} style={{float:"left",width:"20px"}} />
 <p style={{float:"left", color:"#4a4a4a",fontSize:"14px",fontFamily:'Montserrat'}}>Look for buses with</p> 
 <img src={safetyplus} style={{float:"left",width:"71px",marginTop:"1px"}} />

 <p style={{float:"left", color:"#4a4a4a",fontSize:"14px",fontFamily:'Montserrat'}}>&nbsp;tag while booking your journey, </p>                          
 

</div>
 
   <br/>
   <div className="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-3@s uk-float-left">
         <div>
             <div className={{}}  uk-grid>
              <div style={{fontWeight:"800"}}>
                 <p className="uk-float-left" style={{fontFamily:'Montserrat',fontWeight:"700",color:"#1446a0",fontSize:"17px",fontWeight:"bolder"}}> Sanitized Bus </p>                         
               </div>   
               <div >
                      <p className="uk-float-left" style={{fontFamily:'Montserrat',color:"#34495e",fontSize:"14px",fontWeight:"400"}}>
                      All Safety+ buses are sanitized and disinfected before and after every trip.                           
                      </p>

                  </div>                        
      
      
       </div>                        
             </div>
         
          <div>
          <div className={{}} style={{fontWeight:"800"}} uk-grid>
              <div>
                 <p className="uk-float-left" style={{fontFamily:'Montserrat',fontWeight:"bold",color:"#1446a0",fontSize:"17px",fontWeight:"bolder" }}> Mandatory masks  </p>                         
               </div>   
               <div>
                      <p className="uk-float-left" style={{fontFamily:'Montserrat',color:"#34495e",fontSize:"14px",fontWeight:"400"}}>
                      Proper masks are mandatory for all passengers and bus staff.                          
                      </p>

                  </div>                        
      
      
       </div>   


          </div>

          <div> 
          <div className={{}} style={{fontWeight:"800"}}  uk-grid>
              <div>
                 <p className="uk-float-left" style={{fontFamily:'Montserrat',fontWeight:"bold",color:"#1446a0",fontSize:"17px",fontWeight:"bolder" }}>  Thermal Screening </p>                         
               </div>   
               <div>
                      <p className="uk-float-left" style={{fontFamily:'Montserrat',color:"#34495e",fontSize:"14px",fontWeight:"400"}}>
                      All passengers will undergo thermal screening. Temperature checks for bus drivers and service staff are done before every trip.                          
                      </p>

                  </div>                        
      
      
       </div>   

          </div>

   </div>
    </div>
   
    </div>

    </div>
   <br/>
   <br/>
    {/**introdusing safety */}
    

{/***track my bus */}

<div style={{width:"83%",margin:"auto",backgroundColor:"#e8ecef",border:"1px solid #ddd",paddingBottom:"40px"}}>
   <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s">
          <div className="" style={{}} >
          <img src={track_my_bus} class=" " alt=" " style={{marginTop:"22px"}} />
                       

       </div>
       
       <div style={{color:"#4a4a4a",marginTop:"50px"}}>
       <h3 style={{color:"#4a4a4a",fontWeight:"600",fontSize:"22px",fontFamily:"Montserrat"}}>
       TRACK MY BUS - Smarter Way To Travel                         
       </h3>
      
       <p style={{paddingTop:"7px",marginBottom:"21px", width:"83%", fontSize:"14px",color:"#4a4a4a",fontFamily:"Montserrat"}}>Track your bus with our ‘Track My Bus’ feature and know the exact location in real-time.Stay informed and keep your family informed!</p>
       <Link  style={{border:"1px solid #39f",color:"#4a4a4a",fontFamily:"Montserrat",padding:"6px 17px",fontSize:"13px"}}  to="/homepage/knowmoretrackbus">Know more</Link>

       {/* <button  style={{border:"1px solid #39f",color:"#39f",fontFamily:"Montserrat",padding:"6px 17px",fontSize:"13px"}}> Know more</button> */}

       </div>
       
   </div>
   <br/>
   <br/>
<div style={{borderBottom:"2px solid #ddd",marginBottom:"25px",marginLeft:"92px",marginRight:"92px"}}>

</div>
   <div className="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-3@s">
          <div className="" style={{margin:"auto",marginTop:"20px"}}>
             <p className="uk-margin-remove" style={{fontSize:"14px",color:"#4a4a4a",fontFamily:"Montserrat"}}>BUSES</p>  
             <p className="uk-margin-remove" style={{color:"#da4d52",fontSize:"36px",fontFamily:"Montserrat"}}>10,000</p> 
          
           <p className="uk-margin-remove" className="" style={{color:"#4a4a4a",textAlign:"center",fontFamily:"Montserrat",fontSize:"14px",width:"75%",margin:"auto"}}>Total buses currently being tracked</p>                      


          </div>
          <div className="" style={{margin:"auto",color:"#4a4a4a",marginTop:"20px"}}>
             <p className="uk-margin-remove" style={{fontSize:"14px",color:"#4a4a4a",fontFamily:"Montserrat"}}> ROUTES</p>  
             <p className="uk-margin-remove" style={{color:"#da4d52",fontSize:"36px",fontFamily:"Montserrat"}}>60,000</p> 
             <p className="" style={{color:"#4a4a4a",textAlign:"center",fontFamily:"Montserrat",fontSize:"14px",width:"75%",margin:"auto"}}>Total routes covered by live tracking</p>                      

          </div>
          <div className="" style={{margin:"auto",color:"#4a4a4a",marginTop:"20px"}}>
             <p className="uk-margin-remove" style={{fontSize:"14px",color:"#4a4a4a",fontFamily:"Montserrat"}}> USERS</p>  
             <p className="uk-margin-remove" style={{color:"#da4d52",fontSize:"36px",fontFamily:"Montserrat"}}>40,000</p> 
             <p className="" style={{color:"#4a4a4a",textAlign:"center",fontFamily:"Montserrat",fontSize:"14px",width:"75%",margin:"auto"}}>Total users using Track My Bus feature</p>                      

          </div>

   </div>

</div>
<br/>
<br/>
{/***track my bus */}


{/***convenience on the go */}
<br/>

<div class="uk-background-cover uk-width-1-1 " style={{ backgroundImage: 'url(' + require('../../../assets/homepage/convinience_back.png') + ')'}}>
<div style={{width:"80%",margin:"auto"}}>

<div className="uk-grid uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s" uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .ss; delay: 300; repeat: true">
      <div className="ss">
      <h2 className="animated slideInUp slow" style={{marginLeft:"50px", color:"#4a4a4a",fontSize:"30px",fontWeight:"700",fontFamily:"Montserrat",fontSize:"27px"}}>
                 CONVENIENCE ON-THE-GO.                     
                       </h2>
           <div  className="uk-text-left " style={{marginLeft:"50px",color:"#4a4a4a",width:"80%",fontFamily:"Montserrat"}}>
                 
                       <br/>    
                       <div class="uk-width-1-1 uk-margin-small-bottom" >
                   <div className="animated slideInUp slow uk-text-left " style={{color:"#4a4a4a",fontSize:"13px"}}>
                   Exclusive features on mobile include                          
                        </div> 
                         </div>
                        
                        <div class="uk-width-1-1 uk-margin-small-bottom">
                        <div className="animated slideInUp slow uk-text-left" style={{color:"#4a4a4a",fontSize:"13px"}}>
                        redBus NOW - when you need a bus in the next couple of hours. Board a bus on its way.                         
                            </div> 
                            </div>
                            <div class="uk-width-1-1 uk-margin-small-bottom"> 
                            <div className="animated slideInUp slow uk-text-left" style={{color:"#4a4a4a",fontSize:"13px"}}>
                            Boarding   Point Navigation  -  Never lose your way while travelling to your boarding point!                          
                           </div>  
                           </div> 
                           <div class="uk-width-1-1 uk-margin-small-bottom"> 
                              <div className="animated slideInUp slow uk-text-left" style={{color:"#4a4a4a",fontSize:"13px"}}>
                           1-click Booking - - Save your favourite payment options securely on redBus, and more.                          
                           </div>
                            </div> 
                           <div class="uk-width-1-1 uk-margin-small-bottom">
                               <div className=" animated slideInUp slow uk-text-left" style={{color:"#4a4a4a",fontSize:"13px"}}>
                           Download the app.</div>
                           </div>
                           <div class="uk-width-1-1 uk-margin-small-bottom">
                              <div className="animated slideInUp slow uk-align-left" style={{color:"#4a4a4a",fontSize:"13px",marginBottom:"10px"}}>
                           Enter your mobile number below to download the redBus mobile app.
                            </div> 
                           </div >
                           <div className="uk-grid uk-width-1-1">
                              <div className="" style={{fontSize:"14px"}}>
                              <select name="cars" id="cars" style={{padding:"3px"}}>
                              <option value="volvo">91</option>
                              <option value="saab">354</option>
                              <option value="opel">36</option>
                              <option value="audi">504</option>
                              <option value="audi">379</option>
                              <option value="audi">672</option>
                              <option value="audi">509</option>
                              <option value="audi">592</option>
                              <option value="audi">245</option>
                              <option value="audi">852</option>
                              <option value="audi">852</option>
                              <option value="audi">852</option>
                   </select>

                              </div>
                              <div className="inputphone" style={{fontSize:"14px"}}>
                                 <input type="text" placeholder="Enter your mobile"  />

                              </div>
                              </div> 
                               
                              <div>
                                 <button className="animated slideInUp slow uk-button" style={{backgroundColor:"#d84e55",color:"#fff",fontSize:"11px",padding:"0px 28px 0px",marginTop:"12px"}}>
                                 SMS ME THIS LINK

                                 </button>
                                 </div>
                                 <div class="uk-margin-small-top">
                                    <div class="animated slideInUp slow uk-grid">
                                       <div>
                                          <a href="https://apps.apple.com/in/app/redbus/id733712604" target="_blank">
                                       <img src={appleicon} class=" " alt=" " style={{width:"40px",height:"40px"}} />
                                             </a>

                                       </div>
                                       <div style={{paddingLeft:"1px"}}>
                                       <a target="_blank" href="https://play.google.com/store/apps/details?id=in.redbus.android&hl=en">

                                       <img src={googleplay} class=" " alt=" " style={{width:"70px",height:"40px"}} />
                                       </a>

                                       </div>

                                    </div>
                                 </div>

                                
                              {/*   <div class="uk-grid">
                                    <div>
                                    <span class="fa-stack fa-lg" style={{height:"10px"}}>
  <i class="fa fa-square-o fa-stack-2x"></i>
  <i class="fa fa-twitter fa-stack-1x"></i>
</span>
                                       
                                    </div>
                                    <div>
                                    <i class="fa fa-apple"></i>
                                    </div>
                                    </div>   */}         
                           
             </div>                      
        </div>  
        <div className="uk-animation-slide-bottom" uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .aa; delay: 300; repeat: true"   style={{}}>
        <img src={convinience_img} class="aa" alt=" " style={{float:"right"}} />

         </div>                    

</div>

</div>
</div>
<br/>
<br/>
{/***convenience on the go */}

{/**we promise to deliver */}
<div className="uk-width-1-1" style={{backgroundColor:"#ededed",borderTop:"1px solid #ddd",borderBottom:"1px solid #ddd"}} >
   <br/>
   <div className=" " uk-grid style={{}}>
      <div className="" uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .imga; delay: 300; repeat: true" >

        <img src={promise} class=" imga uk-align-center" alt=" " style={{height:"93px",marginBottom:"10px"}} />

      </div>

    

     
      <div class="" uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .weprodiv,.weprodivh; delay: 300; repeat: true" >
        
       <h2 className="weprodivh uk-text-center" style={{marginBottom:"20px", color:"#404040",fontWeight:"700",fontFamily:"Montserrat",fontSize:"26px"}}>WE PROMISE TO DELIVER</h2>
      <div className=" uk-grid uk-child-width-1-4@l uk-child-width-1-2@s uk-child-width-1-4@m  uk-padding-remove-top" style={{padding:"36px", justifyContent:"center",alignItems:"center",marginLeft:"1px"}} >
      <div class="weprodiv uk-card uk-card-default uk-card-body" style={{height:366,border:"1px solid #cecece",justifyContent:"center",alignItems:"center"}}>
        
        <img src={why_book_1} class="uk-align-center " alt=" " style={{height:"90px"}} />
        
         <p className="" style={{color:"#635959",fontSize:"14px",fontFamily:"Montserrat",letterSpacing:"1px"}}>SAFETY +</p>
         <br/>
                    <div style={{width:"108%",margin:"auto"}}  ><p  style={{fontSize:"14px",color:"#737373",textAlign:"center",fontFamily:"Montserrat" }}>With Safety+ we have brought in a set of measures like Sanitized buses, mandatory masks etc. to ensure you travel safely.</p></div>
        </div>
        <div class="weprodiv uk-card uk-card-default uk-card-body" style={{height:366 ,border:"1px solid #cecece"}}>
        
        <img src={why_book_2} class=" uk-align-center " alt=" " style={{height:"90px"}} />
         <p className="" style={{color:"#635959",fontSize:"14px",fontFamily:"Montserrat",textAlign:"center",letterSpacing:"1px"}}>SUPERIOR CUSTOMER SERVICE</p>
                    <div><p style={{fontSize:"14px",color:"#737373",textAlign:"center",fontFamily:"Montserrat"}}>We put our experience and relationships to good use and are available to solve your travel issues.</p></div>
        </div>
        <div class=" weprodiv uk-card uk-card-default uk-card-body" style={{height:366 ,border:"1px solid #cecece"}}>
        
        <img src={why_book_3} class="uk-align-center  " alt=" " style={{height:"90px"}} />
         <p className="" style={{color:"#635959",fontSize:"14px",fontFamily:"Montserrat",letterSpacing:"1px"}}>LOWEST PRICES</p>
                <br/>
                    <div><p style={{fontSize:"14px",color:"#737373",textAlign:"center",fontFamily:"Montserrat"}}>We always give you the lowest price with the best partner offers.</p></div>
        </div>
        <div class="weprodiv uk-card uk-card-default uk-card-body" style={{height:366,border:"1px solid #cecece"}}>
        
        <img src={why_book_4} class=" uk-align-center " alt=" " style={{height:"90px"}} />
         <p className="" style={{color:"#635959",fontSize:"14px",fontFamily:"Montserrat",letterSpacing:"1px"}}>UNMATCHED BENEFITS</p>
                 <br/>
                    <div><p style={{fontSize:"14px",color:"#737373",textAlign:"center",fontFamily:"Montserrat"}}>We take care of your travel beyond ticketing by providing you with innovative and unique benefits.</p></div>
        </div>

      </div>
      


       </div>


     

   </div>

</div>
{/**we promise to deliver */}

{/**awards and recognition */}
<div uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .awardsh; delay: 300; repeat: true">
   <br/>
   <h2 className="awardsh uk-text-center" style={{color:"#4a4a4a",fontWeight:"bold",fontFamily:"Montserrat",fontSize:"27px"}}>
      AWARDS & RECOGNITION
   </h2>
   <br/>
   <br/>
   <br/>
  <div className="uk-grid uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1@s" uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .awardsdiv; delay: 300; repeat: true" style={{width:"90%",justifyContent:"center",alignItems:"center",margin:"auto"}}>
     <div className="awardsdiv" uk-grid >
        <div >
           <a target="_blank" href="https://www.business-standard.com/article/companies/bs-annual-awards-saluting-the-spirit-of-entrepreneurship-114033100015_1.html">
        <img src={business} class=" uk-align-center" alt=" " style={{}} />
        </a>
       </div>
       <div >
       <p style={{fontSize:"14px",fontFamily:"Montserrat", width:"51%",margin:"auto",textAlign:"center",letterSpacing:"3px",color:"#4a4a4a"}}>
             Most Innovative Company
          </p>
       </div>

     </div>
     <div className="awardsdiv" uk-grid style={{marginTop:"21px"}} >
        <div >
        <a target="_blank" href="https://thebrandtrustreport.wordpress.com/tag/redbus-in/">

        <img src={brand} class=" uk-align-center" alt=" " style={{}} />
        </a>

       </div>
       <div >
          <p style={{fontSize:"14px",fontFamily:"Montserrat", width:"51%",margin:"auto",textAlign:"center",letterSpacing:"3px",color:"#4a4a4a"}}>
             Most Trusted Brand
          </p>
       </div>

     </div>
    
     <div className="awardsdiv" uk-grid >
        <div >
        <a target="_blank" href="https://eyefortravelblog.blogspot.in/2014/04/winners-of-mobile-innovation-in-travel.html">

        <img src={eye} class=" uk-align-center" alt=" " style={{}} />
        </a>

       </div>
       <div >
       <p style={{fontSize:"14px",fontFamily:"Montserrat", width:"53%",margin:"auto",textAlign:"center",letterSpacing:"3px",color:"#4a4a4a"}}>
            Mobile Innovation Award
          </p>
       </div>

     </div>
    

  </div>
   

</div>
<br/>
{/**awards and recognition */}


{/**our global presence */}
<br/>
<br/>
<div style={{backgroundColor:"#f1f1f1",borderTop:"1px solid #ddd",borderBottom:"1px solid #ddd"}}>
   
   <h3 className="uk-text-center "  style={{fontSize:"27px", color:"#4a4a4a",fontWeight:"700",paddingTop:"40px",fontFamily:"Montserrat"}}>OUR GLOBAL PRESENCE</h3>
   <br/>
  <div className="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-3@s " style={{margin:"auto",width:"80%",paddingBottom:"53px"}}>
    <div className="" uk-grid>
    <div>
       <a target="_blank" href="https://www.redbus.co/">
     <img src={colombia} class=" uk-align-center" alt=" " style={{}} />
    
     </a> </div>
     <div className=" uk-text-center" style={{color:"#737373",marginTop:"-43px"}}>
       COLOMBIA
     </div>
     </div>
     <div className="" uk-grid>
     <div>
     <a target="_blank" href="https://www.redbus.in/">

     <img src={india} class=" uk-align-center" alt=" " style={{}} />
     </a>
     </div>
     <div className=" uk-text-center" style={{color:"#737373",marginTop:"-43px"}}>
       INDIA
     </div>
     </div>
     <div className="" uk-grid>
     <div>
     <a target="_blank" href="https://www.redbus.id/">

     <img src={indonesia} class=" uk-align-center" alt=" " style={{}} />
     </a>
     </div>
     <div className=" uk-text-center" style={{color:"#737373",marginTop:"-43px"}}>
       INDONESIA
     </div>
     </div>
     <div className="" uk-grid>
     <div>
     <a target="_blank" href="https://www.redbus.my/">

     <img src={malaysia} class=" uk-align-center" alt=" " style={{}} />
     </a>

     </div>
     <div className=" uk-text-center" style={{color:"#737373",marginTop:"-43px"}}>
       MALAYSIA
     </div>
     </div>
     <div className="" uk-grid>
     <div>
     <a target="_blank" href="https://www.redbus.pe/">

     <img src={peru} class=" uk-align-center" alt=" " style={{}} />
     </a>

     </div>
     <div className=" uk-text-center" style={{color:"#737373",marginTop:"-43px"}}>
       PERU
     </div>
     </div>
     <div className="" uk-grid>
     <div>
     <a target="_blank" href="https://www.redbus.sg/">

     <img src={singapore} class=" uk-align-center" alt=" " style={{}} />
     </a>

     </div>
     <div className=" uk-text-center" style={{color:"#737373",marginTop:"-43px"}}>
       SINGAPORE
     </div>
     </div>

     </div>


  
</div>
{/**our global presence */}


{/**the numbers are growing */}

<div style={{borderBottom:"1px solid #ddd"}} uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .numberh; delay: 300; repeat: true">
   <br/>
<h3 className="numberh uk-text-center "  style={{fontSize:"27px", color:"#4a4a4a",fontWeight:"700",paddingTop:"20px",fontFamily:"Montserrat"}}>THE NUMBERS ARE GROWING!</h3>
<br/>
<br/>
<div uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .numberh,.numerdiv; delay: 300; repeat: true">
<div className="numerdiv uk-grid uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s " style={{margin:"auto",width:"89%"}}>
    <div class="" style={{textAlign:"center",margin:"auto",marginBottom:"15px",marginTop:"10px"}} >
   <div  style={{color:"#737373",letterSpacing:"2px",fontSize:"13px",fontFamily:"Montserrat"}} >CUSTOMERS</div>
   <div style={{color:"#da4e52",fontSize:"44px",fontWeight:"400",fontFamily:"Montserrat"}}>23M</div>
   <div class="" style={{width:"77%",margin:"auto" ,fontSize:"13px",fontFamily:"Montserrat",color:"#4a4a4a"}} >redBus is trusted by over 23 million happy customers globally</div>
     </div>
     <div class="" style={{textAlign:"center",margin:"auto",marginBottom:"15px"}} >
   <div  style={{color:"#737373",letterSpacing:"2px",fontSize:"13px",fontFamily:"Montserrat"}} >OPERATORS</div>
   <div style={{color:"#da4e52",fontSize:"44px",fontWeight:"400",fontFamily:"Montserrat"}}>2600</div>
   <div style={{width:"66%",margin:"auto" ,fontSize:"13px",fontFamily:"Montserrat",color:"#4a4a4a"}}>network of over 2600 bus operators worldwide</div>
     </div>
     <div class="" style={{textAlign:"center",margin:"auto",marginBottom:"15px"}} >
   <div  style={{color:"#737373",letterSpacing:"2px",fontSize:"13px",fontFamily:"Montserrat"}} >BUS TICKETS</div>
   <div style={{color:"#da4e52",fontSize:"44px",fontWeight:"400",fontFamily:"Montserrat"}}>180+ M</div>
   <div style={{width:"57%",margin:"auto" ,fontSize:"13px",fontFamily:"Montserrat",color:"#4a4a4a"}}>Over 180 million trips booked using redBus</div>
     </div>
        </div>
        </div>
        <br/>
        <br/>

</div>
{/**the numbers are growing */}

{/***subfooter */}
<div style={{backgroundColor:"#e5e5e5"}}>
   <br/>
   <br/>
   <br/>
   <div uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .subfooterdiv; delay: 300" >
  <div className="subfooterdiv uk-grid subfootergrid "  style={{margin:"auto",width:"96%",paddingBottom:"33px"}}>
    <div className="uk-width-1-5@m subfootergriddiv  "  style={{marginBottom:"10px"}} >
    <ul style={{listStyle:"none"}}>
             <li  style={{marginBottom:"6px" }}>
                 <div class="listlinksh" style={{color:"#444343",fontWeight:"700"}}>Top Bus Routes</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" target="_blank" href="https://www.redbus.in/bus-tickets/hyderabad-to-bangalore" style={{color:"#444343"}} >
             Hyderabad to Bangalore Bus
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" target="_blank" href="https://www.redbus.in/bus-tickets/bangalore-to-chennai" >
             Bangalore to Chennai Bus
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" target="_blank" href="https://www.redbus.in/bus-tickets/pune-to-bangalore" >
             Pune to Bangalore Bus
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" target="_blank" href="https://www.redbus.in/bus-tickets/mumbai-to-bangalore" >
             Mumbai to Bangalore Bus
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" target="_blank" href="https://www.redbus.in/bus-tickets/routes-directory" >
             More >
                   </a>
             </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-5@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
                 <div class="listlinksh" style={{color:"#444343",fontWeight:"700"}}>Top Cities</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             Hyderabad Bus Tickets
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             Bangalore Bus Tickets
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             Chennai Bus Tickets
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             Pune Bus Tickets
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             More >
                   </a>
             </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
                 <div class="listlinksh" style={{color:"#444343",fontWeight:"700"}}>Top RTC's</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             APSRTC
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             MSRTC
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             MSRTC
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             MSRTC
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             More >
                   </a>
             </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
                 <div class="listlinksh" style={{color:"#444343",fontWeight:"700"}}>Other</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             GSRTC  </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             RSRTC
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             KTCL
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             PEPSU
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             More >
                   </a>
             </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-4@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
                 <div class="listlinksh" style={{color:"#444343",fontWeight:"700"}}>Tempo Traveller in Cities</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             Tempo traveller in Bangalore
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             Tempo traveller in Chennai
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             Tempo traveller in Mumbai
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             Tempo traveller in Hyderabad</a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinksh" href="" >
             Tempo traveller in Ahmedabad
                   </a>
             </li>
             
         </ul>
    
     </div>
     
     </div>
     </div>
     <div className="" style={{margin:"auto",width:"87%",paddingBottom:"53px",borderTop:"1px solid #999"}}>
    <br/>
    <p class="footerht">Top Operators</p>
 <div class="uk-grid uk-margin-remove" >
   <div class="uk-padding-remove"  style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="https://www.redbus.in/travels/srs-travels-srs" style={{padding:"10px"}} class=" listlinksh">SRS Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="https://www.redbus.in/travels/evacay-bus" style={{padding:"10px"}} class=" listlinksh">Evacay Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="https://www.redbus.in/travels/kallada-travels-kallada" style={{padding:"10px"}} class=" listlinksh">Kallada Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="https://www.redbus.in/travels/kpn-travels-kpn" style={{padding:"10px"}} class=" listlinksh">KPN Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="https://www.redbus.in/travels/orange-travels-orange" style={{padding:"10px"}} class=" listlinksh">Orange Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="https://www.redbus.in/travels/parveen-travels" style={{padding:"10px"}} class=" listlinksh">Parveen Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="https://www.redbus.in/travels/parveen-travels" style={{padding:"10px"}} class=" listlinksh">Rajadhani Express&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="https://www.redbus.in/travels/rajdhani-express" style={{padding:"10px"}} class=" listlinksh">VRL Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh"> Chartered Speed Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Bengali Tiger&nbsp;</a>

   </div>
   <div class="uk-padding-remove"  style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">SRS Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Evacay Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Kallada Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">KPN Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Orange Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Parveen Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Rajadhani Express&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">VRL Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh"> Chartered Speed Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Bengali Tiger&nbsp;</a>

   </div>
   <div class="uk-padding-remove"  style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">SRS Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Evacay Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Kallada Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">KPN Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Orange Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Parveen Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Rajadhani Express&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">VRL Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh"> Chartered Speed Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Bengali Tiger&nbsp;</a>

   </div>
   <div class="uk-padding-remove"  style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">SRS Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Evacay Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Kallada Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">KPN Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Orange Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Parveen Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Rajadhani Express&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">VRL Travels&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh"> Chartered Speed Bus&nbsp;</a>

   </div>
   <div class="uk-padding-remove" style={{borderRight:"1px solid #8e8d8d"}}>
   <a href="" style={{padding:"10px"}} class=" listlinksh">Bengali Tiger&nbsp;</a>

   </div>

</div>
<br/>
<a target="_blank" href="https://www.redbus.in/travels/operators-directory"><p class="footerhb">All Operators ></p></a>

    </div>
  
</div>
{/***subfooter */}


<Footer/>
      </div>
  )
}
}
export default Homepage;





