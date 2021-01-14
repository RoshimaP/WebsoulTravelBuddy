import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from'../../header/FixedHeader'
import Footer from'../../footer/Footer'
import slide1 from '../../../assets/bushiree/images/top.PNG';
import slide2 from '../../../assets/bushiree/images/p2.PNG';
import slide3 from '../../../assets/bushiree/images/p3.PNG';
import slide4 from '../../../assets/bushiree/images/p4.svg';
import slide5 from '../../../assets/bushiree/images/c2.svg';
import slide6 from '../../../assets/bushiree/images/c3.svg';
import slide7 from '../../../assets/bushiree/images/c4.svg';
import slide8 from '../../../assets/bushiree/images/c5.svg';
import slide9 from '../../../assets/bushiree/images/s1.svg';
import slide10 from '../../../assets/bushiree/images/t1.svg';
import slide11 from '../../../assets/bushiree/images/t2.svg';
import slide12 from '../../../assets/bushiree/images/s2.svg';
import slide13 from '../../../assets/bushiree/images/s3.svg';
import slide15 from '../../../assets/bushiree/images/j1.PNG';
import slide16 from '../../../assets/bushiree/images/j2.PNG';
import slide17 from '../../../assets/bushiree/images/j3.PNG';
import slide14 from '../../../assets/bushiree/images/wysiwyg.svg';
import slide19 from '../../../assets/bushiree/images/m1.svg';
import slide20 from '../../../assets/bushiree/images/m2.svg';
import slide21 from '../../../assets/bushiree/images/m3.svg';
import slide22 from '../../../assets/bushiree/images/m4.svg';
import slide23 from '../../../assets/bushiree/images/m5.svg';
import slide24 from '../../../assets/bushiree/images/m6.svg';
import slide26 from '../../../assets/bushiree/images/t3.svg';
import slide27 from '../../../assets/bushiree/images/t4.svg';
import slide29 from '../../../assets/bushiree/images/t5.svg';
import slide30 from '../../../assets/bushiree/images/t6.svg';
import slide31 from '../../../assets/bushiree/images/nd.PNG';
import slide32 from '../../../assets/bushiree/images/smile.PNG';
import slide33 from '../../../assets/bushiree/images/dd.PNG';
import slide34 from '../../../assets/bushiree/images/ds.PNG';
import slide35 from '../../../assets/bushiree/images/table.PNG';
import slide36 from '../../../assets/bushiree/images/p3.1.png';
import slide37 from '../../../assets/bushiree/images/p3.2.png';
import slide38 from '../../../assets/bushiree/images/p3.3.png';
import slide39 from '../../../assets/bushiree/images/l1.PNG';
import slide40 from '../../../assets/bushiree/images/l2.PNG';
import slide41 from '../../../assets/bushiree/images/l3.PNG';
import slide42 from '../../../assets/bushiree/images/l4.PNG';
import slide43 from '../../../assets/bushiree/images/l5.PNG';
import slide44 from '../../../assets/bushiree/images/l6.PNG';
import slide45 from '../../../assets/bushiree/images/l7.PNG';
import slide46 from '../../../assets/bushiree/images/l8.PNG';
import slide47 from '../../../assets/bushiree/images/l9.PNG';
import slide48 from '../../../assets/bushiree/images/l10.PNG';
import slide49 from '../../../assets/bushiree/images/l11.PNG';
import slide50 from '../../../assets/bushiree/images/l12.PNG';
import slide51 from '../../../assets/bushiree/images/l13.PNG';
import slide52 from '../../../assets/bushiree/images/l14.PNG';
import slide53 from '../../../assets/bushiree/images/right1.png';
import slide54 from '../../../assets/bushiree/images/right2.png';
import slide55 from '../../../assets/bushiree/images/right3.png';
import iconredbus from '../../../assets/homepage/redbuswhiteicon.svg';
import"../bushire/bushire.css" 
class bushire extends Component {
constructor(props){
    super(props)
    this.state ={
        button: true
      }
      
    }
    handleClick(){
      this.setState({
        button:false
      })}
    render() {
        return(
<div class="uk-width-1-1" >

<Header/>

<br/><br/>
<div class="uk-width-1-1 " id="my-id">
<img class=""   src={slide1} />


<div class=" uk-grid" style={{backgroundColor:""}}>

<div class="uk-width-1-2@l uk-width-1-1@s">

    
    {/* Book in 3 easy steps */}

    <h2 class=" uk-text-bold uk-text-Arial Black uk-visible@l" style={{marginLeft:"160px"}} ><br/>Book in 3 easy steps</h2>
 <div class="uk-container uk-child-width-1-2@l uk-child-width-1-1@s ">
 
 <h class="uk-text-large uk-text-bold uk-text-Arial Black uk-hidden@l " ><br/>Book in 3 easy steps</h>
 <div class=" uk-margin-left" style={{paddingLeft:"80px"}}>


<br/><br/>

{/* 1.large */}
<div class="uk-visible@l ">
<div class="uk-column-1-1 "  style={{ borderRadius:"10px",width:"500px",height:"200px", padding:"20px",backgroundColor:"white"}}>
<img class="" width="500px" height="200px"  style={{borderRadius:"8px"}} src={slide36}/>
</div>

<div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"500px",height:"200px", padding:"20px",backgroundColor:"white"}}>
<img class="" width="500px" height="200px"  style={{borderRadius:"8px"}} src={slide37}/>
</div>

<div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"500px",height:"200px", padding:"20px",backgroundColor:"white"}}>
<img class=""  width="500px" height="200px"  style={{borderRadius:"8px"}} src={slide38}/>
</div>
</div>
</div>
</div>

{/* 1.small */}
<div class="uk-hidden@l">
<div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"",height:"", padding:"10px",backgroundColor:"white"}}>
<img class="" width="" height=""  style={{borderRadius:"8px"}} src={slide36}/>
</div>

<div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"",height:"", padding:"10px",backgroundColor:"white"}}>
<img class="" width="" height=""  style={{borderRadius:"8px"}} src={slide37}/>
</div>

<div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"",height:"", padding:"10px",backgroundColor:"white"}}>
<img class=""  width="500px" height="200px"  style={{borderRadius:"8px"}} src={slide38}/>
</div>
</div>

{/* ------------------Book in 3 easy steps------------------- */}
<div class=" uk-margin-left  uk-container">
<h class="uk-text-large uk-text-bold uk-text-Arial Black uk-visible@l" style={{paddingLeft:"100px"}}>With Bus Hire you get</h>

{/* 2.large */}

<div class="uk-child-width-1-1@l uk-child-width-1-4@s uk-visible@l"uk-grid style={{ paddingLeft:"140px", marginBottom:"24px",boxSizing:'border-box'}}> 
 <p classname="uk-width-1-1@l ">
<div class="uk-width-1-2@l uk-width-1-1@s" uk-grid style={{width:"219px",height:"214px" }}> 
<div className="uk-width-1-1@l uk-width-1-1@s" style={{border:"1px solid lightgray", borderRadius:"10px",width:"219px",height:"214px",paddingLeft:"24px",paddingTop:"24px"}}>
<img src={slide4} width="110px" height="110px" style={{padding:"12px"}}  alt=""/><br/>
<a class="uk-text-Arial Black  " style={{color:" rgb(62, 62, 82)" , fontSize:"16px",marginTop: "38px"}}>Great Price and <br/>Great Value</a>
</div>
</div>

<div class="uk-width-1-2@l uk-width-1-1@s" uk-grid style={{border:"1px solid lightgray", borderRadius:"10px",width:"219px",height:"214px", margin:"24px"  }}> 
<div className="uk-width-1-1@l uk-width-1-1@s" style={{ borderRadius:"10px",width:"219px",height:"214px",paddingLeft:"24px",paddingTop:"24px"}}>
<img src={slide5} width="110px" height="110px" style={{padding:"12px"}}  alt=""/><br/>
<a class="uk-text-Arial Black  " style={{color:" rgb(62, 62, 82)" , fontSize:"16px",marginTop: "38px"}}>Safe and Hygenic <br/>Vehicles</a>
</div>
</div>
</p>

<p classname="uk-width-1-1@l ">
<div class="uk-width-1-2@l uk-width-1-1@s" uk-grid style={{border:"1px solid lightgray", borderRadius:"10px",width:"219px",height:"214px" , marginRight:"24px" }}> 
<div className="uk-width-1-1@l uk-width-1-1@s" style={{ borderRadius:"10px",width:"219px",height:"214px",paddingLeft:"24px",paddingTop:"24px"}}>
<img src={slide6} width="110px" height="110px" style={{padding:"12px"}}  alt=""/><br/>
<a class="uk-text-Arial Black  " style={{color:" rgb(62, 62, 82)" , fontSize:"16px",marginTop: "38px"}}>Live Track your  <br/>Journey</a>
</div>
</div>

<div class="uk-width-1-2@l uk-width-1-1@s" uk-grid style={{border:"1px solid lightgray", borderRadius:"10px",width:"219px",height:"214px", marginRight:"24px" }}> 
<div className="uk-width-1-1@l uk-width-1-1@s" style={{ borderRadius:"10px",width:"219px",height:"214px",paddingLeft:"24px",paddingTop:"24px"}}>
<img src={slide7} width="110px" height="110px" style={{padding:"12px"}}  alt=""/><br/>
<a class="uk-text-Arial Black  " style={{color:" rgb(62, 62, 82)" , fontSize:"16px",marginTop: "38px"}}>Best Customer <br/>Support </a>
</div>
</div>
</p>
<br/>
<p classname="uk-width-1-1@l " >
<div class="uk-width-1-2@l uk-width-1-1@s" uk-grid style={{border:"1px solid lightgray", borderRadius:"10px",width:"219px",height:"214px" , marginRight:"24px" }}> 
<div className="uk-width-1-1@l uk-width-1-1@s" style={{ borderRadius:"10px",width:"219px",height:"214px",paddingLeft:"24px",paddingTop:"24px"}}>
<img src={slide8} width="110px" height="110px" style={{padding:"12px"}}  alt=""/><br/>
<a class="uk-text-Arial Black  " style={{color:" rgb(62, 62, 82)" , fontSize:"16px",marginTop: "38px"}}>Live Track your  <br/>Journey</a>
</div>
</div>

