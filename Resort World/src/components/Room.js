import React from 'react'
import { Link } from 'react-router-dom'
import PropType from "prop-types"

export default function Room({room}) {
   let {images,name,slug,price} = room
   return (
      <article className="room">
         <div className="img-container">
            <img src= {images[0]} alt="Single Room" />
            <div className="price-top">
               <h6>${price}</h6>
               <p>Per Night</p>
            </div>
            <Link to= {`/rooms/${slug}`}
            className = "btn-primary room-link"
            >
               Feature
            </Link>
         </div>
         <p className="room-info">{name}</p>
      </article>
   )
}

Room.propTypes ={
   name : PropType.string.isRequired,
   slug : PropType.string.isRequired,
   images : PropType.arrayOf(PropType.string).isRequired,
   price : PropType.number.isRequired
}