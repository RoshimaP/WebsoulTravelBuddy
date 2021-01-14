import React from 'react';
import ReactDOM from "react-dom";
import { Route,BrowserRouter as Router,Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Footer from '../src/components/footer/Footer'
import Footernew from './components/footer/Footernew'

import Header from '../src/components/header/FixedHeader'
import Homepage from '../src/components/pages/homepage/homepagenew'
import Card from '../src/components/pages/homepage/card/Card'
import Cards from '../src/components/pages/homepage/cards/Cards'
import Bus_Tickets from '../src/components/pages/bus_tickets/Bus_Tickets.js';
import KnowMore from '../src/components/pages/homepage/knowmore/knowmore.js';
//import newa from '../src/components/pages/new.js';
import offers from '../src/components/pages/homepage/offers/offers.js';
import Rpool from '../src/components/pages/rpool/rpool.js';
import Details from '../src/components/pages/rpool/view_details/view_details.js';
import Alloffers from '../src/components/pages/rpool/viewalloffers/alloffers.js';
import Pilgrimages from '../src/components/pages/rpool/pilgrimages/pilgirmages.js';
import Help from '../src/components/pages/help/help.js'
import Showmyticket from '../src/components/pages/showmyticket/showmyticket.js'
import Reschedule from '../src/components/pages/rescheduleticket/rescheduleticket.js'
import SMSand from '../src/components/pages/smsandemailticket/smsandemailticket'
import Cancel from '../src/components/pages/cancelticket/cancelticket'
import Bushire from '../src/components/pages/bushire/bushire'
import KnowMoreTrackBus from '../src/components/pages/homepage/knowmoretrackbus/trackbusnew.js';
//import KnowMoreTrackBus from '../src/components/pages/homepage/knowmoretrackbus/knowmoretrackbus.js';

import Signin from '../src/components/pages/signin/signin'

function App() {
    return (
      <Router>
        <div>
        <div>
          
          
        </div>
      
        
         <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route path="/BusTickets"  component={Bus_Tickets}/> 
              <Route  path="/rpool" component={Rpool}/>
              <Route  path="/Bushire" component={Bushire}/>
              <Route  path="/prilgrimages" component={Pilgrimages}/>
              <Route  path="/offers"  component={offers}/>
              <Route  path="/viewdetails" component={Details}/>
              <Route  path="/alloffers" component={Alloffers}/>
              <Route   path="/homepage/knowmore" component={KnowMore}/>    
              <Route  path="/Card" component={Card}/>  
              <Route  path="/Cards"  component={Cards}/>  
              <Route path="/BusTickets"  component={Bus_Tickets}/> 
                
              <Route  path="/Help" component={Help}/>
              <Route  path="/Showmyticket" component={Showmyticket}/>
              <Route  path="/Reschedule" component={Reschedule}/>
              <Route  path="/SMSand" component={SMSand}/>
              <Route  path="/Cancel" component={Cancel}/>
              <Route  path="/homepage/knowmoretrackbus" component={KnowMoreTrackBus}/> 

       {/* <Route  path="/Header" component={Header}/>
          <Route  path="/Footer" component={Footer}/> */}
          {/* <Route  path="/Homepage" component={Homepage}/>  */}
          {/*    
          <Route  path="/Signin" component={Signin}/>

           */}




           </Switch>
         
         <div>
           {/* <Footer></Footer> */}
         </div>
       
         </div>
         </Router>
        
        
    );
  
}

export default App;
