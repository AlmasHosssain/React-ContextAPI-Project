import React, { Component } from 'react'
import Tittle from '../components/Tittle'
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa'

export default class Services extends Component {

   state = {
      services : [
         {
            icon: <FaCocktail/> ,
            tittle : "Free Cocktail",
            info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
         },
         {
            icon : <FaHiking/>,
            tittle : "Energetic Hiking ",
            info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
         },
         {
            icon : <FaShuttleVan/>,
            tittle : " Travel On Van",
            info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
         },
         {
            icon : <FaBeer/>,
            tittle : "Enjoy Unlimited Beer",
            info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
         },
      ]
   }

   render() {
      return (
        <div>
           <section className = "services">
            <Tittle tittle="Services" />
            <div className="services-center">
               {this.state.services.map((service,index)=>{
                  return <article key={index} className= "service">
                     <span>{service.icon}</span>
                     <h6>{service.tittle}</h6>
                     <p>{service.info}</p>
                  </article>
               })}
            </div>
           </section>
        </div>
      )
   }
}
