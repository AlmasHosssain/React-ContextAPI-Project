import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from  'react-router-dom'

export default function Error() {
   return (
      <Hero>
         <Banner tittle= "404" subtitle="Page Not Found">
            <Link to= "/" className= "btn-primary">
               Go To Home
            </Link>
         </Banner>
      </Hero>
   )
}