<div class="uk-width-1-2@l uk-width-1-1@s" uk-grid style={{width:"219px",height:"214px" , marginRight:"24px",paddingRight:"210px" }}> </div>
</p>

</div>

{/* 2.small */}
<h class="uk-text-large uk-text-bold uk-text-Arial Black uk-hidden@l">With Bus Hire you get</h>
<div class="uk-child-width-1-1 uk-hidden@l"uk-grid style={{marginBottom:"24px",boxSizing:'border-box',marginLeft:"40px"}}> 

<div class=" uk-width-1-1 " uk-grid style={{width:"219px",height:"214px" }}> 
<div className="uk-width-1-1@l uk-width-1-1@s" style={{border:"1px solid lightgray", borderRadius:"10px",width:"219px",height:"214px",paddingLeft:"24px",paddingTop:"24px",marginTop:"24px"}}>
<img src={slide4} width="110px" height="110px" style={{padding:"12px"}}  alt=""/><br/>
<a class="uk-text-Arial Black  " style={{color:" rgb(62, 62, 82)" , fontSize:"16px",marginTop: "38px"}}>Great Price and <br/>Great Value</a>
</div>
</div>


<div class="uk-width-1-2@l uk-width-1-1@s" uk-grid style={{border:"1px solid lightgray", borderRadius:"10px",width:"219px",height:"214px" , marginRight:"24px" ,paddingTop:"24px",marginTop:"24px"}}> 
<div className="uk-width-1-1@l uk-width-1-1@s" style={{ borderRadius:"10px",width:"219px",height:"214px",paddingLeft:"24px"}}>
<img src={slide5} width="110px" height="110px" style={{padding:"12px"}}  alt=""/><br/>
<a class="uk-text-Arial Black  " style={{color:" rgb(62, 62, 82)" , fontSize:"16px",marginTop: "38px"}}>Safe and Hygenic <br/>Vehicles</a>
</div>
</div>




<div class="uk-width-1-2@l uk-width-1-1@s" uk-grid style={{border:"1px solid lightgray", borderRadius:"10px",width:"219px",height:"214px" , marginRight:"24px" ,paddingTop:"24px",marginTop:"24px"}}> 
<div className="uk-width-1-1@l uk-width-1-1@s" style={{ borderRadius:"10px",width:"219px",height:"214px",paddingLeft:"24px"}}>
<img src={slide6} width="110px" height="110px" style={{padding:"12px"}}  alt=""/><br/>
<a class="uk-text-Arial Black  " style={{color:" rgb(62, 62, 82)" , fontSize:"16px",marginTop: "38px"}}>Live Track your  <br/>Journey</a>
</div>
</div>

<div class="uk-width-1-2@l uk-width-1-1@s" uk-grid style={{border:"1px solid lightgray", borderRadius:"10px",width:"219px",height:"214px", marginRight:"24px",paddingTop:"24px",marginTop:"24px" }}> 
<div className="uk-width-1-1@l uk-width-1-1@s" style={{ borderRadius:"10px",width:"219px",height:"214px",paddingLeft:"24px"}}>
<img src={slide7} width="110px" height="110px" style={{padding:"12px"}}  alt=""/><br/>
<a class="uk-text-Arial Black  " style={{color:" rgb(62, 62, 82)" , fontSize:"16px",marginTop: "38px"}}>Best Customer <br/>Support </a>
</div>
</div>


<div class="uk-width-1-2@l uk-width-1-1@s" uk-grid style={{border:"1px solid lightgray", borderRadius:"10px",width:"219px",height:"214px" , marginRight:"24px" ,paddingTop:"24px",marginTop:"24px"}}> 
<div className="uk-width-1-1@l uk-width-1-1@s" style={{ borderRadius:"10px",width:"219px",height:"214px",paddingLeft:"24px"}}>
<img src={slide8} width="110px" height="110px" style={{padding:"12px"}}  alt=""/><br/>
<a class="uk-text-Arial Black  " style={{color:" rgb(62, 62, 82)" , fontSize:"16px",marginTop: "38px"}}>Live Track your  <br/>Journey</a>
</div>
</div>

</div>
</div>


{/* rCommut */}

{/* 3.large */}

<div class="uk-width-1-1@l uk-width-1-1@s uk-visible@l " uk-grid style={{paddingLeft:"150px", paddingBottom:"90px",paddingTop:"30px"}} >
 <div>
     <div class="uk-box-shadow-small uk-padding uk-padding-remove-top uk-padding-remove-left uk-margin-left" style={{backgroundColor:"#caeddc",height:"110px" }}>
         <div class="uk-margin-left uk-text-bold" style={{paddingTop:"10px" ,fontStyle:"normal"}}>rCommut</div>
     <div class="uk-margin-left" style={{fontSize:"14px"}}>If you are looking for employee commute<br/>solution, click know more.</div>
     <div class="uk-text-bold uk-text-right" style={{fontSize:"14px"} }> <a  class="" style={{color:"blue"}} href="#">KNOW MORE</a></div>
 </div>
 </div>
 </div> 
 


{/* 3.small */}


 <div class="uk-width-1-2@l uk-width-1-1@s uk-hidden@l" uk-grid style={{paddingLeft:"", paddingBottom:""}} >
 <div>
     <div class="uk-box-shadow-small uk-margin" style={{backgroundColor:"#caeddc" }}>
         <div class="uk-margin-left uk-text-bold" style={{paddingTop:"10px" ,fontStyle:"normal"}}>rCommut</div>
     <div class="uk-margin-left" style={{fontSize:"14px"}}>If you are looking for employee commute<br/>solution, click know more.</div>
     <div class="uk-text-bold uk-text-right" style={{fontSize:"14px"} }> <a  class="" style={{color:"blue"}} href="#">KNOW MORE</a></div>
 </div>
 </div>
 </div> 

{/* --------------------rCommut--------------------- */}



</div>



<div class="uk-width-1-2">
    


{/***sticky content */}

<div uk-sticky="bottom: #my-id; "  class=" uk-position-fixed uk-width-1-3  uk-position-right uk-position-relative uk-visible@l "  style={{height:"540px",borderRadius:"10px",position:"fixed",top:"1%",right:"12%",overflow:"scroll",background:"",overflowX:"hidden",backgroundColor:"#f0e8e6",marginTop:"3.5%"}}>
 <div class="uk-padding-small "   style={{backgroundColor:"#d84e55",width:"32%",position:"fixed",borderTopLeftRadius:"10px"}}>  
<h2 class="uk-text-bold" style={{color:"white"}}>Hire a Vehicle</h2>
</div>
<div style={{paddingLeft:"5px"}}>
<div class="uk-text-left uk-text-bold uk-margin-top" style={{paddingTop:"90px",paddingBottom:"px",fontSize:"20px",paddingLeft:"20px",color:"#3e3e52",paddingTop:"25px"}}>
    
</div>
<br/>

<div class="uk-text-left uk-text-bold uk-margin-top" style={{paddingTop:"px",paddingBottom:"10px",fontSize:"20px",paddingLeft:"20px",color:"#3e3e52",paddingTop:"25px"}}>
    Click on journey type
</div>


<div class="uk-grid uk-grid-match uk-grid-collapse journeytype " style={{}}>
    <div class=" uk-width-2-3 uk-padding-small" style={{color:"#3e3e52",fontStretch:"normal",letterSpacing:"normal",fontStyle:"normal"}}>
        <div class="uk-text-left uk-text-bold"style={{fontSize:"18px",paddingTop:"10px",paddingLeft:"5px",lineHeight:"normal"}}>Outstation</div>
        <div class="uk-text-left" style={{lineHeightStep:"1",fontSize:"12px",paddingBottom:"20px",paddingLeft:"5px"}}>Anywhere outside <br/>your city</div>
    </div>
    <div class="uk-width-1-3">
<img src={slide53} />
    </div>
</div>


<div class="uk-grid uk-grid-match uk-grid-collapse journeytype " style={{backgroundColor:"white" ,marginTop:"20px",marginLeft:"20px",marginBottom:"20px"}}>
    <div class=" uk-width-2-3 uk-padding-small" style={{color:"#3e3e52",fontStretch:"normal",letterSpacing:"normal",fontStyle:"normal"}}>
        <div class="uk-text-left uk-text-bold"style={{fontSize:"18px",paddingTop:"10px",paddingLeft:"5px",lineHeight:"normal"}}>Local</div>
        <div class="uk-text-left" style={{lineHeightStep:"1",fontSize:"12px",paddingBottom:"20px",paddingLeft:"5px"}}>Anywhere within <br/>your city </div>
    </div>
    <div class="uk-width-1-3">
<img src={slide54} />
    </div>
</div>



<div class="uk-grid uk-grid-match uk-grid-collapse journeytype " style={{backgroundColor:"white" ,marginTop:"20px",marginLeft:"20px",marginBottom:"20px"}}>
    <div class=" uk-width-2-3 uk-padding-small" style={{color:"#3e3e52",fontStretch:"normal",letterSpacing:"normal",fontStyle:"normal"}}>
        <div class="uk-text-left uk-text-bold"style={{fontSize:"18px",paddingTop:"10px",paddingLeft:"5px",lineHeight:"normal"}}>Outstation</div>
        <div class="uk-text-left" style={{lineHeightStep:"1",fontSize:"12px",paddingBottom:"20px",paddingLeft:"5px"}}>Anywhere outside <br/>your city</div>
    </div>
    <div class="uk-width-1-3">
<img src={slide55} />
    </div>
</div>


<div  class="" style={{border:"1px solid blue",backgroundColor:"#caeddc",borderRadius:"6px",marginLeft:"20px",marginBottom:"20px",paddingLeft:"12px"}}>
    <div>
     <div class="uk-box-small uk-margin" style={{backgroundColor:"#caeddc" ,borderRadius:"6px"}}>
         <div class=" uk-text-bold" style={{paddingTop:"10px" ,fontStyle:"normal",fontSize:"12px"}}>Employee Transport</div>
     <div class="" style={{fontSize:"12px"}}>Completely managed employee transport</div>
     <div class="uk-text-bold uk-text-right" style={{fontSize:"13px"} }> <a  class="" style={{color:"blue",paddingRight:"20px"}} href="#">KNOW MORE</a></div>
 </div>
 </div>
    </div>

</div>

</div>
{/***sticky content */}




</div>

{/* Easier with Bus Hire */}

