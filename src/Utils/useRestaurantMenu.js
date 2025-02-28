import { useEffect, useState } from "react";
import {FOOD_MENU_URL} from './constants';


const useRestaurantMenu =(resId)=>{

    const[resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);


    const fetchMenu = async ()=>{
            const data = await fetch(FOOD_MENU_URL+resId);
            const json  = await data.json();
            setResInfo(json);
    }

    return resInfo;

}

export default useRestaurantMenu;