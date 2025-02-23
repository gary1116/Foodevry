import React, { useState } from 'react'
import { useEffect } from 'react'
import ShimmerUi from './ShimmerUi';
import { useParams } from 'react-router-dom';
import {FOOD_MENU_URL} from './Utils/constants';

const RestMenu = () => {

  const [resMenu, setResMenu] = useState(null);
      const {resId} = useParams();
  

  useEffect(() => {
    fetchMenu();
  }, [])

  console.log(FOOD_MENU_URL)
  const fetchMenu = async () => {
    const data = await fetch(
      FOOD_MENU_URL+resId);
    const json = await data.json();

    setResMenu(json);
    console.log(json);
  }

  const menuInfo = resMenu?.data?.cards[2]?.card?.card?.info || {};  
  const { name, city, costForTwoMessage } = menuInfo;

  const itemCards = resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
  console.log(itemCards);

  

return  (
      <div className='menu'>
        <h1>{name}</h1>
        <h3>{costForTwoMessage}</h3>
        <h3>{city}</h3>
        <ul>
         { itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}:-{item.card.info.defaultPrice/100 ||item.card.info.price/100}₹</li>)}
        </ul>
      </div>
    )
}

export default RestMenu
