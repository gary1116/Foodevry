import CDN_URL from "./Utils/constants"

const RestaurantCard =({resData})=>{
  const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;
    return(
        <div className="restaurant-card">
            <img alt="food image" className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h2 style={{wordWrap: "break-word"}}>{name}</h2>
            <p style={ {fontSize: "20px"}}>{cuisines.join(",")}</p>
            <h2>{avgRating}</h2>
            <h2>{costForTwo}</h2>
        </div>
    );
}

export default RestaurantCard;