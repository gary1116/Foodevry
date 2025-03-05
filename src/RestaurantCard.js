import CDN_URL from "./Utils/constants"

const RestaurantCard =({resData})=>{
  const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;
    return(
        <div className="w-50 h-100 bg-[#d6dbdf] hover:bg-gray-400 p-5 flex-col rounded-lg">
            <img alt="food image" className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h2 style={{wordWrap: "break-keep"}}>{name}</h2>
            <p className="break-all text-lg">{cuisines.join(",")}</p>
            <h2>{avgRating}</h2>
            <h2>{costForTwo}</h2>
        </div>
    );
}

export const highRatingCard = (RestaurantCard)=>{
    return (props)=>{
        return(
            <div >
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg border-2">High Rating</label>
            <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;