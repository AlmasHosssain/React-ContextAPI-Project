import React from 'react';
import Room from '../components/Room'

const RoomList = ({rooms}) => {
   if (rooms.length === 0) {
      return(
         <div className="empty-search">
            <h3>No Room Is Found</h3>
         </div>
      );
   }
   return (
      <section className="roomslist">
         <div className="roomslist-center">
            {rooms.map((room)=>{
               return <Room key={room.id} room={room} />
            })}
         </div>
      </section>
   );
}

export default RoomList;
