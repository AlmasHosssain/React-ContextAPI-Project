import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'

const Rooms = () => {
   return (
     <>
      <Hero hero="roomsHero">
        <Banner tittle="Our Rooms" subtitle="We Always Stay For Your Help">
            <Link to="/" className="btn-primary">
               Go To Home
            </Link>
        </Banner>
     </Hero>
     <RoomContainer />
     </>
   );
}

export default Rooms;
