import React, { useState } from 'react'
import './Home.css'
import Header from '../../comopents/navbar/header/Header'
import Exploremenu from '../../comopents/Exploremenu/Exploremenu'
import Fooddisplay from '../../comopents/fooddisplay/Fooddisplay'
import Appdownload from '../../comopents/appdownload/Appdownload'


function Home() {

    const [category,setcategory]=useState("All")
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setcategory={setcategory}/>
        <Fooddisplay category={category}/>
        <Appdownload/>
       
      
    </div>
  )
}

export default Home