<div class="uk-section uk-section-muted" style={{backgroundColor:"#dfe8f5"}}>

{/* 4.large */}

<div class="uk-container  uk-visible@l"  style={{paddingLeft:"180px"}} >
<h3 class="uk-text-large uk-text-bold uk-text-Arial Black" style={{paddingBottom:"24px"}}> Easier with Bus Hire</h3>
<ul class="uk-subnav uk-subnav-pill  "  uk-switcher="connect: .switcher-container" >
    <li class="uk-padding-remove-left" style={{border:"1px solid black" ,borderRadius:"10px",backgroundColor:"white",paddingRight:"0px",marginLeft:"40px"}} ><a href="#">Easy Payment</a></li>
    <li class="uk-padding-remove-left" style={{border:"1px solid black" ,borderRadius:"10px",backgroundColor:"white",paddingRight:"0px",marginLeft:"40px"}} ><a href="#">Easy Booking</a></li>
    <li class="uk-padding-remove-left" style={{border:"1px solid black" ,borderRadius:"10px",backgroundColor:"white",paddingRight:"0px",marginLeft:"40px"}} ><a href="#">Fare Transparency</a></li>
</ul>
<ul class="uk-switcher switcher-container uk-margin ">
    <li class="" style={{paddingRight:"700px"}}> 
    <img class="" src={slide26}/>Pay advance starting from just 15% to book the vehicle
    <br/><br/>
    <img class="" src={slide27}/>Pay the balance by Credit Card / Debit Card / UPI / Net <br/><a class="" style={{paddingLeft:"22px"}}> Banking / Cash to Driver.</a> 
    </li>
    <li class="" style={{paddingRight:"700px"}}> 
    <img class="" src={slide29}/>Hassle-free booking process
    <br/><br/>
    <img class="" src={slide30}/>24 / 7 well trained Customer Support 
    </li>
    <li class="" style={{paddingRight:"700px"}}> 
    <img class="" src={slide10}/>Get GST & Performa Invoices.
    <br/><br/>
    <img class="" src={slide11}/>No hidden charges.
    </li>
</ul>
</div>

{/* 4.small */}

<div class="uk-container uk-hidden@l "  style={{paddingLeft:"20px"}} >
<h3 class="uk-text-large uk-text-bold uk-text-Arial Black" style={{paddingBottom:"24px"}}> Easier with Bus Hire</h3>
<ul class="uk-subnav uk-subnav-pill  "  uk-switcher="connect: .switcher-container" >
    <li class="uk-padding-remove-left" style={{border:"1px solid black" ,borderRadius:"10px",backgroundColor:"white",paddingRight:"0px"}} ><a href="#">Easy<br/> Payment</a></li>
    <li class="uk-padding-remove-left" style={{border:"1px solid black" ,borderRadius:"10px",backgroundColor:"white",paddingRight:"0px",marginLeft:"20px"}} ><a href="#">Easy <br/>Booking</a></li>
    <li class="uk-padding-remove-left" style={{border:"1px solid black" ,borderRadius:"10px",backgroundColor:"white",paddingRight:"0px",marginLeft:"20px"}} ><a href="#">Fare <br/>Transparency</a></li>
</ul>
<ul class="uk-switcher switcher-container uk-margin ">
    <li class="" style={{paddingRight:""}}> 
    <img class="" src={slide26}/>Pay advance starting from just 15% to book the vehicle
    <br/><br/>
    <img class="" src={slide27}/>Pay the balance by Credit Card / Debit Card / UPI / Net <br/><a class="" style={{paddingLeft:"22px"}}> Banking / Cash to Driver.</a> 
    </li>
    <li class="" style={{paddingRight:""}}> 
    <img class="" src={slide29}/>Hassle-free booking process
    <br/><br/>
    <img class="" src={slide30}/>24 / 7 well trained Customer Support 
    </li>
    <li class="" style={{paddingRight:""}}> 
    <img class="" src={slide10}/>Get GST & Performa Invoices.
    <br/><br/>
    <img class="" src={slide11}/>No hidden charges.
    </li>
</ul>
</div>


</div>
<br/><br/>

{/* ----------------------------Easier with Bus Hire-------------------------------- */}


{/* Vehicle Types */}
 {/* 5.for large dev */}

 <div class="uk-container uk-visible@l">

 <div class="uk-container " style={{paddingLeft:"170px",paddingTop:"30px"}}>
<h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Vehicle Types</h3><br/>
<div>
<div class="uk-child-width-1-1@l uk-child-width-1-1@s" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide12} alt=""/>
         <div class="uk-overlay  uk-light uk-position-top uk-text-left uk-visible@l "style={{paddingRight:"170px",color:"black"}}>
             <p class=" uk-text-large uk-text-bold uk-text-Arial Black" style={{color:"black" }}>Buses and Mini Buses</p>
             Ideal for more than<br/>
             18 people
         </div>
         <div class="uk-overlay  uk-light uk-position-top uk-text-left uk-visible@s "style={{paddingRight:"170px",color:"black"}}>
             <p class=" uk-text-large uk-text-bold uk-text-Arial Black" style={{color:"black" }}>Buses and Mini Buses</p>
             Ideal for more than<br/>
             18 people
         </div>
     </div>
 </div>
</div>
</div>
</div>

<div class="uk-container " style={{paddingLeft:"170px",paddingTop:"30px"}}>
<div>
<div class="uk-child-width-1-1@l uk-child-width-1-1@s" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide13} alt=""/>
         <div class="uk-overlay  uk-light uk-position-top uk-text-left "style={{paddingRight:"230px",color:"black"}}>
             <p class=" uk-text-large uk-text-bold uk-text-Arial Black" style={{color:"black" }}>Tempo Travellers</p>
             Ideal for<br/>
             10-16 people
         </div>
     </div>
 </div>
</div>
</div>
</div> 


<div class="uk-container " style={{paddingLeft:"170px",paddingTop:"30px"}}>
<div>
<div class="uk-child-width-1-1@l uk-child-width-1-1@s" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide9} alt=""/>
         <div class="uk-overlay  uk-light uk-position-top uk-text-left "style={{paddingRight:"220px",color:"black"}}>
             <p class=" uk-text-large uk-text-bold uk-text-Arial Black" style={{color:"black" }}>Sedans and SUVs</p>
             Ideal for<br/>
             4-7 people
         </div>
     </div>
 </div>
</div>
</div>
</div> 
</div>

 {/*5. for small dev */}
 <div class="uk-container uk-hidden@l ">
 <h3 class="uk-text-large uk-text-bold uk-text-Arial Black" style={{paddingLeft:"20px"}}>Vehicle Types</h3>

 <div class="uk-container " >
<div>
<div class="uk-child-width-1-2@l uk-child-width-1-1@s uk-padding-small" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide12} alt=""/>
         <div class="uk-overlay  uk-light uk-position-top uk-text-left uk-padding-remove-top "style={{paddingRight:"105px",color:"black"}}>
             <p class=" uk-text-large uk-text-bold uk-text-Arial Black uk-padding-remove-bottom" style={{color:"black",fontSize:"15px",paddingTop:"15px"  }}>Buses and Mini Buses</p>
             <a class="   uk-text-Arial Black  uk-padding-remove-top" style={{color:"black",fontSize:"12px" ,paddingRight:"95px",paddingBottom:"140px" }}>Ideal for more than<br/>
             18 people</a> 
         </div>
         
     </div>
 </div>
</div>
</div>
</div> 


<div class="uk-container " >
<div>
<div class="uk-child-width-1-2@l uk-child-width-1-1@s uk-padding-small" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide13} alt=""/>
         <div class="uk-overlay  uk-light uk-position-top uk-text-left uk-padding-remove-top "style={{paddingRight:"105px",color:"black"}}>
             <p class=" uk-text-large uk-text-bold uk-text-Arial Black uk-padding-remove-bottom" style={{color:"black",fontSize:"15px",paddingTop:"15px",paddingRight:"40px"  }}>Tempo Travellers</p>
             <a class="   uk-text-Arial Black  uk-padding-remove-top" style={{color:"black",fontSize:"12px" ,paddingRight:"95px",paddingBottom:"140px" }}> Ideal for<br/>
             10-16 people</a>
         </div>
         
     </div>
 </div>
</div>
</div>
</div> 




<div class="uk-container " >
<div>
<div class="uk-child-width-1-2@l uk-child-width-1-1@s uk-padding-small" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide9} alt=""/>
         <div class="uk-overlay  uk-light uk-position-top uk-text-left uk-padding-remove-top "style={{paddingRight:"105px",color:"black"}}>
             <p class=" uk-text-large uk-text-bold uk-text-Arial Black uk-padding-remove-bottom" style={{color:"black",fontSize:"15px",paddingTop:"15px" ,paddingRight:"30px" }}>Sedans and SUVs</p>
             <a class="   uk-text-Arial Black  uk-padding-remove-top" style={{color:"black",fontSize:"12px" ,paddingRight:"95px",paddingBottom:"140px" }}> Ideal for<br/>
             4-7 people</a>
         </div>
         
     </div>
 </div>
</div>
</div>
</div> 

</div>

{/*----------------- Vehicle Types-------------------- */}


{/* What you see is what you get */}

{/* 6.large  */}

<div class="uk-container  uk-child-width-1-1 uk-visible@l"  style={{paddingLeft:"210px",paddingTop:"30px"}} >
<div class="uk-grid-match" uk-grid  style={{border:"1px solid lightgray",backgroundColor:"#f8f9fa",width:"480px"}}>
<button class="uk-button uk-button-default " type="button" uk-toggle="target: .toggle"style={{borderColor:"#f8f9fa"}}>  <img src={slide33} alt=""/></button>
<p class="toggle"></p>
<p class="toggle" style={{borderRadius:"8px",backgroundColor:"#f8f9fa"}} hidden><div> <img src={slide34}  alt=""/></div> 

</p>
</div>
</div>


{/* 6.small  */}
<br/>
<div class="uk-container  uk-child-width-1-1 uk-hidden@l"  style={{paddingLeft:"",paddingTop:""}} >
<div class="uk-grid-match" uk-grid  style={{border:"1px solid lightgray",backgroundColor:"#f8f9fa"}}>
<button class="uk-button uk-button-default" type="button" uk-toggle="target: .toggle"style={{borderColor:"#f8f9fa"}}>  <img src={slide33} alt=""/></button>
<p class="toggle"></p>
<p class="toggle" style={{borderRadius:"8px",backgroundColor:"#f8f9fa"}} hidden><div> <img src={slide34} alt=""/></div> 

