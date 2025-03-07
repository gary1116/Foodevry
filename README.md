# Foodevry
A basic food ordering app built in react which will be using real swiggy api to render data of near by restaurants hotels and show it on the webpage this project is made for learning purposes 


# Traditional-React

is a folder in which there are basuc commands on how react is used with jsx tags nothing else just for educational purposes


# parcel
-dev build
-local server
-HMR Hot module replacement
-it uses a file watching algorithm which is written in c++
-caching is done which helps in faster building
-it also does image optimization
-it will minify our file also 
-compresses our file
-consistent hashing
-code splitting
-differential bundling - when our app is hosted then it can be opened in chrome,firefox and even older versions of it this differential bundling helps us do it
-helps us to hosts our app on https
-tree shaking - removes unused code for us
-it has different build for dev and production


# two types of Export/Import 

default Export/import

export default Component;
import Component from "path";

Named Expot/Import 
export const Component
 import {Component} from "Path";


 # react hooks:-
 normal js utility functions written by facebook developers
 useState():- used to generate state variables in react
 useEffect()


# virtual dom 
 it is a representation of actual dom 


# monolith architecture
In Monolithic Architecture, all components of the application are tightly integrated into a single unit or codebase. Everything, including the user interface, business logic, and database access, is built as a cohesive, single application.

# micro services
In Microservices Architecture, the application is broken down into a collection of small, independent services. Each service handles a specific business capability and can be developed, deployed, and scaled independently.


# Separation of Concerns (SoC) in Microservices
Separation of Concerns (SoC) is a design principle that aims to separate a system into distinct sections, each handling a specific responsibility or concern. In the context of microservices architecture, SoC plays a crucial role in ensuring that each service is focused on a single, well-defined responsibility, which helps improve scalability, maintainability, and flexibility.


# what is a hook in react?
a normal js function made by react for specific purpose


 # useEffect
   useEffect(()=>{},[]);

    ()=>{} => call back function
    []=> dependency array


    when will this useEffects callBack function be called?
    this callback function will be called after my component renders

    when the component will be loaded and the page will be loaded it will call the callback function in useEffect and perform the action present in it

    a use effect without a dependency array will render everytime my component renders 

    if dependency array is empty = [] useEffect is called on initial render (just once) 
    
    if we put something inside that dependency array then it will only be called when that dependency changes

   # useState
   const [list,setList]=useState();

   never create your useState outside your component
   try to create useState on top
   never create useState in if else case,for loop or any loop , not even function

  
 
 # conditional rendering

 rendering on the basis of condition is called as conditional rendering
if you have a condition and you render according to condition then it is known as conditional rendering


# state react variable
whenever state variables update, react triggers a reconciliation cycle (re-renders the componnet)


# Tacke CORS error 
you will end up in cors error so just download extension for cors it is allow cors and turn it on and this page will work


# how to create configuration for routing 
inorder to create routing configuration you need to import createrouterbrowser for react-router-dom
and use it in your root file in thr project case it is App.js
you can go through App.js for routing configuration

createrouterbrowser :- it takes a list of object know as path ,path is nothing but an object

now appRouter constant is the app configuration

now RouterProvide is another componnt from react-router-dom whoch helps us provide the configuration we made to react for it to work

------------------CHILDREN ROUTES-----------------
 path:"/",
        element: <App />,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<AboutUs />
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]

        here path:/ is considered as a root route so in default "/" body component will be loaded

        and in function component

         <div className="app">
            <Header/>
            <Outlet/>
        </div>

        here <Outlet/> is mentioned so that it can swap its places with other children componnets


        ------------------------------------------------------------------
        in react dont use anchor tags to go to another page
        because whole page gets refreshed
        instead of anchor we can use link tag which is given to us by react router dom

        anchor tag:- reloads the page
        Link tag:- refreshes the components


# single page applications

        in spa you dont change the page you dont need to refresh as it will switch from one component to another via client side routing

# types of routing in web apps

        client side routing:-
            Client-side routing means that React handles the routing within the browser, without making a full request to the server for each new page.

        server side routing:-
            Server-side routing means that each page request is sent to the server, and the server responds with a new HTML page.


# dynamic routing
        inorder to routing you need to add ":" so that react will understand this data is dynamic
            for example

            {
                path:"/restaurants/:resId",
                element:<RestMenu />
            }

        here :resId is dynamic


# single responsibility principle

        suppose if we have a component called restaurant menu so it show only restaurant menu thats it in other terms each component should have a single responsibility


# Lazy Loading
        chunking
        code splitting
        dynamic bundling

        all of this means the same it means that we have to chunk our code into smaller components to optimize our app so that it loads fatser in the browser


# higher order component

        it is a fucntion that takes a component, enhances that component and returns a component


# props drilling

passing data from one comp to another comp is tedious and react is a one way datastream

in react data passes from parent to children and so on

now if you want to send a specific data to a child component and that component is two components below the heirachy meaning

parent=> child 1(parent for child 2)=> child 2(parent for child 3)=> child3

now child 3 needs that data so inorder for parentto pass it to child 3 it has to pass it to child 1 and then child 2 
this is called as props drilling


# react context

it is somewhat like a global space to store data so that anyone can use it (it is used in this project)
 => ./utils/UserContext.js
it is only used for learning purposes 