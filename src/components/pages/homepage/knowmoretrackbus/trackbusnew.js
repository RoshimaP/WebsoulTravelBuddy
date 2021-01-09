import React, { Component } from 'react';
//import Header from'../../header/FixedHeader'
import Header from '../../../../components/header/TrackHeader';
import Footer from '../../../../components/footer/Footer';
import suitcase from '../../../../assets/homepage/knowmoretrackbus/img01_suitcase.gif';
import trackbus from '../../../../assets/homepage/knowmoretrackbus/Track_my_buss.png';
import smartboard from '../../../../assets/homepage/knowmoretrackbus/smartboard.gif';
import smarttrack from '../../../../assets/homepage/knowmoretrackbus/smarttracking.gif';
import smartdrop from '../../../../assets/homepage/knowmoretrackbus/smartdropping.gif';
import downloadapp from '../../../../assets/homepage/knowmoretrackbus/downloadapp.png';
import targeticon from '../../../../assets/homepage/knowmoretrackbus/targeticon.png';
import dotted_1 from '../../../../assets/homepage/knowmoretrackbus/dotted_1.png';
import dotted_2 from '../../../../assets/homepage/knowmoretrackbus/dotted_2.png';
import dotted_3 from '../../../../assets/homepage/knowmoretrackbus/dotted_3.png';
import { Link } from 'react-router-dom';
import './knowmoretrackbus.css';
function KnowMoreTrackBus() {
    return (

        <div>
            <Header />

            <div className="uk-align-center uk-width-1-1" >
                <div className="uk-width-1-1" style={{ backgroundColor: "white" }}>

                    {/*image section*/}

                    <div className="uk-align-center" style={{ width: "70%"}}>
                        <img src={trackbus}  className="uk-align-center"/>
                        <h1 className="uk-text-center" style={{fontFamily: "Montserrat",paddingTop:"30px",paddingBottom:"15px",fontSize:"28px",color: "#343435", fontWeight: 700}}>TRACK MY BUS</h1>
                        <p className="uk-text-center" style={{color: "#343435",fontFamily: "Montserrat",paddingBottom:"20px",fontSize: "15px",fontWeight: "700"}}>SMARTER WAY TO TRAVEL</p>
                    </div>
                </div>

                {/*input field section*/}

                <div className="uk-width-1-1" style={{ backgroundColor: "white" }}>
                <div className="uk-align-center widthclass" >
                    <div className="uk-grid uk-grid-collapse uk-flex uk-flex-center">
                        <div class=" " >
                            <div class="  uk-inline" style={{  borderWidth: "2px", height: "50px", marginBottom: "20px" }}>
                                <span class="uk-form-icon" uk-icon="icon: tag"></span>
                                <input class="uk-input" placeholder="Ticket No" style={{ height: "48px", borderWidth: "1px", boxShadow: "1px 2px 3px #888888" }} />
                            </div>
                        </div>

                        <div class="  " >
                            <div class="  uk-inline uk-margin-remove-left@l uk-margin-remove-right@l" style={{ borderWidth: "2px", height: "50px", marginBottom: "20px" }}>
                                <span class="uk-form-icon" uk-icon="icon: tag"></span>
                                <input class="uk-input" placeholder="Email Id" style={{  height: "48px", borderWidth: "1px", boxShadow: "1px 2px 3px #888888" }} />
                            </div>
                        </div>

                        <div class=" " >
                            <div className="buttonsize ">
                                <button class="uk-button uk-text-capitalize " style={{ fontFamily: "Montserrat", backgroundColor: "#D74F57", color: "#F8D1CE", height: "48px", boxShadow: "1px 2px 3px #888888", width: "150px", height: "50px", marginBottom: "20px" }}>Search </button>
                            </div>
                        </div>
                    </div>

                    {/*paragraph section*/}

                    <div className="uk-text-muted uk-text-center uk-padding-large uk-padding-remove-top uk-padding-remove-bottom paragraphclass" style={{fontFamily: "Montserrat",}}>
                    Track my bus feature enables our on-the-go customers and their families to keep track 
                    of the bus location. You can track your bus on a map and use the information to plan 
                    your commute to the boarding point and to get off at the right stop. Family members and
                     friends can also check the bus location to coordinate pick-ups and rest assured about
                      your safety. Bus operators use this feature to share any delay in bus schedule and
                       which are instantly shared with you. A win- win for all, it’s the smarter way to 
                       travel!
                    </div>
                </div>
            </div>

        {/*     HOW IT WORKS SECTION     */}

            <div className="uk-width-1-1" style={{ backgroundColor: "#e8ecef", paddingBottom:"5%" }}>
                <div className="uk-align-center" style={{width:"70%"}}>
                    <div>
                        <p className="uk-padding-small" style={{fontFamily: "Montserrat",fontSize:"28px",textAlign:"center",paddingTop:"30px",fontWeight:"700",lineHeight:"normal",color: "#343435"}}>HOW IT WORKS?</p>
                        <div class="uk-grid uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s">
                            <div style={{paddingTop:"30px"}}>
                                <img src={suitcase} class="uk-align-center@s"/>
                            </div>
                            <div>
                                <p className="uk-align-left@l uk-align-left@m uk-align-center@s uk-width-1-1" style={{paddingTop:"70px",paddingBottom:"5px",fontFamily: "Montserrat",fontSize:"30px",fontWeight:"300",color: "#343435"}}>Book your ticket</p>
                                <p className="uk-align-left@l uk-align-left@m uk-align-center@s uk-width-1-1" style={{color:"#787978",lineHeight:"26px",fontFamily: "Montserrat",fontSize:"14px",fontWeight:"200"}}>Look out for this icon <span><img src={targeticon}/></span> Book your ticket Look out for this icon for the buses enabled with Track My Bus feature. You can also add a phone number of a family member or friend on the mobile app. 30 minutes prior to your journey, we will send the bus number and tracking link to you and your chosen contact and you can track the bus on your mobile itself!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
                <div className="uk-visible@l">
                    <img src={dotted_1} className="uk-align-center " style={{marginTop:"-127px",marginLeft:"375px",  zIndex:"2000", opacity:"3"}}/>
                </div>


                {/*     SMART BOARDING SECTION     */}

                <div className="uk-width-1-1" style={{ backgroundColor: "white" }}>
                <div className="uk-align-center" style={{width:"70%", }}>
                    <div>
                       
                        <div class="uk-grid uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s">
                            
                            <div>
                                <p className="uk-align-left@l uk-align-left@m uk-align-center@s uk-width-1-1" style={{fontFamily: "Montserrat",fontSize: "30px",color: "#343435",fontWeight: "300",paddingTop:"35px",paddingBottom:"0px",}}>Smart Boarding </p>
                                <p className="uk-align-left@l uk-align-left@m uk-align-center@s uk-width-1-1" style={{lineHeight:"26px",fontFamily: "Montserrat",fontSize:"14px",fontWeight:"200",color: "#787978"}}>Whether you are running late or early, use the app to know which boarding point is the closest to you and check the estimated time of arrival of the bus at that stop. No need to call bus operators to check if the bus is running on schedule as we will keep you updated on any delay in the bus schedule.</p>
                            </div>
                            <div>
                                <img src={smartboard} class="uk-align-center@s"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* smart track section*/}

            <div className="uk-width-1-1" style={{ backgroundColor: "#e8ecef",  }}>
                <div className="uk-align-center" style={{width:"70%",}}>
                    <div style={{}}>
                       
                        <div class="uk-grid uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s" style={{}}>
                            <div className="uk-margin-remove-top@s topclass" style={{paddingTop:"130px"}}>
                                <img src={smarttrack} style={{}} class="uk-align-center@s"/>
                            </div>
                            <div class="uk-margin-medium-left uk-margin-remove-left@s uk-margin-remove-top@s topclass" style={{paddingTop:"180px"}}>
                                <p className="uk-align-left@l uk-align-left@m uk-align-center@s uk-width-1-1 " style={{fontFamily: "Montserrat",fontSize: "30px",lineHeight:"normal",color: "#343435",fontWeight: "300",}}>Smart Tracking</p>
                                <p className="uk-align-left@l uk-align-left@m uk-align-center@s uk-width-1-1" style={{lineHeight:"26px",fontFamily: "Montserrat",paddingTop:"0px",fontSize:"14px",fontWeight:"200",color: "#787978"}}>In bus travel, staying connected becomes tougher in areas with limited coverage area causing anxiety to you and your family. By using Track My Bus feature, you and your family members can see the exact location of the bus on the live map. You can now stay connected with your loved onethroughout your journey!</p>
                            </div>
                            <div className="uk-visible@l">
                                <img src={dotted_2} class=" " alt=" " height="50px" uk-img style={{position:"relative",marginTop:"-600px",marginLeft:"340px",}} />
                            </div>
                            
                        </div><br/><br/>
                    </div>
                </div>
            </div>

            <div className="uk-visible@l">
                <img src={dotted_3} className="uk-align-center " style={{marginTop:"-7%", zIndex:"2000"}}/>
            </div>

            {/*     SMART DROP SECTION */}

            <div className="uk-width-1-1" style={{ backgroundColor: "white" }}>
                <div className="uk-align-center" style={{width:"70%", marginTop:"-5%"}}>
                    <div>
                       
                        <div class="uk-grid uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s">
                      
                            <div>
                                <p className="uk-align-left@l uk-align-left@m uk-align-center@s uk-width-1-1" style={{fontFamily: "Montserrat",fontSize: "30px",color: "#343435",fontWeight: "300",paddingTop:"30px",}}>Smart Dropping</p>
                                <p className="uk-align-left@l uk-align-left@m uk-align-center@s uk-width-1-1" style={{lineHeight:"26px",fontFamily: "Montserrat",paddingTop:"5px",fontSize:"14px",fontWeight:"200",color: "#787978"}}>When you are traveling to a new city, use the mobile app to get suggestions from us on which dropping point would be the best for you. Confirm it with us and we will also alert you when to get off the bus!Someone picking you up at the stop? Ask them to use Track My Bus feature to check where your bus has reached and plan their commute to the pick-up point.</p>
                            </div>
                            <div>
                                <img src={smartdrop} style={{}} class="uk-align-center@s"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* download button section*/}
            <div className="uk-width-1-1" style={{ backgroundColor: "white" }}>
                <div className="uk-align-center" style={{width:"70%", }}>
                    
                        <p className="uk-text-center" style={{paddingTop:"30px",textAlign:"center",fontFamily: "Montserrat",}}>Track My Bus is best experienced on the latest version of redBus mobile App</p>
                    
                            <button class="uk-button uk-text-capitalize uk-align-center buttonclass"  style={{backgroundColor: "#e24648",color:"#fff",fontWeight:"700",fontSize:"15px",fontWeight:"700"}}>Download redBus App </button>
                        <div className="uk-margin-remove-bottom@s">
                            <img src={downloadapp} className="uk-align-center uk-padding-remove-bottom@s" alt=" " height="75px"  style={{}} />
                        </div>
                   


                </div>

            </div>


        {/*SUB FOOTER SECTION*/}
        
        <div style={{backgroundColor:"#e5e5e5"}}>
            <br/>
            <br/>
            <br/>
                <div className="subfooterdiv uk-grid subfootergrid "  style={{margin:"auto",width:"96%",paddingBottom:"33px"}}>
                    <div className="uk-width-1-5@m subfootergriddiv  "  style={{marginBottom:"10px"}} >
                        <ul style={{listStyle:"none"}}>
                            <li  style={{marginBottom:"6px" }}>
                                <div class="listlinksh" style={{color:"#444343",fontWeight:"700"}}>Top Bus Routes</div>
                            </li>
                            <li style={{marginBottom:"6px"}}>
                            <a class="listlinksh" href="" style={{color:"#444343"}} >
                            Hyderabad to Bangalore Bus
                                </a>
                            </li>
                            <li style={{marginBottom:"6px"}}>
                            <a class="listlinksh" href="" >
                            Bangalore to Chennai Bus
                                </a>
                            </li>
                            <li style={{marginBottom:"6px"}}>
                            <a class="listlinksh" href="" >
                            Pune to Bangalore Bus
                                 </a>
                            </li>
                            <li style={{marginBottom:"6px"}}>
                            <a class="listlinksh" href="" >
                            Mumbai to Bangalore Bus
                                </a>
                            </li>
                            <li style={{marginBottom:"6px"}}>
                            <a class="listlinksh" href="" >
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
            

            <Footer />
        </div>
        </div>

    )
}


export default KnowMoreTrackBus;