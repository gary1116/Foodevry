import { useEffect, useState } from 'react';
import Logo from './images/food-logo.png';
import home from './images/home.png';
import cart from './images/shopping-cart.png';
import info from './images/info.png';
import call from './images/call.png';


const Header = ()=>{

    const [btnName,setbtnName] = useState("Login");

    // a use effect without a dependency array will render everytime my component renders 
    // if dependency array is empty = [] useEffect is called on initial render (just once) 
    // if we put something inside that dependency array then it will only be called when that dependency changes

    
    return (
        <div className="header">
            <div className="logo-container">
                <img src={Logo} alt="food Logo" />
            </div>
            <div className="nav-items">
                <img src={home} className="item" alt="home img" />
                <img src={cart} className="item" alt="cart img" />
                <img src={info} className="item" alt="info img" />
                <img src={call} className="item" alt="home img" />
                <button className='filter' onClick={()=>{btnName =="Login" ? setbtnName("Logout") :setbtnName("Login") }}>{btnName}</button>
            </div>
        </div>
    );
};

export default Header;