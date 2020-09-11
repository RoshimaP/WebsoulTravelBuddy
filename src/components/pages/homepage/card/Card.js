import React, { Component } from 'react';
import image1 from '/Users/Admin/travel_buddy/src/assets/images/image2.png'
import image2 from '/Users/Admin/travel_buddy/src/assets/images/image3.png'
class Card extends Component {
    render() { 
        return (  
          <div className="Card" >
            <div class="uk-flex" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div class="uk-card uk-card-default uk-card-body" style={{height:250,width:"30%"}}>
        
    <h3 class="uk-card-title" style={{fontSize:13,fontWeight:400,color:"#43464b",display:"flex",justifyContent:"center",alignItems:"center"}}>Save up to Rs 150 for bus tickets</h3>
                <img src={image1} class=" " alt=" " />;
                <div><p style={{fontSize:13,fontWeight:550,color:"#43464b",display:"flex",justifyContent:"center",alignItems:"center"}}>Use Code FIRST</p></div>
    </div>
    <div class="uk-card uk-card-default uk-card-body uk-margin-left" style={{height:250,width:"30%"}}>
    <h3 class="uk-card-title" style={{fontSize:13,fontWeight:400,color:"#43464b",display:"flex",justifyContent:"center",alignItems:"center"}}>Get notified when travel opens up for your route</h3>
             <img src={image2} class=" " alt=" " />;
             <p style={{fontSize:13,fontWeight:550,color:"#43464b",display:"flex",justifyContent:"center",alignItems:"center"}}>Pre-Register to get timely updates</p>
    </div>
</div>
</div>
        
        );
    }
 }
export default Card;