import React, { Component } from 'react';
import Header from '../../../../components/header/Header';
import Footer from '../../../../components/footer/Footer';
import "../../homepage/knowmore/knowmore.css"
import { Link } from 'react-router-dom';
import safety from '../../../../assets/homepage/knowmore/safety.svg';
import staffwith from '../../../../assets/homepage/knowmore/staffwithmask.svg';
import sanitizedbus from '../../../../assets/homepage/knowmore/sanitizedbus.svg';

import handsanitisers from '../../../../assets/homepage/knowmore/handsanitisers.svg';
import regulartemp from '../../../../assets/homepage/knowmore/regulartemp.svg';
import noblankets from '../../../../assets/homepage/knowmore/noblankets.svg';
import mandatorymasks from '../../../../assets/homepage/knowmore/mandatorymask.svg';
import donottravel from '../../../../assets/homepage/knowmore/donottravel.svg';
import carryyour from '../../../../assets/homepage/knowmore/carryyour.svg';
import followmandatory from '../../../../assets/homepage/knowmore/followmandatory.svg';
import slider1 from '../../../../assets/homepage/knowmore/slider1.svg';
import slider2 from '../../../../assets/homepage/knowmore/slider2.svg';
import slider3 from '../../../../assets/homepage/knowmore/slider3.svg';
import slider4 from '../../../../assets/homepage/knowmore/slider4.svg';
import slider5 from '../../../../assets/homepage/knowmore/slider5.svg';
import slider6 from '../../../../assets/homepage/knowmore/slider6.svg';
import slider7 from '../../../../assets/homepage/knowmore/slider7.svg';


import passengerthermal from '../../../../assets/homepage/knowmore/passengerthermal.svg';

