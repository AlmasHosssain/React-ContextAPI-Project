import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from "react-router-dom"
import Services from '../components/Services'
import FeturedRoom from '../components/FeturedRoom'

export default function Home() {
   return (
    <>
       <Hero>
         <Banner tittle="Come For Peace" subtitle="Money Is Not Every Things">
            <Link to = "/rooms" className= "btn-primary">
               Enter inside
            </Link>
         </Banner>
      </Hero>
      <Services/>
      <FeturedRoom />
    </>
   )
}