import RestaurantCard, {highRatingCard} from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/useOnlineStatus";
import OfflineUi from "./OfflineUi";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [baseValue, setbaseValue] = useState("");
    const OnlineStatus = useOnlineStatus();
    const HighRatingCard = highRatingCard(RestaurantCard); 
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1964351&lng=72.9527004&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();
        console.log(jsonData)

        setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    console.log(filteredList)


    if(OnlineStatus=== false){
        return (<OfflineUi />)
    }

    return listOfRestaurants.length === 0 ? <ShimmerUi /> : (
        <div className="body">

            <div className="flex items-center">
                <button
                    className=" w-35 bg-[#d6dbdf] rounded-lg"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                        setFilteredList(filteredList);}}>
                    Top rated restaurants</button>

                <input className="Search" type="text" placeholder="Search" value={baseValue} onChange={(e) => { setbaseValue(e.target.value) }} />
                <button className=" bg-[#d6dbdf] rounded-lg w-20 h-8" onClick={() => {
                    const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(baseValue.toLowerCase()))
                    setFilteredList(filteredRes);
                }}>Search</button>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 justify-center">
                {filteredList.map((res) => (
                    
                  <Link to={"/restaurants/"+res.info.id} key={res.info.id}>
                    {
                        res.info.avgRating > 4.3 ? (<HighRatingCard resData={res}/>) :  (<RestaurantCard resData={res} />)
                    }
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;