</p>
</div>
</div>

{/* ----------------What you see is what you get--------------- */}

{/* Why book with Bus Hire */}

<div class="uk-container uk-child-width-1-1@l uk-child-width-1-1@s "></div>
{/* 7 .large */}

<div class="uk-visible@l ">
<h3 class="uk-text-large uk-text-bold uk-text-Arial Black"style={{paddingLeft:"170px",paddingTop:"30px"}}>Why book with<br/>
Bus Hire</h3>
<div class="uk-container " style={{paddingLeft:"170px",paddingTop:"30px"}}>
<div>
<div class="uk-child-width-1-1@l uk-child-width-1-2@s" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide15} alt=""/>
         
     </div>
 </div>
</div>
</div>
</div> 


<div class="uk-container " style={{paddingLeft:"170px",paddingTop:"30px"}}>
<div>
<div class="uk-child-width-1-1@l uk-child-width-1-2@s" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide16} alt=""/>
         
     </div>
 </div>
</div>
</div>
</div> 


<div class="uk-container " style={{paddingLeft:"170px",paddingTop:"30px"}}>
<div>
<div class="uk-child-width-1-1@l uk-child-width-1-2@s" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide17} alt=""/>
         
     </div>
 </div>
</div>
</div>
</div> 

</div> 


{/* 7.small */}

<div class="uk-hidden@l uk-padding">
<h3 class="uk-text-large uk-text-bold uk-text-Arial Black"style={{paddingLeft:"20px",paddingTop:""}}>Why book with<br/>
Bus Hire</h3>
<div class=" " style={{paddingLeft:"20px",paddingBottom:"15px"}}>
<div>
<div class="uk-child-width-1-2@l uk-child-width-1-2@s" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide15} alt=""/>
         
     </div>
 </div>
</div>
</div>
</div> 


<div class=" " style={{paddingLeft:"20px",paddingBottom:"15px"}}>
<div>
<div class="uk-child-width-1-2@l uk-child-width-1-2@s" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide16} alt=""/>
         
     </div>
 </div>
</div>
</div>
</div> 


<div class="" style={{paddingLeft:"20px",paddingBottom:"15px"}}>
<div>
<div class="uk-child-width-1-2@l uk-child-width-1-2@s" uk-grid>
 <div>
     <div class="uk-inline">
         <img src={slide17} alt=""/>
         
     </div>
 </div>
</div>
</div>
</div> 

</div>

{/* -----------Why book with Bus Hire------------- */}


{/* Safety+ */}

{/* 8.large */}


<div class=" uk-width-1-2@l uk-width-1-1@s uk-visible@l " style={{ paddingLeft:"210px",paddingBottom:"70px" ,paddingTop:"60px"}}>
<div>
<div class="uk-child-width-1-1@l uk-child-width-1-1@s " uk-grid style={{backgroundColor:"#ffe6ec", paddingTop:"14px"}}>
 <div>
     <div class="uk-inline">
    
     <div class="uk-column-1-2 ">
    <ul class="uk-list">
     
    <li>
   
     <a class="uk-width-1-5" style={{paddingTop:"14px", paddingLeft:"4px"}}><img src={slide19} alt="" /></a>
     <a class="uk-text-large uk-text-bold uk-text-Arial Black">Safety+</a>
     <br/>
     <a class="uk-text-small" style={{paddingLeft:"24px"}} >Your safety is our top priority</a> </li>

     <br/>

    <li><a class="" style={{paddingTop:"24px", paddingLeft:"4px"}}><img src={slide20} alt="" /></a>
     <a class="uk-text-small" style={{ paddingLeft:"10px"}}>Hand Sanitizers</a>
     <br/>
     <a class="uk-text-small" style={{paddingLeft:"50px"}} >in all vehicles</a></li>

    <li><a class="" style={{paddingTop:"24px", paddingLeft:"4px"}}><img src={slide22} alt="" /></a>
     <a class="uk-text-small" style={{ paddingLeft:"10px"}}> Deep cleaning</a>
     <br/>
     <a class="uk-text-small" style={{paddingLeft:"50px"}} >of vehicles</a></li>

     <li><a class="" style={{paddingTop:"24px", paddingLeft:"4px"}}><img src={slide24} alt="" /></a>
     <a class="uk-text-small" style={{ paddingLeft:"12px"}}>Regular staff body</a>
     <br/>
     <a class="uk-text-small" style={{paddingLeft:"50px"}} >temprature checks</a></li>
</ul>


<ul class="uk-list">
     
     <li>
     <a class="uk-width-2-5" style={{paddingTop:"14px", paddingLeft:"4px"}}></a>
     
      <br/>
      <a class="uk-text-small uk-text-bold uk-text-right" style={{paddingLeft:"114px" ,fontSize:"16px",color:"blue"}} href="#" >KNOW MORE</a>
      {/* <div class="uk-text-bold uk-text-right" style={{fontSize:"14px"} }> <a href="#">KNOW MORE</a></div> */}
      </li>
      <br/>  <br/>
 
     <li><a class="" style={{paddingTop:"24px", paddingLeft:"4px"}}><img src={slide21} alt="" /></a>
      <a class="uk-text-small" style={{ paddingLeft:"10px"}}>Masks worn by</a>
      <br/>
      <a class="uk-text-small" style={{paddingLeft:"50px"}} >all staff</a></li>
 
     <li><a class="" style={{paddingTop:"24px", paddingLeft:"4px"}}><img src={slide23} alt="" /></a>
      <a class="uk-text-small" style={{ paddingLeft:"10px"}}> No Blankets /</a>
      <br/>
      <a class="uk-text-small" style={{paddingLeft:"50px"}} >Linen provided</a></li>
 
 </ul>
 </div>
 </div>
 </div>

 <div>
     <div class="uk-box-shadow-small " style={{backgroundColor:"#e1f7f7" ,paddingTop:"20px",paddingRight:"6px",marginLeft:"20px",marginTop:"20px",marginRight:"20px",border:"1px solid blue"}}>
         <div class="uk-margin-left uk-text-bold" style={{paddingTop:"6px" ,fontStyle:"normal"}}>COVID-19 Travel Guidelines</div>
     <div class="uk-margin-left" style={{fontSize:"14px"}}>Check latest travel guidelines issued by<br/>State Governments</div>
     <div class="uk-text-bold uk-text-right" style={{fontSize:"14px"} }> <a style={{color:"blue"}} href="#">READ GUIDELINES</a></div>
     
 </div>
 <br/>
 </div>
</div>
</div>
<div class="" style={{paddingTop:"44px"}}>
<img src={slide31} alt="" />
</div>
</div> 

{/* 8.small */}


<div class=" uk-width-1-2@l uk-width-1-1@s uk-hidden@l  " style={{ paddingLeft:"",paddingBottom:"" ,paddingTop:""}}>
<div>
<div class="uk-child-width-1-1@l uk-child-width-1-1@s " uk-grid style={{backgroundColor:"#ffe6ec", paddingTop:"14px"}}>
 <div>
     <div class="uk-inline">
    
     <div class="uk-column-1-2 ">
    <ul class="uk-list">
     
    <li>
   
     <a class="uk-width-1-5" style={{paddingTop:"14px", paddingLeft:"4px"}}><img src={slide19} alt="" /></a>
     <a class="uk-text-large uk-text-bold uk-text-Arial Black">Safety+</a>
     <br/>
     <a class="uk-text-small uk-text-meta" style={{paddingLeft:"24px",letterSpacing:".05px"}} >Your safety is our top priority</a> </li>

     <br/>

    <li><a class="" style={{paddingTop:"24px", paddingLeft:"4px"}}><img src={slide20} alt="" /></a>
     <a class="uk-text-small" style={{ paddingLeft:"10px"}}>Hand Sanitizers</a>
     <br/>
     <a class="uk-text-small" style={{paddingLeft:"50px"}} >in all vehicles</a></li>

    <li><a class="" style={{paddingTop:"24px", paddingLeft:"4px"}}><img src={slide22} alt="" /></a>
     <a class="uk-text-small" style={{ paddingLeft:"10px"}}> Deep cleaning</a>
     <br/>
     <a class="uk-text-small" style={{paddingLeft:"50px"}} >of vehicles</a></li>

     <li><a class="" style={{paddingTop:"24px", paddingLeft:"4px"}}><img src={slide24} alt="" /></a>
     <a class="uk-text-small" style={{ paddingLeft:"12px"}}>Regular staff body</a>
     <br/>
     <a class="uk-text-small" style={{paddingLeft:"50px"}} >temprature checks</a></li>
</ul>


<ul class="uk-list">
     
     <li>
     <a class="uk-width-2-5" style={{paddingTop:"14px", paddingLeft:"4px"}}></a>
     
      <br/>
      <a class="uk-text-small uk-text-bold uk-text-right" style={{paddingLeft:"50px" ,fontSize:"",color:"blue",marginBottom:""}} href="#" >KNOW MORE</a>
      {/* <div class="uk-text-bold uk-text-right" style={{fontSize:"14px"} }> <a href="#">KNOW MORE</a></div> */}
      </li>
      <br/>  <br/>
 
     <li><a class="" style={{paddingTop:"24px", paddingLeft:"4px"}}><img src={slide21} alt="" /></a>
      <a class="uk-text-small" style={{ paddingLeft:"10px"}}>Masks worn by</a>
      <br/>
      <a class="uk-text-small" style={{paddingLeft:"50px"}} >all staff</a></li>
 
     <li><a class="" style={{paddingTop:"24px", paddingLeft:"4px"}}><img src={slide23} alt="" /></a>
      <a class="uk-text-small" style={{ paddingLeft:"10px"}}> No Blankets /</a>
      <br/>
      <a class="uk-text-small" style={{paddingLeft:"50px"}} >Linen provided</a></li>
 
 </ul>
 </div>
 </div>
 </div>

 <div>
     <div class="uk-box-shadow-small " style={{backgroundColor:"#e1f7f7" ,paddingTop:"20px",paddingRight:"80px",marginLeft:"20px",marginTop:"20px",marginRight:"20px",border:"1px solid blue"}}>
         <div class="uk-margin-left uk-text-bold" style={{paddingTop:"6px" ,fontStyle:"normal"}}>COVID-19 Travel Guidelines</div>
     <div class="uk-margin-left" style={{fontSize:"14px",color:"blue"}}>Check latest travel guidelines issued by<br/>State Governments</div>
     <div class="uk-text-bold uk-text-right" style={{fontSize:"14px"} }> <a style={{color:"blue"}} href="#">READ GUIDELINES</a></div>
     
 </div>
 <br/>
 </div>
