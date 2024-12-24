import React from "react";
import ReactDOM from "react-dom";
import Header from './Header';
import Search from "./Search";
import Body from './Body';



const App=()=>{
    return (
        <div className="app">
            <Header/>
            <Search />
            < Body />
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);