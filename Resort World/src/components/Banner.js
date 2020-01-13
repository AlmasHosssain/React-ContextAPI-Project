import React from 'react';

export default function Banner ({children,tittle,subtitle}){
   return (
      <div className= "banner">
         <h1>{tittle}</h1>
         <div></div>
         <p>{subtitle}</p>
         {children}
      </div>
   );
}

