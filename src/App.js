import React from 'react';
import ReactDOM from "react-dom";
import { Route,BrowserRouter,Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Footer from '../src/components/footer/Footer'
import Header from '../src/components/header/Header'
import Homepage from '../src/components/pages/homepage/Homepage'
import Card from '../src/components/pages/homepage/card/Card'
import Cards from '../src/components/pages/homepage/cards/Cards'

function App() {
    return (
        <div>
        <div>
        
        <BrowserRouter>
         <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/Header" component={Header}/>
          <Route path="/Footer" component={Footer}/>
          <Route path="/Homepage" component={Homepage}/>   
          <Route path="/Card" component={Card}/>  
          <Route path="/Cards"  component={Cards}/>  
          </Switch>
         </BrowserRouter>
         </div>
         </div>
        
        
    );
  
}

export default App;
