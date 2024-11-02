import React from "react";
import ReactDOM from "react-dom";

//one single element
const h1 = React.createElement(
    "h1",
    {id:"Heading",class:"head"},
    "Hello world from react"
);

//nested elements
// const parent=React.createElement(
//     "div",
//     {class:"parent"},
//     React.createElement("div",
//         {class:"child"},
//         React.createElement("h1",{},"I am an h1 tag"))
// );


//if you want two children in  a nested element

const parent=React.createElement(
    "div",
    {class:"parent"},
    [
        React.createElement("div",
        {class:"child"},
        [React.createElement("h1",{},"I am an h1 tag"), React.createElement("h2",{},"I am an h2 tag")]),
        React.createElement("div",
            {class:"child2"},
            [React.createElement("h1",{},"I am an h1 tag"), React.createElement("h2",{},"I am an h2 tag")])
        ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



