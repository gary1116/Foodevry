import { useState } from "react";
import ItemList from "./ItemList";


const RestCategory = ({data,showItems,setShowIndex}) => {


    const handleClick=()=>{
        setShowIndex();
    }

    // console.log(data)
    return (
        
            <div className="shadow-xl shadow-zinc-300 bg-gray-100 mb-2 w-200  flex flex-col cursor-pointer items-center">
                <div className="flex justify-between w-full" onClick={()=>handleClick()} >
                    <span className="text-xl">{data.title}  ({data.itemCards.length})</span>
                    <span> ⬇️</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>

    )
}

export default RestCategory;