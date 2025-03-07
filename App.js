import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from './src/Header';
import Body from './src/Body';
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import AboutUs from "./src/AboutUs";
import Contact from "./src/Contact";
import Error from "./src/Error";
import RestMenu from "./src/RestMenu";
import UserContext from "./src/Utils/UserContext";

const App=()=>{

    const [userInfo,setUserInfo] = useState();

    useEffect(()=>{

        const data={
            name:"Gary Meledath"
        }
        setUserInfo(data.name);
    },[]);


    return (
        <UserContext.Provider value={{loggedInUser:userInfo}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
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