</div>
</div>
<div class="" style={{paddingTop:"44px"}}>
<img src={slide31} alt="" />
</div>
</div> 

{/* -------------------Safety+---------------------- */}






</div>

{/* Customer Reviews */}

<div class="uk-section" style={{backgroundColor:"#dfe8f5"}}>

{/* 9.large */}
<div class="uk-visible@l">
<div class="uk-container  "  style={{paddingLeft:"180px"}} >
<h3 class="uk-text-large uk-text-bold uk-text-Arial Black" style={{paddingBottom:"24px"}}> Customer Reviews</h3>
    <div class="uk-column-1-1 "  style={{ borderRadius:"10px",width:"468px",height:"183px", padding:"20px",backgroundColor:"white"}}>
    <a >Very cooperative and good service."</a><br/><br/>
    <hr></hr>
    <div class="ui divider"></div>
    <div class="uk-panel">
       <img class="uk-align-left uk-margin-remove-adjacent"  width="50" height="50" src={slide32} alt=""/>
       <a class=" uk-text-bold" style={{ fontStyle:"normal" }}>prashant</a><br/>
       <a>Travelled to Kurukshetra on 29 Nov 2020 with 16</a>
       <a class="" style={{ paddingBottom:"0px"}}>  People for a wedding.</a>
    </div>
    </div>


<br/>

    <div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"468px",height:"183px", padding:"20px",backgroundColor:"white"}}>
    <a >"Driver was very professional."</a><br/><br/>
    <hr></hr>
    <div class="ui divider"></div>
    <div class="uk-panel">
       <img class="uk-align-left uk-margin-remove-adjacent"  width="50" height="50" src={slide32} alt=""/>
       <a class=" uk-text-bold" style={{ fontStyle:"normal" }}>Spoorthi Subramanya</a><br/>
       <a>Travelled to Talikoti on 01 Dec 2020 with 27 People for </a>
       <a class="" style={{ paddingBottom:"0px"}}> a wedding.</a>
    </div>
    </div>

<br/>
    
    <div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"468px",height:"183px", padding:"20px",backgroundColor:"white"}}>
    <a >"Journey with Jogulamba travels was good and comfortable."</a><br/><br/>
    <hr></hr>
    <div class="ui divider"></div>
    <div class="uk-panel">
       <img class="uk-align-left uk-margin-remove-adjacent"  width="50" height="50" src={slide32} alt=""/>
       <a class=" uk-text-bold" style={{ fontStyle:"normal" }}>srujan</a><br/>
       <a>Travelled to Zaheerabad on 30 Nov 2020 with 28 </a>
       <a class="" style={{ paddingBottom:"0px"}}> People for a wedding.</a>
    </div>
    </div>

<br/>
   
    <div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"468px",height:"183px", padding:"20px",backgroundColor:"white"}}>
    <a >"The driver was on time and driving was safe."</a><br/><br/>
    <hr></hr>
    <div class="ui divider"></div>
    <div class="uk-panel">
       <img class="uk-align-left uk-margin-remove-adjacent"  width="50" height="50" src={slide32} alt=""/>
       <a class=" uk-text-bold" style={{ fontStyle:"normal" }}>Blessed Joshua a</a><br/>
       <a>Travelled to Neyveli T.S on 29 Nov 2020 with 18 People</a>
       <a class="" style={{ paddingBottom:"0px"}}>  for a wedding.</a>
    </div>
    </div>
    </div>
    </div>


{/* 9.small */}
<div class="uk-hidden@l">
<div class="uk-container  "  style={{paddingLeft:""}} >
<h3 class="uk-text-large uk-text-bold uk-text-Arial Black" style={{paddingBottom:""}}> Customer Reviews</h3>



<div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"325px",height:"195px", padding:"20px",backgroundColor:"white",paddingRight:""}}>
<a >Very cooperative and good service."</a><br/>
<hr></hr>
<div class="ui divider"></div>
<div class="uk-panel">
   <img class="uk-align-left uk-margin-remove-adjacent"  width="50" height="50" src={slide32} alt=""/>
   <a class=" uk-text-bold" style={{ fontStyle:"normal" }}>prashant</a><br/>
   <a>Travelled to Kurukshetra on 29 Nov 2020 with 16</a>
   <a class="" style={{ paddingBottom:"0px"}}>  People for a wedding.</a>
</div>
</div>


<br/>

<div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"325px",height:"195px", padding:"20px",backgroundColor:"white"}}>
<a >"Driver was very professional."</a><br/>
<hr></hr>
<div class="ui divider"></div>
<div class="uk-panel">
   <img class="uk-align-left uk-margin-remove-adjacent"  width="50" height="50" src={slide32} alt=""/>
   <a class=" uk-text-bold" style={{ fontStyle:"normal" }}>Spoorthi Subramanya</a><br/>
   <a>Travelled to Talikoti on 01 Dec 2020 with 27 People for </a>
   <a class="" style={{ paddingBottom:"0px"}}> a wedding.</a>
</div>
</div>

<br/>

<div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"325px",height:"195x", padding:"20px",backgroundColor:"white"}}>
<a >"Journey with Jogulamba travels was good and comfortable."</a><br/>
<hr></hr>
<div class="ui divider"></div>
<div class="uk-panel">
   <img class="uk-align-left uk-margin-remove-adjacent"  width="50" height="50" src={slide32} alt=""/>
   <a class=" uk-text-bold" style={{ fontStyle:"normal" }}>srujan</a><br/>
   <a>Travelled to Zaheerabad on 30 Nov 2020 with 28 </a>
   <a class="" style={{ paddingBottom:"0px"}}> People for a wedding.</a>
</div>
</div>

<br/>

<div class="uk-column-1-1"  style={{ borderRadius:"10px",width:"325px",height:"195px", padding:"20px",backgroundColor:"white"}}>
<a >"The driver was on time and driving was safe."</a><br/>
<hr></hr>
<div class="ui divider"></div>
<div class="uk-panel">
   <img class="uk-align-left uk-margin-remove-adjacent"  width="50" height="50" src={slide32} alt=""/>
   <a class=" uk-text-bold" style={{ fontStyle:"normal" }}>Blessed Joshua a</a><br/>
   <a>Travelled to Neyveli T.S on 29 Nov 2020 with 18 People</a>
   <a class="" style={{ paddingBottom:"0px"}}>  for a wedding.</a>
</div>
</div>

</div>

</div>
</div>

{/* -----------------Customer Reviews------------------- */}




{/* FAQs */}


{/* large */}

<div class="uk-margin-xlarge-left uk-visible@l " style={{marginRight:"180px"}}>

<h2 class="uk-text-bold" style={{fontSize:"32px",fontFamily:"Montserrat",color:"#3e3e52",marginBottom:"24px",marginTop:"70px",paddingLeft:"20px"}}>FAQs</h2>

<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse   " type="button" uk-toggle="target: .toggle1"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="uk-align-left uk-margin-small-left"> What is redBus Hire?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle1" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
redBus Hire helps you rent a vehicle from the best operators in your city.
</p>
</div>




<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle2"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="uk-align-left uk-margin-small-left"> How does it work?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle2" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
We ask you a few simple questions regarding your trip. We work with the best operators 
in your city to get you detailed quotations, so that you get the best deal.
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle3"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="uk-align-left uk-margin-small-left"> Which cities are you operational in?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle3" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
We are currently operational in Bangalore, Mumbai, Pune, Chennai, Hyderabad, Delhi, Ahmedabad, 
Madurai, Mysore, Visakhapatnam, Surat, Vadodara, Vijayawada, Coimbatore, Goa, Pondicherry, 
Erode, Ooty, Udaipur, Jaipur, Guwahati, Trichy and Kolkata.
</p>
</div>




<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle4"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="uk-align-left uk-margin-small-left">What happens if the vehicle breaks down?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle4" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
Since we work with the best operators, the vehicles are usually reliable. In case of a breakdown, 
it is the operator's responsibility to replace the vehicle during the journey.
</p>
</div>




<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse  " type="button" uk-toggle="target: .toggle5"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="uk-align-left uk-margin-small-left">How are the Kilometers calculated?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle5" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
The 'Kilometers' are calculated basis the return trip distance between the boarding 
point and the destination. Any additional distance covered within the city between
 the Garage and the pickup point is also included in it.
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle6"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=" "> Whom do I contact if I have additional questions?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle6" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
You can write to us at bushire@redbus.in. Alternately, you can request a call back by clicking on the 
'Request a Callback' button on any of the quotes you've received.
 One of our customer service executives will reach out to you.
</p>
</div>


<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle7"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="uk-align-left uk-margin-small-left"> What are the payment terms?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle7" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
You can confirm your reservation by paying a small booking fee, typically equal to
 25% of the base fare. The balance can be paid directly to us through online modes till two days
  before the start of the journey or to the operator in cash at the time of boarding.
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle8"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="uk-align-left uk-margin-small-left"> What if I need to cancel my trip?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle8" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
Cancellation policy is specific to each operator and is listed
 against the quotes on the quotations page
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid  uk-grid-collapse" type="button" uk-toggle="target: .toggle9"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%" }}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="uk-align-left uk-margin-small-left"> How are toll & taxes calculated?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle9" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
Tolls and Interstate taxes are best estimates only. 
If these amounts are included in the fare, you'll be charged/reimbursed for any difference 
between the actuals and estimations, as applicable.
</p>
</div>


<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle10"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right "style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> What are the benefits of booking or renting a vehicle with redBus?
 </a>
</div>
</button>
</div>
</div>
<p class="toggle10" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
redBus is among the leading online booking services and for a good reason. 
It provides its customers with a plethora of options to choose from when it comes to operators, 
bus types, amenities, etc. and collaborates with the top travel agencies in the country.
Travellers can choose between a bus with air conditioning and a non-air conditioned bus.
The buses offer comfortable seating which boosts passenger 
age inclusivity and may also contain amenities like a mini-refrigerator or icebox.
</p>
</div>


