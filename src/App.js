import React from 'react';
import ReactDOM from "react-dom";
import { Route,BrowserRouter,Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Footer from '../src/components/footer/Footer'
import Footernew from './components/footer/Footernew'

import Header from '../src/components/header/Header'
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
        <div>
        <div>
      
        <BrowserRouter>
         <Switch>
       <Route exact path="/" component={Homepage}/>
       <Route exact path="/Header" component={Header}/>
          <Route exact path="/Footer" component={Footer}/>
          <Route exact path="/Homepage" component={Homepage}/> 
          <Route  exact path="/homepage/knowmore" component={KnowMore}/>    
          <Route exact path="/Card" component={Card}/>  
          <Route exact path="/Cards"  component={Cards}/>  
          <Route exact path="/BusTickets"  component={Bus_Tickets}/> 
          <Route exact path="/offers"  component={offers}/>   
          <Route exact path="/rpool" component={Rpool}/>
          <Route exact path="/rpool/viewdetails" component={Details}/>
          <Route exact path="/rpool/alloffers" component={Alloffers}/>
          <Route exact path="/rpool/prilgrimages" component={Pilgrimages}/>
          <Route exact path="/Help" component={Help}/>
          <Route exact path="/Showmyticket" component={Showmyticket}/>
          <Route exact path="/Reschedule" component={Reschedule}/>
          <Route exact path="/SMSand" component={SMSand}/>
          <Route exact path="/Cancel" component={Cancel}/>
          <Route  exact path="/homepage/knowmoretrackbus" component={KnowMoreTrackBus}/>    
          <Route exact path="/Signin" component={Signin}/>

          <Route exact path="/Bushire" component={Bushire}/>




           </Switch>
         </BrowserRouter>
         </div>
         </div>
        
        
    );
  
}

export default App;
