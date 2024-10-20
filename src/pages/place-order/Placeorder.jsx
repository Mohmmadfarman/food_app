import React, { useContext, useState } from 'react';
import './Placeorder.css';
import { StoreContext } from '../../context/Store';
import img from './order.png';
import img1 from './item2.png';
import Load from '../../comopents/loading/Load';

function Placeorder() {
    const { gettotal } = useContext(StoreContext);
    const [pay, setPay] = useState(false);
    const [save, setSave] = useState(false);
    const [flag,setflag]=useState(false)

    function handleFormSubmit(e) {
        e.preventDefault();
        
            setSave(true);
        
        // Set save to true upon successful form submission
    }

    function handlePayment(e) {
        e.preventDefault();
        setflag(true)
        // Add payment processing logic here
       setTimeout(()=>{
        setPay(true);
        setflag(flag)
       },2000) // Set pay to true to show success message
    }

    return (
        <form onSubmit={handleFormSubmit} className='order-place'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name' required />
                    <input type="text" placeholder='Last Name' required />
                </div>
                <input type="email" placeholder='Email Address' required />
                <input type="text" placeholder='Street' required />
                <div className="multi-fields">
                    <input type="text" placeholder='City' required />
                    <input type="text" placeholder='State' required />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip code' required />
                    <input type="text" placeholder='Country' required />
                </div>
                <input type="tel" placeholder='Phone' required />
                <button className='btn' type="submit">{save?'Saved':'Save'}</button>
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${gettotal()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${gettotal() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>${gettotal() === 0 ? 0 : gettotal() + 2}</p>
                        </div>
                    </div>
                    {save && <button onClick={handlePayment}>Proceed To Payment</button>}
                </div>
                {pay && (
                    <div className='order'>
                        <h2>{gettotal()===0?'Please Add Items..':'Your order was successfully placed!'}</h2>
                        <img className='im' src={gettotal()===0?img1:img} alt="Order Confirmation" />
                    </div>
                    
                )}
                <h2>{flag &&<Load/>}</h2>
               
            </div>
        




        </form>
    );
}

export default Placeorder;