<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse" type="button" uk-toggle="target: .toggle11"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="">What are the COVID-19 measures being taken with redBus?
 </a>
</div>
</button>
</div>
</div>
<p class="toggle11" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
redBus, in light of the recent rapid spread of COVID-19, has introduced a new move which they call Safety+.
Under Safety+, all buses are required to adhere to certain strict rules and guidelines.
Some of these include regular and strict temperature checks along with advisories,
making the use of masks mandatory for all employees as well as passengers,
and sanitisers must be provided before boarding and present on all buses at all times.
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse" type="button" uk-toggle="target: .toggle12"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> How long is redBus Bus Hire customer care available?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle12" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
redBus customer care is available at all hours, that is, 24/7. 
The customer care staff are friendly and can be 
asked about any redBus bus hire questions without hesitation..
</p>
</div>


<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse" type="button" uk-toggle="target: .toggle13"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> What are the things I would need to know before booking a 
12-seater AC minibus with redBus?
 </a>
</div>
</button>
</div>
</div>
<p class="toggle13" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
The average price for a 12-seater AC minibus with redBus is just a little more than 15 rupees per km.
The driver fee for the same would come up to about 300 rupees.
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse" type="button" uk-toggle="target: .toggle14"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="">Will there be blankets and linens provided in a complementary 
fashion aboard the Vehicle with redBus??
 </a>
</div>
</button>
</div>
</div>
<p class="toggle14" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
For the time being, due to the current situation created by the pandemic, 
redBus will not be allowing the provision of blankets and various other cover-ups. 
This measure falls under the Safety+ guidelines.
</p>
</div>






</div>






{/* small */}

<div class="uk-hidden@l ">
<h2 class="uk-text-bold" style={{fontSize:"32px",fontFamily:"Montserrat",color:"#3e3e52",marginBottom:"24px",marginTop:"50px",paddingLeft:"20px"}}>FAQs</h2>

<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse   " type="button" uk-toggle="target: .toggle1"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> What is redBus Hire?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle1" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
redBus Hire helps you rent a vehicle from the best operators in your city.
</p>
</div>




<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle2"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> How does it work?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle2" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
We ask you a few simple questions regarding your trip. We work with the best operators 
in your city to get you detailed quotations, so that you get the best deal.
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle3"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> Which cities are you operational in?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle3" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
We are currently operational in Bangalore, Mumbai, Pune, Chennai, Hyderabad, Delhi, Ahmedabad, 
Madurai, Mysore, Visakhapatnam, Surat, Vadodara, Vijayawada, Coimbatore, Goa, Pondicherry, 
Erode, Ooty, Udaipur, Jaipur, Guwahati, Trichy and Kolkata.
</p>
</div>




<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle4"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="">What happens if the vehicle breaks down?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle4" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
Since we work with the best operators, the vehicles are usually reliable. In case of a breakdown, 
it is the operator's responsibility to replace the vehicle during the journey.
</p>
</div>




<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse  " type="button" uk-toggle="target: .toggle5"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="">How are the Kilometers calculated?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle5" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
The 'Kilometers' are calculated basis the return trip distance between the boarding 
point and the destination. Any additional distance covered within the city between
 the Garage and the pickup point is also included in it.
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle6"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> Whom do I contact if I have additional questions?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle6" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
You can write to us at bushire@redbus.in. Alternately, you can request a call back by clicking on the 
'Request a Callback' button on any of the quotes you've received.
 One of our customer service executives will reach out to you.
</p>
</div>


<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle7"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> What are the payment terms?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle7" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
You can confirm your reservation by paying a small booking fee, typically equal to
 25% of the base fare. The balance can be paid directly to us through online modes till two days
  before the start of the journey or to the operator in cash at the time of boarding.
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle8"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> What if I need to cancel my trip?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle8" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
Cancellation policy is specific to each operator and is listed
 against the quotes on the quotations page
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid  uk-grid-collapse" type="button" uk-toggle="target: .toggle9"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%" }}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> How are toll & taxes calculated?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle9" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
Tolls and Interstate taxes are best estimates only. 
If these amounts are included in the fare, you'll be charged/reimbursed for any difference 
between the actuals and estimations, as applicable.
</p>
</div>


<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse " type="button" uk-toggle="target: .toggle10"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> What are the benefits of booking or renting a vehicle with redBus?
 </a>
</div>
</button>
</div>
</div>
<p class="toggle10" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
redBus is among the leading online booking services and for a good reason. 
It provides its customers with a plethora of options to choose from when it comes to operators, 
bus types, amenities, etc. and collaborates with the top travel agencies in the country.
Travellers can choose between a bus with air conditioning and a non-air conditioned bus.
The buses offer comfortable seating which boosts passenger 
age inclusivity and may also contain amenities like a mini-refrigerator or icebox.
</p>
</div>


<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse" type="button" uk-toggle="target: .toggle11"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="">What are the COVID-19 measures being taken with redBus?
 </a>
</div>
</button>
</div>
</div>
<p class="toggle11" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
redBus, in light of the recent rapid spread of COVID-19, has introduced a new move which they call Safety+.
Under Safety+, all buses are required to adhere to certain strict rules and guidelines.
Some of these include regular and strict temperature checks along with advisories,
making the use of masks mandatory for all employees as well as passengers,
and sanitisers must be provided before boarding and present on all buses at all times.
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse" type="button" uk-toggle="target: .toggle12"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> How long is redBus Bus Hire customer care available?

 </a>
</div>
</button>
</div>
</div>
<p class="toggle12" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
redBus customer care is available at all hours, that is, 24/7. 
The customer care staff are friendly and can be 
asked about any redBus bus hire questions without hesitation..
</p>
</div>


<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse" type="button" uk-toggle="target: .toggle13"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class=""> What are the things I would need to know before booking a 
12-seater AC minibus with redBus?
 </a>
</div>
</button>
</div>
</div>
<p class="toggle13" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
The average price for a 12-seater AC minibus with redBus is just a little more than 15 rupees per km.
The driver fee for the same would come up to about 300 rupees.
</p>
</div>



<div class="uk-container  uk-child-width-1-2@l  uk-child-width-1-1@s uk-padding-small " style={{paddingBottom:"20px"}}  >
<div class=" "  style={{border:"1px solid black",borderRadius:"6px"}}>
<div class="  uk-grid-match uk-grid-collapse  " style={{fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"10px"}}>
<button class="uk-button uk-button-default uk-text-capitalize uk-child-width-1-2 uk-grid uk-grid-collapse" type="button" uk-toggle="target: .toggle14"style={{borderColor:"#f8f9fa",lineHeight:"15px",paddingTop:"5px",width:"100%"}}>
<div class=" " style={{width:"95%",borderRightColor:"white"}}>
<a class="uk-align-right"style={{width:"5%",borderLeftColor:"white"}}uk-icon="icon: chevron-down"></a>
<a class="">Will there be blankets and linens provided in a complementary 
fashion aboard the Vehicle with redBus??
 </a>
</div>
</button>
</div>
</div>
<p class="toggle14" style={{borderRadius:"8px",border:"1px solid blue",backgroundColor:"white",fontWeight:"500",fontFamily:"Montserrat",color:"#3e3e52",fontSize:"14px",borderColor:"blue",padding:"20px",borderTopColor:"white",lineHeight:"15px"}} hidden>
For the time being, due to the current situation created by the pandemic, 
redBus will not be allowing the provision of blankets and various other cover-ups. 
This measure falls under the Safety+ guidelines.
</p>
</div>





</div>

{/* --------------FAQs--------------- */}



{/* Join Bus Hire as an operator */}

<div class="child-width-1-2@l child-width-1-1@s">

{/* 10.large */}



<div class="uk-visible@l"  style={{paddingLeft:"170px",paddingTop:"30px"}}>
<h3 class="uk-text-large uk-text-bold uk-text-Arial Black"style={{paddingLeft:"",paddingTop:""}}>Join Bus Hire as an operator</h3>

