import React, { useContext } from 'react'
import './Card.css'
import { StoreContext } from '../../../context/Store'
import { useNavigate } from 'react-router-dom';
import { IoIosRemoveCircle } from "react-icons/io";

function Card() {
  const {cartItem,food_list,removeFromCart,gettotal}=useContext(StoreContext)
//   console.log(food_list);
console.log(cartItem);

const navigate=useNavigate()

  
  

  return (
    <div className='cart'>
       
        <div className="cart-item">
            <div className="cart-item-title" id='all'>
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            
            <br />
            
            <hr />
            
            {
                food_list.map((item,index)=>{
                    if(cartItem[item._id]>0){
                        return(
                            <>
                            <div key={index} className="cart-items-title cart-items-item" id='cc'>
                                <img  src={item.image} alt="" />
                                <p><span id='tt'>Title</span>{item.name}</p>
                                <p> <span id='tt'>Price</span>${item.price}</p>
                                <p><span id='tt'>Quantity</span>{cartItem[item._id]}</p>
                                <p><span id='tt'>Total</span> ${item.price*cartItem[item._id]}</p>
                                <p onClick={()=>removeFromCart(item._id)} className='cross'><span>Remove</span><IoIosRemoveCircle /></p>


                            </div>
                            <hr />
                            </>
                        )
                    }

                })
            }
        </div>

        <div className="cart-bottom">
            <div className="cart-total">
                <h2>Cart totals</h2>
                <div>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${gettotal()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>${gettotal()===0?0:2}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Total</p>
                        <p>${gettotal()===0?0:gettotal()+2}</p>
                    </div>
                    
                </div>
                <button onClick={()=>navigate('/order')}>Procce To Checkout</button>
            </div>
            <div className="cart-promocode">
                <div>
                    <p className='para'>If you have a promo code,Enter it here</p>
                    <div className='cart-promocode-input'>
                    <input type="text" placeholder='promo code' />
                    
                        
                    </div>
                    <button className='submit'>Submit</button>
                   
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Card
