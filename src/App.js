import React from "react";
import ReactDOM from "react-dom";
import Header from './Header';
import Body from './Body';
import { createBrowserRouter, RouterProvider,Outlet,useParams } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Error from "./Error";
import RestMenu from "./RestMenu";

const App=()=>{


    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter =createBrowserRouter([
    {
        // path:"/" this is considered as root route
        path:"/",
        element: <App />,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<AboutUs />
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestMenu />
            }
        ],
        errorElement:<Error/>
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);