<a class="" style={{ paddingBottom:"0px"}}>  If you are an operator who is in the hire/rental business <br/> and would like to be on boarded on redBus.</a>
<br/>
<button class="uk-button uk-button-default uk-text-lowercase" style={{ marginTop:"20px",backgroundColor:"#f2eeed",border:"1px solid black",height:"34px"}}>become an operator</button>
<br/><br/>
<h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Pricing</h3>
<ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
     
    <li>
    
     <a class="">By booking your vehicle via redBus, you knock out middlemen     
     <br/> charges, and charges associated with bookings made in advance.    
     <br/> redBus also provides packages for tourists in cities where the      
     <br/>service is available.</a>
     <br/><br/>
     <a class="">Charges for vehicles depend on the city in which they are hired.
     <br/> Starting base prices are mentioned below:</a>
     </li>
     <li>
     <img class="" src={slide35}/>

     </li>
     </ul>




     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Hire us whenever</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
     
    <li>
    
     <a class="">The buses can be hired not only for tourism, but also for leisure<br/>
      activities like picnics, field trips, excursions, and formal <br/>
      requirements like corporate events, meetings, weddings, and <br/>
      more..</a>
     <br/><br/>
      <a class="">No matter whether you want to hire/rent a vehicle for a whole day<br/>
       or just a few hours, we will meet your needs. Bus for hire is now<br/>
       one click away. We also ensure extra comfort, luxurious and <br/>
       hassle-free experience, and of course, a punctual and expert<br/>
       service</a>
     </li>
     </ul>



     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Hiring/Renting A Bus with redBus</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
    <li>
    
     <a class="">redBus understands that comfort and enjoyment are important <br/>
        while travelling. Therefore, we have collaborated with some of the<br/>
        finest travel agencies in India to render a perfect trip to our<br/>
        customers. The passengers can opt for air conditioned or non-air <br/>
        conditioned buses. The buses also have push back and recliner<br/>
        seats making it possible for the elderly to travel. Buses are also <br/>
        equipped with LCD TV and DVD player for your entertainment. <br/>
        Buses may also come equipped with mini-refrigerators and ice <br/>
        boxes for refreshment. Facilities like comfy blankets, and <br/>
        charging ports are also available in buses.</a>
     <br/><br/>
      <a class="">
       You can also book a sleeper coach bus with redBus. For long-<br/>
       distance night travel, travelling in a sleeper bus is the best option.<br/>
       Sleeper bus booking is possible online with redBus Bus Hire.</a>
     </li>
     </ul>



     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Holiday with redBus</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
    <li>
    
     <a class="">Vacations are best enjoyed in groups. If you are going on a trip <br/>
     with your group, hiring/renting a bus is a good option. You can <br/>
     hire a bus from redBus for your group holiday. redBus offers<br/>
     trustworthy travel services of classic experience and quality.<br/>
     redBus considers the emotions and needs of its passengers and<br/>
     delivers customer-oriented services. You can hire/rent a bus from <br/>
     redBus via our website or app.</a>
     <br/><br/>
     <a class="">redBus has a variety of buses with seating capacities ranging<br/>
     from 30 to 50, and tempo travellers with seating capacities<br/>
     ranging from 9 to 50. Booking of buses and tempo travellers is<br/>
     moderately priced, keeping the needs of the users in mind.</a>
     </li>
     </ul>



     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Benefits of Bus Hire</h3>
     <ul class="uk-list " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
     
    <li>
        <a>Here is what you get when you rent a bus with redBus.</a>
    <br/><br/>
     <a class="">With the roomy interiors in our buses, you get enough space to<br/>
     relax so that you do not get feel suffocated. It is relatively cost-<br/>
     effective to rent a bus from redBus All the buses we onboard are<br/>
     verified. redBus checks the quality of each vehicle onboard before <br/>
     sending them to customers. You can pay only 25% to make a<br/>
     booking and pay the balance at the time of boarding the vehicle<br/>
     Vehicle can be tracked via GPS. Drivers have an app which allows<br/>
     high quality tracking. Customer support is provided to make a<br/> 
     booking as well as during your journey. Our support centers are<br/>
     open 24/7 and 365 days a year.
     </a>

     <br/><br/>

      <a class="">redBus works closely with the best bus service providers in the<br/>
       country. All you need to do is to answer a few simple questions<br/>
       about your trip. Once you fill up the form, you get detailed<br/>
       quotations from some of the best bus operators of your city of <br/>
       travel.</a>
     </li>
     </ul>




     
     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Booking Buses Online with redBus</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
    <li>
    
     <a class="">redBus has identified the public’s love of travel and has made the<br/>
      renting/hiring of buses and tempo travellers easy. We hold almost <br/>
      10,000 buses, covering almost 60,000 routes throughout India<br/>
      equipped with a 24 hour tracking device, all available for booking<br/>
      online.</a>
     <br/><br/>
      <a class="">You can rent, hire, or book buses online though our official<br/>
       website or by downloading our app on your mobile phones.
</a>

       <br/><br/>
      <a class="">All you have to do is enter your reason for hiring, your starting<br/>
        point, and your place of destination. Following this, you are<br/>
        required to enter the type of vehicle you prefer with the number <br/>
        of travellers. No booking cost is levied at the time of payment.</a>
     </li>
     </ul>




     
     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Hire/Rent a bus online only with<br/> redBus</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
     
    <li>
    
     <a class="">India has some of the exemplary architectural wonders such as<br/>
      Qutb Minar, India Gate, Red Fort, and Lotus Temple in Delhi and <br/>
      Charminar, and Hussain Sagar in Hyderabad. There is so much to <br/>
      explore in Incredible India. Visit the amazing wonders in the<br/>
      country while holidaying in any of the touristic cities by<br/>
      hiring/renting a bus online with redBus.</a>



     <br/><br/>
      <a class="">Touring in a country where cities have confusing streets and <br/>
     growing traffic can be difficult. Hiring/renting a vehicle with<br/>
     redBus ensures that you and your group have a comfortable<br/>
     travel.</a>
     </li>
     </ul>



     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Things to know about Bus Hire</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
     
    <li>
    
     <a class="">redBus is amongst the list of renowned online bus booking<br/>
        websites. It has earned its place among the best due to its ability<br/>
        to cater to every customer’s specific travel needs while also <br/>
        providing them with nothing but the best travel experience. In<br/>
        doing so, they provide their customers with a plethora of bus<br/>
        booking options. It works with only the best operators and <br/>  
        ensures that only the most experienced drivers drive buses.<br/>
        redBus makes booking an ordinary vehicle, such as a tempo<br/>
        traveller or minibus, for a group vacation much more comfortable<br/>
        and more accessible. redBus offers customers with air-<br/>                 
        conditioned as well as non-air-conditioned buses to choose from<br/>
        and book. It also provides sleeper buses that operate at night.<br/>
        redBus bus hire and redBus bus rental can be done either<br/>
        through the use of the official website or the easy to download <br/>
        redBus application.</a>
     <br/><br/>
      <a class="">NredBus has been making sure to take care of all its customer’s<br/>
         health and also play a role in curbing the further spread of<br/>
         COVID-19. In a bid to do just this, redBus has come out with an<br/>
         initiative called Safety+ under which there are specific preventive <br/>
         guidelines all buses must adhere to. Some of these are as follows:</a>
     </li>
    
     <ul class="uk-list uk-list-bullet " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
    <li>Passengers, as well as staff and employees, are strictly <br/>required to wear masks at all times</li>
    <li>Suspension of the complimentary provision of cover-ups <br/>temporarily to prevent contact spread</li>
    <li>Mandatory requirement of sanitisers and disinfectants</li>
    <li>Deep and thorough sanitation of all vehicles</li>
</ul>


<br/>

<h3 class="uk-text-large uk-text-bold uk-text-Arial Black">While booking a bus online, one<br/> must keep in mind specific tips. <br/>These are listed as follows:</h3>
</ul>
     <ul class="uk-list uk-list-bullet " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
    <li>It is essential to make sure that the online bus booking<br/>
     service that you choose is reliable and trustworthy like <br/>redBus.</li>
    <li>Look to see if the online bus booking service of your choice<br/>
     meets all your expectations and services all your specific<br/>
     travel needs. redBus, through the provision of the filters<br/>
     option, allows its passengers to curate a trip by following <br/>
     their travel needs.</li>
    <li>Make sure to carry a sanitiser and mask to all the locations <br/>
     you are visiting.</li>
</ul>


</div>







{/* 10.small */}

<div class="uk-hidden@l"  style={{padding:"20px",paddingTop:""}}>
<h3 class="uk-text-large uk-text-bold uk-text-Arial Black"style={{paddingLeft:"",paddingTop:""}}>Join Bus Hire as an operator</h3>

<a class="" style={{ paddingBottom:"0px"}}>  If you are an operator who is in the hire/rental business <br/> and would like to be on boarded on redBus.</a>
<br/>
<button class="uk-button uk-button-default uk-text-lowercase" style={{ marginTop:"20px",backgroundColor:"#f2eeed",border:"1px solid black",height:"34px"}}>become an operator</button>
<br/><br/>
<h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Pricing</h3>
<ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
     
    <li>
    
     <a class="">By booking your vehicle via redBus, you knock out middlemen     
      charges, and charges associated with bookings made in advance.    
      redBus also provides packages for tourists in cities where the      
      service is available.</a>
     <br/><br/>
     <a class="">Charges for vehicles depend on the city in which they are hired.
      Starting base prices are mentioned below:</a>
     </li>
     <li>
     <img class="" src={slide35}/>

     </li>
     </ul>




     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Hire us whenever</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
     
    <li>
    
     <a class="">The buses can be hired not only for tourism, but also for leisure
      activities like picnics, field trips, excursions, and formal 
      requirements like corporate events, meetings, weddings, and 
      more..</a>
     <br/><br/>
      <a class="">No matter whether you want to hire/rent a vehicle for a whole day
       or just a few hours, we will meet your needs. Bus for hire is now
       one click away. We also ensure extra comfort, luxurious and 
       hassle-free experience, and of course, a punctual and expert
       service</a>
     </li>
     </ul>



     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Hiring/Renting A Bus with redBus</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
    <li>
    
     <a class="">redBus understands that comfort and enjoyment are important 
        while travelling. Therefore, we have collaborated with some of the
        finest travel agencies in India to render a perfect trip to our
        customers. The passengers can opt for air conditioned or non-air 
        conditioned buses. The buses also have push back and recliner
        seats making it possible for the elderly to travel. Buses are also 
        equipped with LCD TV and DVD player for your entertainment. 
        Buses may also come equipped with mini-refrigerators and ice 
        boxes for refreshment. Facilities like comfy blankets, and 
        charging ports are also available in buses.</a>
     <br/><br/>
      <a class="">
       You can also book a sleeper coach bus with redBus. For long-
       distance night travel, travelling in a sleeper bus is the best option.
       Sleeper bus booking is possible online with redBus Bus Hire.</a>
     </li>
     </ul>



     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Holiday with redBus</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
    <li>
    
     <a class="">Vacations are best enjoyed in groups. If you are going on a trip 
     with your group, hiring/renting a bus is a good option. You can 
     hire a bus from redBus for your group holiday. redBus offers
     trustworthy travel services of classic experience and quality.
     redBus considers the emotions and needs of its passengers and
     delivers customer-oriented services. You can hire/rent a bus from 
     redBus via our website or app.</a>
     <br/><br/>
     <a class="">redBus has a variety of buses with seating capacities ranging
     from 30 to 50, and tempo travellers with seating capacities
     ranging from 9 to 50. Booking of buses and tempo travellers is
     moderately priced, keeping the needs of the users in mind.</a>
     </li>
     </ul>



     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Benefits of Bus Hire</h3>
     <ul class="uk-list " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
     
    <li>
        <a>Here is what you get when you rent a bus with redBus.</a>
    <br/><br/>
     <a class="">With the roomy interiors in our buses, you get enough space to
     relax so that you do not get feel suffocated. It is relatively cost-
     effective to rent a bus from redBus All the buses we onboard are
     verified. redBus checks the quality of each vehicle onboard before 
     sending them to customers. You can pay only 25% to make a
     booking and pay the balance at the time of boarding the vehicle
     Vehicle can be tracked via GPS. Drivers have an app which allows
     high quality tracking. Customer support is provided to make a
     booking as well as during your journey. Our support centers are
     open 24/7 and 365 days a year.
     </a>

     <br/><br/>

      <a class="">redBus works closely with the best bus service providers in the
       country. All you need to do is to answer a few simple questions
       about your trip. Once you fill up the form, you get detailed
       quotations from some of the best bus operators of your city of 
       travel.</a>
     </li>
     </ul>




     
     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Booking Buses Online with redBus</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
    <li>
    
     <a class="">redBus has identified the public’s love of travel and has made the
      renting/hiring of buses and tempo travellers easy. We hold almost 
      10,000 buses, covering almost 60,000 routes throughout India
      equipped with a 24 hour tracking device, all available for booking
      online.</a>
     <br/><br/>
      <a class="">You can rent, hire, or book buses online though our official
       website or by downloading our app on your mobile phones.
