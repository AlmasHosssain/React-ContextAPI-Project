import React, { Component } from 'react';
import items from './data'
const RoomContext = React.createContext();
class RoomProvider extends Component {
   state = {
      rooms : [],
      sortedRooms : [],
      featuredRooms : [],
      loading : true,
      type : "all",
      capacity : 0,
      price : 0,
      minPrice : 0,
      maxPrice : 0,
      minSize : 0,
      maxSize : 0,
      breakfast : false,
      pets : false
   }

   //Get The Data from the external Data File

   componentDidMount(){
      let rooms = this.formData(items)
      let featuredRooms = rooms.filter(room => room.featured === true)
      const maxPrice = Math.max(...rooms.map(item=>item.price));
      const maxSize = Math.max(...rooms.map(item=>item.size))
      this.setState({
         rooms : rooms,
         sortedRooms : rooms,
         featuredRooms : featuredRooms,
         loading : false,
         price : maxPrice,
         maxPrice : maxPrice,
         maxSize : maxSize
      })     
      
   }

   formData = (items) =>{
      let tempData = items.map((item)=>{
         const id = item.sys.id;
         const images = item.fields.images.map((image)=>{
            return image.fields.file.url
         })
         let room = {...item.fields,images,id}
         return room
      })
      return tempData
   }

   getRoom = (slug) =>{
      let tempRoom = [...this.state.rooms]
      const room = tempRoom.find(room=> room.slug === slug)
      return room
   }

   handelChange = (event) =>{
      const target = event.target;
      const value = event.target.type === "checkbox" ? 
      target.checked : target.value;
      const name = event.target.name;
      this.setState({
         [name] : value
      },
      this.filterRooms)
   };

   filterRooms = () =>{
      let {
         rooms,
         type,
         capacity,
         price,
         maxSize,
         minSize,
         breakfast,
         pets
      } = this.state

      let tempRooms = [...rooms];
      
      
      //Type Filtering
      if (type !== "all") {
            tempRooms = tempRooms.filter(room=> room.type === type);
      }

      //Capacity/Guest Filtering
      capacity = parseInt(capacity)  
      if (capacity !==1) {
         tempRooms = tempRooms.filter(room => room.capacity >= capacity)
         //console.log(tempRooms);
      }

      //Price Filtering
      tempRooms = tempRooms.filter(room=>room.price <= price);

      //Size Filtering
      tempRooms = tempRooms.filter(room=> room.size >= minSize && room.size <= maxSize)
      
      //Breakfast Filtering
      if (breakfast) {
         tempRooms = tempRooms.filter(room=>room.breakfast===true)
      }

      //Pets Filtering
      if (pets) {
         tempRooms = tempRooms.filter(room=>room.pets===true)
      }
      this.setState({
         sortedRooms : tempRooms
      });
   }

   render() {
      return (
         <RoomContext.Provider value= {{...this.state,
            getRoom:this.getRoom,
            handelChange:this.handelChange
         }}>
               {this.props.children}
         </RoomContext.Provider>
      )
   }
}
const RoomConsumer = RoomContext.Consumer;


export {RoomContext,RoomProvider,RoomConsumer}