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


 useEffect(()=>{
        
    },[]);

   { ()=>{} } => call back function
    []=> dependency array


    when will this useEffects callBack function be called?
    this callback function will be called after my component renders

    when the component will be loaded and the page will be loaded it will call the callback function in useEffect and perform the action present in it


 
 # conditional rendering

 rendering on the basis of condition is called as conditional rendering
if you have a condition and you render according to condition then it is known as conditional rendering


# state react variable
whenever state variables update, react triggers a reconciliation cycle (re-renders the componnet)