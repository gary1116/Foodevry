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