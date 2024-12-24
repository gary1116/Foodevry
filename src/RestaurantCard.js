import CDN_URL from "./Utils/constants"

const RestaurantCard =({resData})=>{
  const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;
    return(
        <div className="restaurant-card">
            <img alt="food image" className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h1>{name}</h1>
            <p>{cuisines.join(",")}</p>
            <h2>{avgRating}</h2>
            <h2>{costForTwo}</h2>
        </div>
    );
}

export default RestaurantCard;