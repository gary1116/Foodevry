import React from "react";
import ReactDOM from "react-dom";
import Header from './Header';
import Body from './Body';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Error from "./Error";

const App=()=>{
    return (
        <div className="app">
            <Header/>
            < Body />
        </div>
    )
}

const appRouter =createBrowserRouter([
    {
        path:"/",
        element: <App />,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<AboutUs />
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);