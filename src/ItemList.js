import { FOOD_IMAGE } from "./Utils/constants"

const ItemList = ({ items }) => {
    // console.log(items)

    return (
        <div>
            {items.map((item) => {
                return (<div key={item.card.info.id} className=" border-black border-b-1 text-left">
                    <div className="flex justify-between m-16">
                        <div>
                            <h2>{item.card.info.name}</h2>
                            <span className="text-lg">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                            <p className="text-md">{item.card.info.description}</p>
                        </div>
                        <div className=" flex items-center">
                            <div className="h-16 w-20">
                                <img className="h-full w-full rounded-xl" src={FOOD_IMAGE + item.card.info.imageId} alt="food image" />
                            </div>
                            <button type="button" class=" border-emerald-400 hover:bg-emerald-400 border-2 shadow-xl rounded-lg h-10 w-10 m-5 text-xs cursor-pointer">Add +</button>

                        </div>
                    </div>
                </div>)
            })}
        </div>
    )

}

export default ItemList;

// items.card.info...