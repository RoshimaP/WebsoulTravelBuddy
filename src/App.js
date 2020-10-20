import React from 'react';
import ReactDOM from "react-dom";
import { Route,BrowserRouter,Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Footer from '../src/components/footer/Footer'
import Header from '../src/components/header/Header'
import Homepage from '../src/components/pages/homepage/homepagenew'
import Card from '../src/components/pages/homepage/card/Card'
import Cards from '../src/components/pages/homepage/cards/Cards'
import Bus_Tickets from '../src/components/pages/bus_tickets/Bus_Tickets.js';
import KnowMore from '../src/components/pages/homepage/knowmore/knowmore.js';
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
          </Switch>
         </BrowserRouter>
         </div>
         </div>
        
        
    );
  
}

export default App;
