import React, { Component } from 'react';

import Header from'../../header/Header'
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
import { Link } from 'react-router-dom';



import journey_for from '../../../assets/bus_tickets/journey_for.jpg';
import amazon_pay from '../../../assets/bus_tickets/amazon_pay.jpg';

function Homepage() {
  
 
  
  return (
  <div>
      {/*<Header/>*/}
      <Header/>

{/**background image */}
 <div class="uk-background-cover uk-height-1-1" style={{width:"100%",padding:"56px", backgroundImage: 'url(' + require('../../../assets/homepage/image1.png') + ')'}}>
 <br/>
     <br/>
     <br/>
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
    
    

 
        </div>
{/**background image */}

{/***3 div grid */}
<div style={{backgroundColor:"#f8f8f8"}}> 
     <br/>  <br/>  <br/>  <br/>
   
     <br/>
     
     <div class=" " uk-grid  style={{justifyContent:"center",alignItems:"center",marginTop:"-155px"}}>
     <div class="uk-grid " style={{margin:"auto",width:"43%",backgroundColor:"#fff5e5",boxShadow:"0 3px 7px 0 rgba(0,0,0,.28)",top:"320px"}}>
<div style={{paddingTop:"18px"}}>
<img src={plusimg} class="uk-align-center " alt=" " style={{height:"70px"}} />

</div>
<div style={{paddingLeft:"19px",paddingTop:"23px"}}>
 <div style={{fontSize:"14px",fontWeight:"700",color:"#3d3d3d"}}>Introducing Safety+ Program</div>
 <div style={{fontSize:"12px",fontWeight:"400",color:"#3d3d3d"}}>A unique certification program to ensure safety in all buses.</div>
</div>
<div style={{paddingLeft:"9px",paddingTop:"61px"}} >
   <Link class="uk-button" style={{paddingRight:"10px",marginBottom:"10px",paddingLeft:"10px",fontWeight:"700",borderRadius:"5px", height:"30px",backgroundColor:"#d84e55",color:"#fff"}}  to="/homepage/knowmore">
 {/*  <button class="uk-button" style={{paddingRight:"10px",marginBottom:"10px",paddingLeft:"10px",fontWeight:"700",borderRadius:"5px", height:"30px",backgroundColor:"#d84e55",color:"#fff"}} >KNOW MORE </button>*/}
 KNOW MORE </Link>
</div>
</div>
   <div className="uk-grid uk-child-width-1-2"  style={{justifyContent:"center",alignItems:"center",marginLeft:"1px"}}>
    <div class="first_card uk-card uk-card-default uk-card-body" style={{height:"300",width:"auto"}}>
        
    <h3 class=" uk-card-title" style={{fontSize:14,fontWeight:700,color:"#737373",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-11px"}}>Save up to Rs 150 for bus tickets</h3>
    <img src={journey_for} class=" " alt=" " />
                <div><p className="uk-text-bold" style={{fontSize:14,color:"#737373",display:"flex",justifyContent:"center",alignItems:"center"}}>Use Code FIRST</p></div>
    </div>

    <div class="second_card uk-card uk-card-default uk-card-body uk-margin-large-left" style={{height:"300",width:"auto"}}>
    <h3 class="uk-text-bold uk-card-title" style={{fontSize:14,fontWeight:700,color:"#737373",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-11px"}}>Pay using Amazon Pay
   </h3>
    <img src={amazon_pay} class=" " alt=" " />;
    <p className="uk-text-bold" style={{fontSize:14,color:"#737373"}}>Pay using Amazon Pay</p>
    </div>
    </div>
</div>
   <br/>  <br/>  <br/>  <br/>

       </div>
    {/***3 div grid */}

    {/**introdusing safety */}
    <br/>
    <br/>
    <div style={{width:"80%",margin:"auto",border:"1px solid #ddd"}}>
     <div className="uk-grid uk-child-width-1-2">
      <div className="uk-width-1-6" >
      <img src={plusimg} class="uk-align-center " alt=" " style={{height:"90px",marginTop:"25px"}} />


      </div>
   
  
    <div className="uk-width-5-6 uk-float-left" uk-grid>
    <div style={{marginTop:"25px"}}>
         <h2 style={{color:"#3e3e52",fontWeight:600}}>
Introducing Safety+ </h2>
</div>
   <div>
      <div className="uk-grid">  
      <div>
      <h4 style={{color:"#7e7e8c",fontWeight:"400"}}>Opt to Travel Safe with redBus</h4>
</div>
<div style={{fontSize:"12px",fontWeight:400,marginTop:"11px",marginleft:"-28px"}}>KNOW MORE</div>                    
</div>
</div>
<br/>
  
<div className="uk-float-left" style={{textAlign:"left"}}>
<p style={{color:"#4a4a4a",fontSize:"15px"}}>Look for buses with Safety+ tag while booking your journey, </p>                          

</div>
 
   <br/>
   <div className="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-3@s uk-float-left">
         <div>
             <div className={{}} uk-grid>
              <div>
                 <p className="uk-float-left" style={{color:"#1446a0",fontSize:"19px",fontWeight:"bolder"}}> Sanitized Bus </p>                         
               </div>   
               <div>
                      <p className="uk-float-left" style={{color:"#34495e",fontSize:"14px",fontWeight:"400"}}>
                      All Safety+ buses are sanitized and disinfected before and after every trip.                           
                      </p>

                  </div>                        
      
      
       </div>                        
             </div>
         
          <div>
          <div className={{}} uk-grid>
              <div>
                 <p className="uk-float-left" style={{color:"#1446a0",fontSize:"19px",fontWeight:"bolder" }}> Mandatory masks  </p>                         
               </div>   
               <div>
                      <p className="uk-float-left" style={{color:"#34495e",fontSize:"14px",fontWeight:"400"}}>
                      Proper masks are mandatory for all passengers and bus staff.                          
                      </p>

                  </div>                        
      
      
       </div>   


          </div>

          <div> 
          <div className={{}} uk-grid>
              <div>
                 <p className="uk-float-left" style={{color:"#1446a0",fontSize:"19px",fontWeight:"bolder" }}>  Thermal Screening </p>                         
               </div>   
               <div>
                      <p className="uk-float-left" style={{color:"#34495e",fontSize:"14px",fontWeight:"400"}}>
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
<br/>
<br/>
<div style={{width:"80%",margin:"auto",backgroundColor:"#e8ecef",border:"1px solid #ddd"}}>
   <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s">
          <div className="" style={{}} >
          <img src={track_my_bus} class=" " alt=" " style={{}} />
                       

       </div>
       
       <div style={{color:"#4a4a4a",marginTop:"50px"}}>
       <h3 style={{color:"#4a4a4a",fontWeight:"600"}}>
       TRACK MY BUS - Smarter Way To Travel                         
       </h3>
       <br/>
       <p style={{fontSize:"14px",color:"#4a4a4a"}}>Track your bus with our ‘Track My Bus’ feature and know the exact location in real-time.Stay informed and keep your family informed!</p>
       <br/>
       <button className="uk-button" style={{border:"1px solid #39f",color:"#39f"}}> Know More</button>

       </div>
       
   </div>
   <br/>
   <br/>
   <hr/>
   <div className="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-3@s">
          <div className="" style={{margin:"auto"}}>
             <p style={{fontSize:"14px",color:"#4a4a4a"}}>BUSES</p>  
             <p style={{color:"#da4d52",fontSize:"36px"}}>10,000</p> 
          
           <p className="" style={{color:"#4a4a4a",textAlign:"center"}}>Total buses currently being tracked</p>                      


          </div>
          <div className="" style={{margin:"auto",color:"#4a4a4a"}}>
             <p style={{fontSize:"14px",color:"#4a4a4a"}}> ROUTES</p>  
             <p style={{color:"#da4d52",fontSize:"36px"}}>60,000</p> 
             <p style={{color:"#4a4a4a",textAlign:"center"}}>Total routes covered by live tracking</p>                      

          </div>
          <div className="" style={{margin:"auto",color:"#4a4a4a"}}>
             <p style={{fontSize:"14px",color:"#4a4a4a"}}> USERS</p>  
             <p style={{color:"#da4d52",fontSize:"36px"}}>40,000</p> 
             <p style={{color:"#4a4a4a",textAlign:"center"}}>Total users using Track My Bus feature</p>                      

          </div>

   </div>

</div>
<br/>
<br/>
{/***track my bus */}


{/***convenience on the go */}
<br/>
<br/>
<div class="uk-background-cover uk-width-1-1 " style={{ backgroundImage: 'url(' + require('../../../assets/homepage/convinience_back.png') + ')'}}>
<div style={{width:"80%",margin:"auto"}}>

<div className="uk-grid uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s">
      <div className="">
           <div className="uk-text-left" style={{color:"#4a4a4a"}}>
                 <h2 style={{color:"#4a4a4a",fontWeight:"600"}}>
                 CONVENIENCE ON-THE-GO.                     
                       </h2>
                       <br/>    
                       <div class="uk-width-1-1 uk-margin-small-bottom" >
                   <div className="uk-text-left " style={{color:"#4a4a4a",fontSize:"15px"}}>
                   Exclusive features on mobile include                          
                        </div> 
                         </div>
                        
                        <div class="uk-width-1-1 uk-margin-small-bottom">
                        <div className="uk-text-left" style={{color:"#4a4a4a",fontSize:"15px"}}>
                        redBus NOW - when you need a bus in the next couple of hours. Board a bus on its way.                         
                            </div> 
                            </div>
                            <div class="uk-width-1-1 uk-margin-small-bottom"> 
                            <div className="uk-text-left" style={{color:"#4a4a4a",fontSize:"15px"}}>
                            Boarding   Point Navigation  -  Never lose your way while travelling to your boarding point!                          
                           </div>  
                           </div> 
                           <div class="uk-width-1-1 uk-margin-small-bottom"> 
                              <div className="uk-text-left" style={{color:"#4a4a4a",fontSize:"15px"}}>
                           1-click Booking - - Save your favourite payment options securely on redBus, and more.                          
                           </div>
                            </div> 
                           <div class="uk-width-1-1 uk-margin-small-bottom">
                               <div className="uk-text-left" style={{color:"#4a4a4a",fontSize:"15px"}}>
                           Download the app.</div>
                           </div>
                           <div class="uk-width-1-1 uk-margin-small-bottom">
                              <div className="uk-align-left" style={{color:"#4a4a4a",fontSize:"15px"}}>
                           Enter your mobile number below to download the redBus mobile app.
                            </div> 
                           </div >
                           <div className="uk-grid uk-width-1-1">
                              <div className="">
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
                              <div className="" style={{}}>
                                 <input type="text" placeholder="Enter your mobile number" />

                              </div>
                              </div> 
                              <br/> 
                              <div>
                                 <button className="uk-button" style={{backgroundColor:"#d84e55",color:"#fff"}}>
                                 SMS ME THIS LINK

                                 </button>
                                 </div>
                                 <div class="uk-margin-small-top">
                                    <div class="uk-grid">
                                       <div>
                                       <img src={appleicon} class=" " alt=" " style={{width:"40px",height:"40px"}} />


                                       </div>
                                       <div style={{paddingLeft:"1px"}}>
                                       <img src={googleplay} class=" " alt=" " style={{width:"70px",height:"40px"}} />


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
        <div className=" " style={{}}>
        <img src={convinience_img} class=" " alt=" " style={{float:"right"}} />

         </div>                    

</div>
</div>
</div>
<br/>
<br/>
{/***convenience on the go */}


{/**we promise to deliver */}
<div className="uk-width-1-1" style={{backgroundColor:"#ededed"}} >
   <br/>
   <div className=" " uk-grid style={{}}>
      <div className="">

        <img src={promise} class=" uk-align-center" alt=" " style={{}} />

      </div>

    

     
      <div>
         <br/>
       <h2 className=" uk-text-center" style={{color:"#404040",fontWeight:"500"}}>WE PROMISE TO DELIVER</h2>
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


     

   </div>

</div>
{/**we promise to deliver */}

{/**awards and recognition */}
<div>
   <br/>
   <h2 className="uk-text-center" style={{color:"#4a4a4a",fontWeight:"bolder"}}>
      AWARDS & RECOGNITION
   </h2>
   <br/>
   <br/>
   <br/>
  <div className="uk-grid" style={{justifyContent:"center",alignItems:"center"}}>
     <div className="" uk-grid >
        <div >
        <img src={business} class=" uk-align-center" alt=" " style={{}} />

       </div>
       <div >
          <p style={{fontFamily:"monospace",letterSpacing:"3px",fontSize:"17px",color:"#4a4a4a"}}>
             Most Innovative Company
          </p>
       </div>

     </div>
     <div className="" uk-grid style={{marginTop:"21px"}} >
        <div >
        <img src={brand} class=" uk-align-center" alt=" " style={{}} />

       </div>
       <div >
          <p style={{fontFamily:"monospace",letterSpacing:"3px",fontSize:"17px",color:"#4a4a4a"}}>
             Most Trusted Brand
          </p>
       </div>

     </div>
    
     <div className="" uk-grid >
        <div >
        <img src={eye} class=" uk-align-center" alt=" " style={{}} />

       </div>
       <div >
          <p style={{fontFamily:"monospace",letterSpacing:"3px",fontSize:"17px",color:"#4a4a4a"}}>
            Mobile Innovation Award
          </p>
       </div>

     </div>
    

  </div>
   

</div>
<br/>
{/**awards and recognition */}


{/**our global presence */}
<div style={{backgroundColor:"#f1f1f1"}}>
   
   <h3 className="uk-text-center "  style={{color:"#4a4a4a",fontWeight:"600",paddingTop:"20px"}}>OUR GLOBAL PRESENCE</h3>
  <div className="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-3@s " style={{margin:"auto",width:"80%"}}>
    <div className="" uk-grid>
    <div>
     <img src={colombia} class=" uk-align-center" alt=" " style={{}} />
     </div>
     <div className=" uk-text-center" style={{color:"#737373"}}>
       COLOMBIA
     </div>
     </div>
     <div className="" uk-grid>
     <div>
     <img src={india} class=" uk-align-center" alt=" " style={{}} />

     </div>
     <div className="uk-padding-top-remove uk-text-center" style={{color:"#737373"}}>
       INDIA
     </div>
     </div>
     <div className="" uk-grid>
     <div>
     <img src={indonesia} class=" uk-align-center" alt=" " style={{}} />

     </div>
     <div className="uk-padding-top-remove uk-text-center" style={{color:"#737373"}}>
       INDONESIA
     </div>
     </div>
     <div className="" uk-grid>
     <div>
     <img src={malaysia} class=" uk-align-center" alt=" " style={{}} />

     </div>
     <div className="uk-padding-top-remove uk-text-center" style={{color:"#737373"}}>
       MALAYSIA
     </div>
     </div>
     <div className="" uk-grid>
     <div>
     <img src={peru} class=" uk-align-center" alt=" " style={{}} />

     </div>
     <div className="uk-padding-top-remove uk-text-center" style={{color:"#737373"}}>
       PERU
     </div>
     </div>
     <div className="" uk-grid>
     <div>
     <img src={singapore} class=" uk-align-center" alt=" " style={{}} />

     </div>
     <div className="uk-padding-top-remove uk-text-center" style={{color:"#737373"}}>
       SINGAPORE
     </div>
     </div>

     </div>


  
</div>
{/**our global presence */}


{/**the numbers are growing */}

<div>
<h3 className="uk-text-center "  style={{color:"#4a4a4a",fontWeight:"600",paddingTop:"20px"}}>THE NUMBERS ARE GROWING!</h3>
<br/>
<br/>
<div className="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s " style={{margin:"auto",width:"80%"}}>
    <div class="" style={{textAlign:"center",margin:"auto"}} >
   <div  style={{color:"#737373"}} >CUSTOMERS</div>
   <div style={{color:"#da4e52",fontSize:"46px",fontWeight:"400"}}>23M</div>
   <div class="" >redBus is trusted by over 23 million happy customers globally</div>
     </div>
     <div class="" style={{textAlign:"center",margin:"auto"}} >
   <div  style={{color:"#737373"}} >OPERATORS</div>
   <div style={{color:"#da4e52",fontSize:"46px",fontWeight:"400"}}>2600</div>
   <div>network of over 2600 bus operators worldwide</div>
     </div>
     <div class="" style={{textAlign:"center",margin:"auto"}} >
   <div  style={{color:"#737373"}} >BUS TICKETS</div>
   <div style={{color:"#da4e52",fontSize:"46px",fontWeight:"400"}}>180+ M</div>
   <div>Over 180 million trips booked using redBus</div>
     </div>
        </div>
        <br/>
        <br/>

</div>
{/**the numbers are growing */}


    <Footer/>
     {/*<Footer/>*/} 
      </div>
  )
}
export default Homepage;





