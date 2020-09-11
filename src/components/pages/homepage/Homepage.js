import React, { Component } from 'react';
import image from '/Users/Admin/travel_buddy/src/assets/images/image1.png'
import Header from'../../header/Header'
import Footer from'../../footer/Footer'
import Card from '../../pages/homepage/card/Card'
import Cards from '../../pages/homepage/cards/Cards'
function Homepage() {
  
  return (
  <div>
      <Header/>
      <img src={image} class=" " alt=" " />;
      <Card/><br></br>
      <Cards/><br></br>
      <Footer/>

      </div>
  )
}
export default Homepage;





//class Homepage extends Component {
    
    //render() { 
      // return (
          // <div>
            
            //<img data-src="images/image1.png" width="1800" height="1200" alt="" uk-img></img>
            //</div>
            // )
            //}
       // }
         
       // export default Homepage;