function KonowMore() {
        return (
             <div>
                  {/*<Header/>*/}
                  <Header/>
                          
                         <br/>
                         <br/>
                         <div className="uk-grid">
          <div className="uk-width-1-5 uk-margin-small-left" style={{lineHeight:"85px"}}>
          <i class='fas fa-arrow-left' style={{fontSize:"36px",width:"1px"}}></i>
        </div>
        <div>
          <h1 className="" style={{fontSize:"50px",fontWeight:"500",color:"#3e3e52"}}>Safety + : Covid 19 measures by redBus</h1>                          

        </div>

                         </div>
                         <hr style={{}} />
{/***video */}
                         {/* <div className="embed-responsive embed-responsive-16by9 uk-flex uk-flex-center uk-width-1-1" style={{}}>
      <iframe class="uk-align-center embed-responsive-item" style={{width:"70%",height:"65%"}} src="https://www.youtube.com/embed/videoseries?list=PLNgfm7RnJp2Fwenq_X5TIQOyd2yLG4KLy&rel=0" allowfullscreen></iframe>
          </div> */}
          <div className=" uk-flex uk-flex-center uk-margin-large-bottom" style={{}}> 
            <div className="uk-width-2-3" style={{backgroundColor:"blue", height:"460px"}}>
            <iframe class="embed-responsive-item" style={{width:"100%",height:"100%"}} src="https://www.youtube.com/embed/videoseries?list=PLNgfm7RnJp2Fwenq_X5TIQOyd2yLG4KLy&rel=0" allowfullscreen></iframe>
            </div>
          </div>
  {/***video */}

 {/****introducing safety */}
       
 <div class="uk-grid-collapse uk-grid" style={{margin:"auto",width:"578px",height: "104px", borderRadius: "4px",backgroundColor:"#f8d48f",boxShadow:"0 3px 7px 0 rgba(0,0,0,.28)",top:"320px"}}>
    <div style={{paddingTop:"18px",width:"15%",justifyContent:"center",alignItems:"center"}}>
      <img src={safety} class=" " alt=" " style={{height:"70px",marginBottom:"10px",marginLeft:"15px"}} />

    </div>
  <div style={{paddingLeft:"19px",paddingTop:"23px",width:"85%"}}>
      <div style={{fontFamily: "Montserrat",fontSize:"16px",fontWeight:"700",color:"#3d3d3d"}}>INTRODUCING SAFETY+</div>
      <p style={{fontFamily: "Montserrat",fontSize:"14px",fontWeight:"400",color:"#3d3d3d"}}>With Safety+ we have brought in a set of measures to ensure you travel safely</p>
  </div>

</div>
<br/>
<br/>
{/****introducing safety */}

{/***bus operator measures */}
<div style={{backgroundColor:"#fff5e5"}}>
                            <br/>
                            <br/>
                            <div class="">
       <p className="uk-flex uk-flex-left uk-margin-medium-left" style={{fontFamily: "Montserrat",fontWeight:"700",fontSize:"19px",color:"#3d3d3d"}}>Bus Operator Measures</p>                          

   </div>
                            <br/>
                            <br/>
<div className="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m">
<div className="" style={{}}>
<div className="uk-grid uk-child-width-1-2" style={{fontFamily: "Montserrat"}}>
  <div>
  <img src={staffwith} class="uk-align-center " alt=" " style={{height:"70px"}} />


  </div>
  <div>
    <div className="uk-grid">
       <div className="" style={{}} >
           <p style={{color:"#3d3d3d",fontSize:"14px",fontWeight:"700",fontFamily: "Montserrat"}}>Staff with Masks</p>                        

         </div>  
         <div>
      <p style={{marginTop: "9px",letterSpacing: "-.16px",fontSize:"12px",fontWeight:"400",color:"#3d3d3d",fontFamily: "Montserrat"}}>We require all our bus staff to strictly wear approved masks at all time during the journey.
</p>
         </div>                       
                                 
    </div>

  </div>


</div>

 </div>
 <div>
 <div className="uk-grid uk-child-width-1-2">
  <div>
  <img src={sanitizedbus} class="uk-align-center " alt=" " style={{height:"70px"}} />


  </div>
  <div>
    <div className="uk-grid">
       <div className="" >
           <p style={{color:"#3d3d3d",fontSize:"14px",fontWeight:"700",fontFamily: "Montserrat"}}>Sanitized Bus</p>                        

         </div>  
         <div>
      <p style={{marginTop: "9px",letterSpacing: "-.16px",fontSize:"12px",fontWeight:"400",color:"#3d3d3d",fontFamily: "Montserrat"}}>All our buses are deep cleaned and disinfected before and after every trip.
</p>
         </div>                       
                                 
    </div>

  </div>


</div>

 </div>
 <div>

 <div className="uk-grid uk-child-width-1-2">
  <div>
  <img src={handsanitisers} class="uk-align-center " alt=" " style={{height:"70px"}} />


  </div>
  <div>
    <div className="uk-grid" style={{}}>
       <div className="" >
           <p style={{color:"#3d3d3d",fontSize:"14px",fontWeight:"700",fontFamily: "Montserrat"}}>Hand Sanitizers Provided</p>                        

         </div>  
         <div>
      <p style={{marginTop: "9px",letterSpacing: "-.16px",fontSize:"12px",fontWeight:"400",color:"#3d3d3d",fontFamily: "Montserrat"}}>We are equipping all our buses with hand sanitizers to help you stay disinfected.
</p>
         </div>                       
                                 
    </div>

  </div>


</div>

 </div>
</div>
<div className="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m">
<div>
<div className="uk-grid uk-child-width-1-2">
  <div>
  <img src={regulartemp} class="uk-align-center " alt=" " style={{height:"70px"}} />


  </div>
  <div>
    <div className="uk-grid">
       <div className="" >
           <p style={{color:"#3d3d3d",fontSize:"14px",fontWeight:"700",fontFamily: "Montserrat"}}>Regular Temperature Checks</p>                        

         </div>  
         <div>
      <p style={{marginTop: "9px",letterSpacing: "-.16px",fontSize:"12px",fontWeight:"400",color:"#3d3d3d",fontFamily: "Montserrat"}}>Our bus drivers and service personnel are subject to temperature checks before every trip.
</p>
         </div>                       
                                 
    </div>

  </div>


</div>

 </div>
 <div>
 <div className="uk-grid uk-child-width-1-2">
  <div>
  <img src={noblankets} class="uk-align-center " alt=" " style={{height:"70px"}} />


  </div>
  <div>
    <div className="uk-grid">
       <div className="" >
           <p style={{color:"#3d3d3d",fontSize:"14px",fontWeight:"700",fontFamily: "Montserrat"}}>No Blankets / Linens</p>                        

         </div>  
         <div>
      <p style={{marginTop: "9px",letterSpacing: "-.16px",fontSize:"12px",fontWeight:"400",color:"#3d3d3d",fontFamily: "Montserrat"}}>For your safety, we shall not be providing any blankets or linens. You are requested to carry your own.
</p>
         </div>                       
                                 
    </div>

  </div>


</div>

 </div>
 <div>

 <div className="uk-grid uk-child-width-1-2">
  <div>
  <img src={passengerthermal} class="uk-align-center " alt=" " style={{height:"70px"}} />


  </div>
  <div>
    <div className="uk-grid">
       <div className="" >
           <p style={{color:"#3d3d3d",fontSize:"14px",fontWeight:"700",fontFamily: "Montserrat"}}>Passenger Thermal Screening</p>                        

         </div>  
         <div>
      <p style={{marginTop: "9px",letterSpacing: "-.16px",fontSize:"12px",fontWeight:"400",color:"#3d3d3d",fontFamily: "Montserrat"}}>All passengers will be subject to thermal screening in order to allow only asymptomatic people to travel
</p>
         </div>                       
                                 
    </div>

  </div>


</div>

 </div>
</div>
<br/>
<br/>

</div>
<br/>
<br/>
{/***bus operator measures */}    

{/***passenger guide lines */}
<div>
  
<div class="">
       <p className="uk-flex uk-flex-left uk-margin-medium-left" style={{fontFamily: "Montserrat",fontSize:"19px",color:"#3d3d3d"}}>Passenger Guidelines</p>                          

   </div> <br/>
  <br/>
  <div className="uk-grid uk-child-width-1-3@l uk-child-width-1-3@m">
<div>
<div className="uk-grid uk-child-width-1-2">
  <div>
  <img src={mandatorymasks} class="uk-align-center " alt=" " style={{height:"70px"}} />


  </div>
  <div>
    <div className="uk-grid">
       <div className="" >
           <p style={{color:"#3d3d3d",fontSize:"14px",fontWeight:"700",fontFamily: "Montserrat"}}>Mandatory Masks</p>                        

         </div>  
         <div>
      <p style={{marginTop: "9px",letterSpacing: "-.16px",fontSize:"12px",fontWeight:"400",color:"#3d3d3d",fontFamily: "Montserrat"}}>Proper masks are mandatory for all passengers. Handkerchiefs /other cloth items are not permitted as masks..
</p>
         </div>                       
                                 
    </div>

  </div>


</div>

 </div>
 <div>
 <div className="uk-grid uk-child-width-1-2">
  <div>
  <img src={donottravel} class="uk-align-center " alt=" " style={{height:"70px"}} />


  </div>
  <div>
    <div className="uk-grid">
       <div className="" >
           <p style={{color:"#3d3d3d",fontSize:"14px",fontWeight:"700",fontFamily: "Montserrat"}}>Do not travel with symptoms</p>                        

         </div>  
         <div>
      <p style={{marginTop: "9px",letterSpacing: "-.16px",fontSize:"12px",fontWeight:"400",color:"#3d3d3d",fontFamily: "Montserrat"}}>Passengers are advised to refrain from travel if they show Covid-19 Symptoms. In such an event, the passenger risks de-boarding.
</p>
         </div>                       
                                 
    </div>

  </div>


</div>

 </div>
 <div>

 <div className="uk-grid uk-child-width-1-2">
  <div>
  <img src={carryyour} class="uk-align-center " alt=" " style={{height:"70px"}} />


  </div>
  <div>
    <div className="uk-grid">
       <div className="" >
           <p style={{color:"#3d3d3d",fontSize:"14px",fontWeight:"700",fontFamily: "Montserrat"}}>Carry your own blankets</p>                        

         </div>  
         <div>
      <p style={{marginTop: "9px",letterSpacing: "-.16px",fontSize:"12px",fontWeight:"400",color:"#3d3d3d",fontFamily: "Montserrat"}}>In an effort to maintain utmost hygiene, you are requested to carry your own blankets and linens as we will not be providing these.
</p>
         </div>                       
                                 
    </div>

  </div>


</div>

 </div>
 <div class="">

 <div className="uk-grid uk-child-width-1-2">
  <div>
  <img src={followmandatory} class="uk-align-center " alt=" " style={{height:"70px"}} />


  </div>
  <div>
    <div className="uk-grid">
       <div className="" >
           <p style={{color:"#3d3d3d",fontSize:"14px",fontWeight:"700",fontFamily: "Montserrat"}}>Follow Mandatory Travel Guidelines</p>                        

         </div>  
         <div>
      <p style={{marginTop: "9px",letterSpacing: "-.16px",fontSize:"12px",fontWeight:"400",color:"#3d3d3d",fontFamily: "Montserrat"}}>It is mandatory to follow the travel guidelines of your source and destination state for travel. View Details.
</p>
         </div>                       
                                 
    </div>

  </div>


</div>

 </div>

</div>

<br/>
<br/>
</div>


{/***passenger guide lines */}

{/**best practices while travelling 

<div style={{backgroundColor:"#bbb"}} >
  <br/>
  <br/>
  <div class="">
       <p className="" style={{fontSize:"19px",color:"#3d3d3d"}}>Best Practices While Travelling</p>                          

   </div>
   <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 7:3; animation: push">

    <ul class="uk-slideshow-items">
        <li>
        <img src={slider1} class="uk-align-center " alt=" "/>
        </li>
        <li>
        <img src={slider2} class="uk-align-center " alt=" "  />
        </li>
        <li>
        <img src={slider3} class="uk-align-center " alt=" "  />
        </li>
        <li>
        <img src={slider4} class="uk-align-center " alt=" "  />
        </li>
        <li>
        <img src={slider5} class="uk-align-center " alt=" "  />
        </li>
        <li>
        <img src={slider6} class="uk-align-center " alt=" "  />
        </li>
        <li>
        <img src={slider7} class="uk-align-center " alt=" "  />
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>

</div>*/}
{/**best practices while travelling */}
<div className="uk-width-1-1 uk-padding" style={{backgroundColor:"#ddd"}}>
<div class="">
       <p className="uk-flex uk-flex-left" style={{fontSize:"19px",color:"#3d3d3d"}}>Best Practices While Travelling</p>                          

   </div> {/**autoplay: true; */}
<div uk-slider="center;autoplay-interval: 3000 ;autoplay: true;" style={{}}>

    <div class="uk-position-relative uk-visible-toggle uk-light  " tabindex="-1">

        <ul class="uk-slider-items uk-child-width-1-1@s uk-grid uk-flex uk-flex-center " >
            <li className="" >
                <div class="uk-card uk-card-default uk-width-1-3@l uk-width-1-1@s uk-align-center">
                   
                        <img src={slider1} alt="" style={{height:"150px",}} className="uk-align-center"/>
                    
                    
                        
                        <p className="uk-padding-small" style={{color:"#3e3e52",fontSize:"13px"}}>Avoid touching your face</p>
                   
                </div>
            </li>
            <li className="" >
                <div class="uk-card uk-card-default uk-width-1-3@l uk-width-1-1@s uk-align-center">
                   
                        <img src={slider2} alt="" style={{height:"150px"}} className="uk-align-center"/>
                    
                    
                        
                        <p className="uk-padding-small" style={{color:"#3e3e52",fontSize:"13px"}}>Avoid travel if you are unwell</p>
                   
                </div>
            </li>
            <li className="" >
                <div class="uk-card uk-card-default  uk-width-1-3@l uk-width-1-1@s uk-align-center">
                   
                        <img src={slider3} alt="" style={{height:"150px"}} className="uk-align-center"/>
                    
                    
                        
                        <p className="uk-padding-small" style={{color:"#3e3e52",fontSize:"13px"}}>Cough into your elbow</p>
                   
                </div>
            </li>
            <li className="" >
                <div class="uk-card uk-card-default uk-width-1-3@l uk-width-1-1@s uk-align-center">
                   
                        <img src={slider4} alt="" style={{height:"150px",}} className="uk-align-center"/>
                    
                    
                        
                        <p className="uk-padding-small" style={{color:"#3e3e52",fontSize:"13px"}}>Carry your own shall/jacket/blanket</p>
                   
                </div>
            </li>

            <li className="" >
                <div class="uk-card uk-card-default uk-width-1-3@l uk-width-1-1@s uk-align-center">
                   
                        <img src={slider5} alt="" style={{height:"150px",}} className="uk-align-center"/>
                    
                    
                        
                        <p className="uk-padding-small" style={{color:"#3e3e52",fontSize:"13px"}}>Wash your hands for atleast 20 seconds with soap</p>
                   
                </div>
            </li>

            <li className="" >
                <div class="uk-card uk-card-default uk-width-1-3@l uk-width-1-1@s uk-align-center">
                   
                        <img src={slider6} alt="" style={{height:"150px",}} className="uk-align-center"/>
                    
                    
                        
                        <p className="uk-padding-small" style={{color:"#3e3e52",fontSize:"13px"}}>Use a mask while travelling or at boarding point</p>
                   
                </div>
            </li>

            <li className="" >
                <div class="uk-card uk-card-default uk-width-1-3@l uk-width-1-1@s uk-align-center">
                   
                        <img src={slider7} alt="" style={{height:"150px",}} className="uk-align-center"/>
                    
                    
                        
                        <p className="uk-padding-small" style={{fontFamily: "Montserrat",color:"#3e3e52",fontSize:"13px"}}>Use and carry a hand sanitizer</p>
                   
                </div>
            </li>

        </ul>

        <a class="uk-position-center-left uk-position-small " href="#" uk-slidenav-previous uk-slider-item="previous"><i style={{color:"black"}} class="fa fa-chevron-left" aria-hidden="true"></i></a>
        <a class="uk-position-center-right uk-position-small " href="#" uk-slidenav-next uk-slider-item="next"><i style={{color:"black"}} class="fa fa-chevron-right" aria-hidden="true"></i></a>

    </div>

</div>

</div>
{/**best practices while travelling */}

{/**safety+ buses button */}
<div style={{}}>
<button class="uk-button uk-button-danger uk-flex uk-flex-center" style={{margin:"auto",backgroundColor:"#d84e55",width:"400px",height:"70px",letterSpacing:"2.25px",fontWeight:"700",borderRadius:"3px",fontSize:"24px"}}>View Safety+ Buses</button>

</div>
{/**safety+ buses button */}





                              <Footer/>
                               {/*<Footer/>*/} 
                                </div>
           )
                   }
      export default KonowMore;