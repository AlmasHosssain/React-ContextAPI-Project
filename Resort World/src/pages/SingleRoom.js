import React, { Component } from 'react'
import Hero from '../components/Hero'
import {RoomContext} from '../context'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import defaultBcg from '../images/room-1.jpeg'
import StyleHero from '../components/StyleHero'

export default class SingleRoom extends Component {
   constructor(props){
      super(props);
      this.state = {
         slug : this.props.match.params.slug,
         defaultBcg
      }
   }
   static contextType = RoomContext 
   render() {
      let {getRoom} = this.context
      const room = getRoom(this.state.slug)
      if (!room) {
         return(
            <div className="error">
               <h3>No Such Room Could Be Found</h3>
               <Link to="/rooms" className="btn-primary">Back To Room</Link>
            </div>
         )
      }
   const {name,description,capacity,
      size,price,extras,pets,breakfast,images} = room
      const [mainImage,...defaultImage] = images
      //console.log(defaultImage);
      
      return (
         <>
            <StyleHero img={mainImage || this.state.defaultBcg} >
               <Banner tittle={`${name} room`}>
                  <Link to = "/rooms" className="btn-primary">
                     Back To Rooms
                  </Link>
               </Banner>
            </StyleHero>

            <section className="single-room">
               <div className="single-room-images">
                  {defaultImage.map((image,index)=>{
                     return <img key = {index} src={image} alt = {name} />
                  })}
               </div>
               <div className="single-room-info"> 
                  <article className="desc">
                     <h3>Details</h3>
                     <p>{description}</p>
                  </article>
                  <article className="info">
                     <h3>Info</h3>
                     <h6>Price: ${price}</h6>
                     <h6>Size: {size}SQFT</h6>
                     <h6>Max Capacity : {" "}
                        {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                     </h6>
                     <h6>
                        {pets? "Pet Allow Here" : "Pet Not Allow Here" }
                     </h6>
                     <h6>
                        {breakfast && "free breakfast included"}
                     </h6>
                  </article>
               </div>
            </section>
            
            <section className="room-extras">
               <h6>Extras</h6>
               <ul className="extras">
                  {extras.map((extra,index)=>{
                     return <li key= {index} >-{extra}</li>
                  })}
               </ul>
            </section>
         </>
      )
   }
}
