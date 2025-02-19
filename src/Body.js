import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [baseValue, setbaseValue] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1964351&lng=72.9527004&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();


        console.log(jsonData);
        setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants.length == 0 ? <ShimmerUi /> : (
        <div className="body">

            <div className="searchBox">
                <button
                    className="filter"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        setListOfRestaurants(filteredList);}}>
                    Top rated restaurants</button>
                <input className="Search" type="text" placeholder="Search" value={baseValue} onChange={(e) => { setbaseValue(e.target.value) }} />

                <button className="searchBtn" onClick={() => {
                    console.log(baseValue);
                    const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(baseValue.toLowerCase()))
                    setFilteredList(filteredRes);
                }}>Search</button>
            </div>

            <div className="restaurant-container">
                {filteredList.map((res) => (
                    <RestaurantCard key={res.info.id} resData={res} />
                ))}
            </div>
        </div>
    );
}

export default Body;