</a>

       <br/><br/>
      <a class="">All you have to do is enter your reason for hiring, your starting
        point, and your place of destination. Following this, you are
        required to enter the type of vehicle you prefer with the number 
        of travellers. No booking cost is levied at the time of payment.</a>
     </li>
     </ul>




     
     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Hire/Rent a bus online only with<br/> redBus</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
     
    <li>
    
     <a class="">India has some of the exemplary architectural wonders such as
      Qutb Minar, India Gate, Red Fort, and Lotus Temple in Delhi and 
      Charminar, and Hussain Sagar in Hyderabad. There is so much to 
      explore in Incredible India. Visit the amazing wonders in the
      country while holidaying in any of the touristic cities by
      hiring/renting a bus online with redBus.</a>



     <br/><br/>
      <a class="">Touring in a country where cities have confusing streets and 
     growing traffic can be difficult. Hiring/renting a vehicle with
     redBus ensures that you and your group have a comfortable
     travel.</a>
     </li>
     </ul>



     <h3 class="uk-text-large uk-text-bold uk-text-Arial Black">Things to know about Bus Hire</h3>
     <ul class="uk-list  " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
     
    <li>
    
     <a class="">redBus is amongst the list of renowned online bus booking
        websites. It has earned its place among the best due to its ability
        to cater to every customer’s specific travel needs while also 
        providing them with nothing but the best travel experience. In
        doing so, they provide their customers with a plethora of bus
        booking options. It works with only the best operators and 
        ensures that only the most experienced drivers drive buses.
        redBus makes booking an ordinary vehicle, such as a tempo
        traveller or minibus, for a group vacation much more comfortable
        and more accessible. redBus offers customers with air-               
        conditioned as well as non-air-conditioned buses to choose from
        and book. It also provides sleeper buses that operate at night.
        redBus bus hire and redBus bus rental can be done either
        through the use of the official website or the easy to download 
        redBus application.</a>
     <br/><br/>
      <a class="">NredBus has been making sure to take care of all its customer’s
         health and also play a role in curbing the further spread of
         COVID-19. In a bid to do just this, redBus has come out with an
         initiative called Safety+ under which there are specific preventive 
         guidelines all buses must adhere to. Some of these are as follows:</a>
     </li>
    
     <ul class="uk-list uk-list-bullet " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
    <li>Passengers, as well as staff and employees, are strictly required to wear masks at all times</li>
    <li>Suspension of the complimentary provision of cover-ups temporarily to prevent contact spread</li>
    <li>Mandatory requirement of sanitisers and disinfectants</li>
    <li>Deep and thorough sanitation of all vehicles</li>
</ul>


<br/>

<h3 class="uk-text-large uk-text-bold uk-text-Arial Black">While booking a bus online, one<br/> must keep in mind specific tips. <br/>These are listed as follows:</h3>
</ul>
     <ul class="uk-list uk-list-bullet " style={{fontSize:"14px",letterSpacing:"1px",font:"Montserrat",lineHeight:"1.43",color:"#3e3e52"}}>
    <li>It is essential to make sure that the online bus booking
     service that you choose is reliable and trustworthy like redBus.</li>
    <li>Look to see if the online bus booking service of your choice
     meets all your expectations and services all your specific
     travel needs. redBus, through the provision of the filters
     option, allows its passengers to curate a trip by following 
     their travel needs.</li>
    <li>Make sure to carry a sanitiser and mask to all the locations 
     you are visiting.</li>
</ul>
</div>
</div>

{/*------------------------ Join Bus Hire as an operator------------------------- */}

{/* 
<div class=" " >
<div class="uk-container  uk-child-width-1-2 "  style={{paddingLeft:"",paddingTop:"10px",paddingRight:"10px"}} >
<div class="uk-grid-match" uk-grid  style={{border:"1px solid black",borderRadius:"6px"}}>


<button className="btn btn-secondary " data-toggle="button" aria-pressed="false" autocomplete="off" type="button" uk-toggle="target: .toggle13"style={{borderColor:"#f8f9fa",lineHeight:"15px"}}>
What are the things I would need to know before booking a 12-seater AC minibus with redBus?

<span  class="" uk-icon=" chevron-down"></span></button>
<p class="toggle"></p>
<p class="toggle13" style={{borderRadius:"8px",backgroundColor:"white",color:"#3e3e52",fontsize:"8px",margin:"20px",font:"Montserrat"}} hidden>
The average price for a 12-seater AC minibus with redBus is just a little more than 15 rupees per km. The driver fee for the same would come up to about 300 rupees.
</p>
</div>
</div>
</div>  */}



</div>



 {/* cities section */}
 <div  class="" style={{backgroundColor:"#f7f7f7",zIndex:""}}>
   <br/>
   <br/>
   <br/>
   <div >
  <div className="subfooterdiv uk-grid subfootergrid  "  style={{margin:"auto",width:"96%",paddingBottom:"33px"}}>
    <div className="uk-width-1-4@m subfootergriddiv  "  style={{marginBottom:"10px"}} >
    <ul style={{listStyle:"none"}}>
             <li  style={{marginBottom:"6px" }}>
                 <div class="listlink" style={{color:"#3e3e52",fontWeight:"700",fontSize:"16px",WebkitTextStrokeWidth:"thin"}}>Bus Hire Cities</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" style={{color:"#3e3e52"}} >
             Bus Hire in Ahmedabad
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bus Hire in Mumbai
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bus Hire in Bangalore
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bus Hire in Chennai
                   </a>
             </li>
            
             
             
         </ul>
    
     </div>
     <div className="uk-width-1-4@m subfootergriddiv" style={{marginBottom:"10px",marginTop:"23px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
                 <div class="listlink" style={{color:"#3e3e52",fontWeight:"700"}}></div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bus Hire in Pune
              </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bus Hire in Hyderabad
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bus Hire in Delhi
                   </a>
             </li>
             
             
             
         </ul>
    
     </div>
     <div className="uk-width-1-5@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
                 <div class="listlink" style={{color:"#3e3e52",fontWeight:"700",fontSize:"16px",WebkitTextStrokeWidth:"thin"}}>Tempo Traveller in other cities</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Tempo Traveller in Bangalore
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Tempo Traveller in Ahmedabad
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Tempo Traveller in Coimbatore
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Tempo Traveller in Vadodara
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Tempo Traveller in Kolkata
                   </a>
             </li>
             
         </ul>
    
     </div>
     <div className="uk-width-1-5@m subfootergriddiv" style={{marginBottom:"10px",marginTop:"23px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
                 <div class="listlink" style={{color:"#3e3e52",fontWeight:"700"}}></div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Tempo Traveller in Delhi
             </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Tempo Traveller in Pune

                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Tempo Traveller in Mumbai

                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Tempo Traveller in Chennai

                   </a>
             </li>
             
             
         </ul>
    
     </div>
    
     </div>
     </div>
    </div>
     {/* end of cities section */}
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

            <li style={{}}>
            <a class="listlinkf" href="" >
Car Rentals               </a>
            </li>
           
        </ul>
   
    </div>
   
   <div className="uk-width-1-6@m subfootergriddiv  "  style={{marginBottom:"10px",paddingLeft:"0px",marginLeft:"-34px"}} >
   <ul style={{listStyle:"none"}}>
            <li  style={{ }}>
                <div class="footerhead" style={{color:"#fff",fontWeight:"400",fontSize:"13px"}}>About </div>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" style={{}} >
About Us                   </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
Contact Us                   </a>
            </li>
           
          
        </ul>
   
    </div>
    <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px",paddingLeft:"0px",marginLeft:"-34px"}} >
    <ul style={{listStyle:"none"}}>
            <li style={{}}>
            <div class="footerhead" style={{color:"#fff",fontWeight:"400",fontSize:"13px"}}>Info



</div>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
            T & C             </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
            Privacy Policy                 </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
            Cookie Policy              </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
            FAQ             </a>
            </li>
            
            
        </ul>
   
    </div>
    <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px",paddingLeft:"0px",marginLeft:"-34px"}} >
    <ul style={{listStyle:"none"}}>
            <li style={{}}>
            <div class="footerhead" style={{color:"#fff",fontWeight:"400",fontSize:"13px"}}>Global Sites</div>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
            India                  </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
            Singapore                </a>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
            Malaysia                  </a>
            </li>

            <li style={{}}>
            <a class="listlinkf" href="" >
            Indonesia                 </a>
            </li>

            <li style={{}}>
            <a class="listlinkf" href="" >
            Peru                 </a>
            </li>

            <li style={{}}>
            <a class="listlinkf" href="" >
            Colombia                  </a>
            </li>
           
        </ul>
   
    </div>
    <div className="uk-width-1-6@m subfootergriddiv" style={{marginBottom:"10px",paddingLeft:"0px",marginLeft:"-34px"}} >
    <ul style={{listStyle:"none"}}>
            <li style={{}}>
            <div class="footerhead" style={{color:"#fff",fontWeight:"400",fontSize:"13px"}}>Our Partners</div>
            </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
            Goibibo</a>             </li>
            <li style={{}}>
            <a class="listlinkf" href="" >
            Makemytrip              </a>
            </li>
           
        </ul>
   
    </div>
    <div className="uk-width-1-4@m subfootergriddiv" style={{marginBottom:"10px",paddingLeft:"0px",marginLeft:"-34px"}} >
    <ul style={{listStyle:"none"}}>
            <li style={{paddingTop:"100px"}}>
                <a class="" style={{color:"#3e3e52",fontWeight:"700"}}>
                  <img src={iconredbus} style={{height:"25px"}} />
                </a>
            
            <a class="listlink" href="" style={{fontSize:"12px",color:"#fff"}} >
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
}
       
    
    
    export default bushire;