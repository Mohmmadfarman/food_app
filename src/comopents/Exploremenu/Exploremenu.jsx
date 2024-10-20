import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

function Exploremenu({category,setcategory}) {
    console.log(category);
    

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Discover a delightful selection of authentic dishes, crafted with fresh ingredients and bold flavors. From traditional favorites to innovative new creations, our menu offers something for every palate. Indulge in a culinary journey that will satisfy your cravings and leave you wanting more.</p>

        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setcategory(pre=>pre===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p className='items'>{item.menu_name}</p>

                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu
