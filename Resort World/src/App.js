import React from 'react';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';
import Navbar from './components/Navber'
import Footer from './components/Footer'
import FooterPrint from './pages/FooterPrint'
import {Route,Switch} from 'react-router-dom'


function App() {
  return <>
  <Navbar/>
    <Switch>
    <Route exact path= "/" component={Home} />
    <Route exact path="/rooms/" component= {Rooms} />
    <Route exact path="/rooms/:slug" component={SingleRoom} />
    <FooterPrint exact path="/personal" component={FooterPrint} />
    <Route component={Error}/>
    </Switch>
    <Footer />
  </>;
}

export default App;
