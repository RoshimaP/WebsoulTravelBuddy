import React from "react";
import './Footer.css';
import iconredbus from '../../assets/homepage/redbuswhiteicon.png'


const FooterPage = () => {
  return (
    <div className="Footer" >
     <div style={{backgroundColor:"#1a2230"}}>
  
   <br/><br/>
   <div uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: .subfooterdiv; delay: 300" >
  <div className="subfooterdiv uk-grid subfootergrid "  style={{margin:"auto",width:"96%",paddingBottom:"33px"}}>
    <div className="uk-width-1-6@m subfootergriddiv  "  style={{marginBottom:"10px"}} >
    <ul style={{listStyle:"none"}}>
             <li  style={{marginBottom:"6px" }}>
                 <div class="" style={{color:"#797979",fontWeight:"700",fontSize:"14px"}}>About Redbus</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" style={{}} >
About Us                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Contact Us                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Mobile Version                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Redbus on Mobile                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Sitemap                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Offers                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Careers                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Values                   </a>
             </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
             <div class="" style={{color:"#797979",fontWeight:"700",fontSize:"14px"}}>Info</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
T & C                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Privacy Policy                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
FAQ                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Blog                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Agent Registration                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Insurance Partner     </a>         </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
User Agreement </a>             </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
             <div class="" style={{color:"#797979",fontWeight:"700",fontSize:"14px"}}>Global Sites</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
India                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Singapore                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Malaysia                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Indonesia                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Peru                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Colombia            </a> </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
             <div class="" style={{color:"#797979",fontWeight:"700",fontSize:"14px"}}>Our Partners</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Goibibo </a>             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlinkfh" href="" >
Makemytrip                   </a>
             </li>
            
            
             
             
         </ul>
    
     </div>
     <div className="uk-width-1-3@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"20px"}}>
                 <a class="" style={{color:"#797979",fontWeight:"700"}}>
                   <img src={iconredbus} style={{height:"41px"}} />
                 </a>
             </li>
             <li style={{marginBottom:"20px"}}>
             <a class="listlink" href=""  style={{fontSize:"13px", color:"#b1babf"}}>
             redBus is the world's largest online bus ticket booking 
             service trusted by over 8 million happy 
             customers globally. redBus offers bus ticket 
             booking through its website,iOS and Android mobile 
             apps for all major routes.
  </a>
             </li>
             <li style={{marginBottom:"20px"}}>
             <a href="" class="uk-icon-button uk-margin-small-right" style={{color:"#b1babf",backgroundColor:"#1a2230",height:"47px",width:"47px",border:"1px solid #b1babf"}} uk-icon="facebook"></a>

             <a href="" class="uk-icon-button uk-margin-small-right" style={{color:"#b1babf",backgroundColor:"#1a2230",height:"47px",width:"47px",border:"1px solid #b1babf"}} uk-icon="twitter"></a>
     
             </li>
             <li style={{marginBottom:"20px"}}>
             <a class="listlink" href="" style={{fontSize:"13px",color:"#b1babf"}} >
             Ⓒ 2020 ibibogroup All rights reserved
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

export default FooterPage;