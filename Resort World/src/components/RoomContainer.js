import React from 'react';
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import {RoomConsumer} from '../context'
import Loading from '../components/Loading'

const RoomContainer = () => {
   return (
      <RoomConsumer >
         {
            (value)=>{
               let {loading,sortedRooms,rooms} = value
               if(loading){
                  return <Loading/>
               }
               return(
                  <div>
                     <RoomFilter rooms={rooms} />
                     <RoomList rooms= {sortedRooms} />  
                  </div>
               )
            }

         }
      </RoomConsumer>
   );
}

export default RoomContainer;
