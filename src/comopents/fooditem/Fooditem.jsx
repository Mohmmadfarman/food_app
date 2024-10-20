import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Store'

function Fooditem({id,name,price,description ,image}) {

// const [itemcount,setitemcount]=useState(0)
// console.log("ggg",itemcount);


const {cartItem,addToCart,removeFromCart,count}=useContext(StoreContext)
console.log("addd id",id);
console.log("hhh",count);





function update() {
    addToCart(id);

    // setitemcount(prevCount => prevCount + 1);
}


  return (
    <div className='food-item'>
        <div className="food-item-image-conainer">
            <img className='food-item-image' src={image} alt="" />
            {  
            
            
                !cartItem[id]?
                <img className='add' onClick={update} src={assets.add_icon_white} alt="" />
                :<div className='foot-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" srcset="" />
                    <p className='count'>{cartItem[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" srcset="" />
                    

              
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{description
            }</p>
            <p className="food-item-price">${price}</p>

            {/* <h1>Id Is:{id}</h1> */}
        </div>
      
    </div>
  )
}

export default Fooditem
