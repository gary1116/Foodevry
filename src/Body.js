import RestaurantCard from "./RestaurantCard";
import restaurants from "./Utils/mockData";


const Body = () =>{
    return(
        <div className="body">
            <div className="restaurant-container">
                 {restaurants.map((res)=>(
                      <RestaurantCard key={res.info.id} resData={res} />
                    ))
                  }
            </div>
        </div>
    );
}

export default Body;