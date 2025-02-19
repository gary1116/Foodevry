import { useState } from "react";

const Search =()=>{

    const [baseValue,setbaseValue] = useState("");

    return (
        <div className="searchBox">
        <input className="Search" type="text" placeholder="Search" value={baseValue} onChange={(e)=>{setbaseValue(e.target.value)}}/> 
        <button className="searchBtn" onClick={()=>{
            console.log(baseValue);
        }}>Search</button>
        </div>
    )
}

export default Search;