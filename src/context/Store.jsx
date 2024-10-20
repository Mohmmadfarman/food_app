import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [count,setcount]=useState(0)


  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((pre) => ({ ...pre, [itemId]: 1 }));
      cc();
     
    } else {
      setCartItem((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
      cc();
    
    }
  };

  const cc=()=>{
      setcount(pre=>pre+1)
  }

  const nn=()=>{
    setcount(pre=>pre-1)
  }

  const removeFromCart = (itemId) => {
    nn()
    setCartItem((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
    
  };

  const gettotal = (itemId) => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        total += iteminfo.price * cartItem[item];
      }
    }
    return total;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    gettotal,
    count
    
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
