import React from 'react'
import Footer from '../components/Footer'
import personalImg from '../images/personal.jpeg'

export default function FooterPrint() {
   return (
      <>
         <div>
           <img src={personalImg} alt="Personal Image" className="footerImg"/>
           <section className="room-extras">
               <h6>Personal Information</h6>
               <ul className="extras">
                  <li>I am Almas Hossain Antar.I am a running student of the department of Information And Communication Technology at Comilla University.I feel comfort and love to code with JavaScript.</li>
               </ul>
               <br/>
               <hr/> 
           </section>
           
       </div>
         
       <section className="room-extras">
         <h6>Academic Institution And Result</h6>
         <ul className="extras">
            <li>
               <label>Comilla University</label>
               <li>Result(3.88 out of 4.00)</li>
            </li>
            <li>
              <label>Adil Uddin Degree College</label>
              <li>Result(4.88 out of 5.00)</li>
            </li>
            <li>
              <label>Langolbandh High School</label>
              <li>Result(5.00 out of 5.00 with Govt. Scholarship)</li>
            </li>
            <li>
              <label>Malethia Govt. Primary School</label>
              <li>Result(5.00 out of 5.00 with Govt. Scholarship)</li>
            </li>
         </ul>
         <br/>
         <hr/>
         <br/>
         <h6>Skills</h6>
         <ul className="extras ">
            <li>-HTML5</li>
            <li>-CSS3</li>
            <li>-BOOTSTRAP</li>
            <li>-Core JavaScript</li>
            <li>-DOM</li>
            <li>-React</li>
            <li>-Redux</li>
            <li>-NodeJS</li>
            <li>-ExpressJS</li>
            <li>-MongoDb</li>
            <li>-Oracle</li>
            <li>-MySql</li>
         </ul>
       </section>
      </>
   )
}
