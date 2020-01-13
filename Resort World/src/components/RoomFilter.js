import React from 'react';
import { useContext } from 'react'
import Tittle from '../components/Tittle'
import { RoomContext } from '../context'

const uniqueValue = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({ rooms }){
    const context = useContext(RoomContext)
    const {
        handelChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context

    //Get All Unique Value
    let types = uniqueValue(rooms, "type");
    //Add all to the unique value list
    types = ["all", ...types]
    //Map to JSX
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    // console.log(types);
    //Get All Unique Capacity
    let guests = uniqueValue(rooms, "capacity")
    guests = guests.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    
    
    
    return ( 
    <section className="filter-container">
      <Tittle tittle = "Search Expected Room" />
      <form className = "filter-form" > 
      { /*Select Type*/ }
       <div className="form-control">
         <label htmlFor = "type" > Room Type </label>
            <select id = "type"
               name = "type"
               onChange = { handelChange }
               className = "form-control"
               value = { type } >
                { types }
            </select>
       </div> 
       { /*End Of Select Type*/ } 
       { /*Guest Number*/ } 
      <div className="form-group">
        <label htmlFor = "capacity"> Guest </label> 
         <select id = "capacity"
           name = "capacity"
           onChange = { handelChange }
           className = "form-control"
           value = { capacity } >
           { guests } 
         </select> 
      </div>
      { /*End Of Guest Number*/ }
      {/*Start Price Part*/}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input type = "range" name = "price" min ={minPrice} max={maxPrice} 
          id= "price"
          value= {price}
          onChange={handelChange}
          className="form-control"/>
        </div>
      {/*End Of Price Part*/} 

      {/*Start Size*/}
      <div className="form-group">
        <label htmlFor="size">Room Size</label>
        <div className="size-inputs">
          <input
            type="number"
            name="minSize"
            id = "size"
            value={minSize}
            onChange={handelChange}
            className="size-input"
          />
          <input
            type="number"
            name="maxSize"
            id = "size"
            value={maxSize}
            onChange={handelChange}
            className="size-input"
          />
        </div>
      </div>
      {/*End Size */}
      {/*Start of CheckBox*/}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id = "breakfast"
              checked={breakfast}
              onChange= {handelChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id = "pets"
              onChange= {handelChange}
              checked={pets}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      {/*End of CheckBox*/}
    </form>
    </section>
  );
}