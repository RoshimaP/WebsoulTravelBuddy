import React, { Component } from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import '../cancelticket/cancelticket.css';


function cancelticket() {
    return (

    <div>



        
       <Header/>
   

        <div className="" style={{margin:"auto",height:"700px",width:"100%",backgroundColor:"#eee",fontFamily:"Montserrat"}}>
            
            <div className=" uk-flex-center " style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight: "700",lineHeight: "1.38",  color: "#3e3e52", textAlign: "center",paddingTop: "32px"}}>
                Cancel your Ticket
            </div>
        
            <div className=" uk-grid  " style={{paddingTop:"60px",margin:"auto",justifyContent:"center"}}>
                <div class="" >
   
                <div className="uk-inline" style={{}}>

                        <span class="uk-form-icon" uk-icon="icon: tag" style={{fontSize:"24px",color:"black"}}></span>

                        <input class="uk-input inputwidth" placeholder="ENTER TICKET NO"  style={{width:"330px", color:"#3e3e52",fontSize:"11px",fontWeight:"700", background:"rgb(238, 238, 238)",borderBottom:"1px solid",borderLeft:"0px",borderTop:"0px",borderRight:"0px"}} />
                        </div>
                
              
                </div>
    
   
                <div class="" >
                    <div className="uk-inline" style={{}}>
                        <span class="uk-form-icon" uk-icon="icon: mail" style={{fontSize:"24px",color:"black"}}></span>

                        <input class="uk-input inputwidth" placeholder="ENTER EMAIL" style={{width:"330px",color:"#3e3e52", fontSize:"11px",fontWeight:"700",background:"rgb(238, 238, 238)",borderBottom:"1px solid",borderLeft:"0px",borderTop:"0px",borderRight:"0px"}} />
                    </div>
                    </div>
                    </div>
          <div className="uk-grid" style={{justifyContent:"center"}}>
              <div>

              </div>
              <div>
                  
                  </div>
                  <div>
                  
                  </div>
                  <div>
                  
                  </div>
                  <div>
                  
                  </div>
                  <div>
                  
                  </div>
                  <div>
                  
                  </div>
                  <div>
                  
                  </div>
                  <div>
                  
                  </div>
                  <div>
                  
                  </div>
                  <div>
                  
                  </div>
                  <div>
                  
                  </div>
                  
             
          <div style={{ marginTop:"0px",marginLeft:"40px"}}>
                    <button class="uk-button uk-text" style={{fontSize:"14px",fontWeight:"700",textAlign:"center",fontFamily: "Montserrat",backgroundColor: "#d84e55",color: "#fff",height:"48",boxShadow: "1px 2px 3px #888888",marginLeft:"20px"}} >SELECT PASSENGERS </button>
                </div>
                 </div>
               
           
       
     </div>

      
       <Footer/>
</div>

      )
      }
      

export default cancelticket;