import { useParams } from 'react-router-dom';
import useRestaurantMenu from './Utils/useRestaurantMenu';
import RestCategory from './RestCategory';
import ShimmerUi from './ShimmerUi';
import {useState} from "react";

const RestMenu = () => {

  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(null);


  const menuInfo = resMenu?.data?.cards[2]?.card?.card?.info || {};
  const { name, city, costForTwoMessage,cuisines } = menuInfo;

  // const itemCards = resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
  // console.log(resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category=>{
  return  category.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })|| [];
  // console.log(categories);

  return  (
  <div className="flex flex-col items-center">
    <h1 className='text-4xl'>{name}</h1>
    <h3 className='text-xl'>{cuisines}</h3>
      {categories.map((category,index)=>(
        <RestCategory key={category?.card?.card?.categoryId} data={category?.card?.card} showItems={index== showIndex ?true:false} setShowIndex={()=>setShowIndex(index)}/>
      ))}
  </div>
  )
}

export default RestMenu;
