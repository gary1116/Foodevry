import { useEffect, useState } from 'react';
import Logo from './images/food-logo.png';
import home from './images/home.png';
import cart from './images/shopping-cart.png';
import info from './images/info.png';
import call from './images/call.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from './Utils/useOnlineStatus';


const Header = ()=>{

    const [btnName,setbtnName] = useState("Login");
    const onlineStatus =useOnlineStatus();

    // a use effect without a dependency array will render everytime my component renders 
    // if dependency array is empty = [] useEffect is called on initial render (just once) 
    // if we put something inside that dependency array then it will only be called when that dependency changes

    
    return (
        <div className="header">
            <div className="logo-container">
            <Link to={"/"} >   <img src={Logo} alt="food Logo" /></Link>
            </div>
            <div className="nav-items">
               {onlineStatus===true ? <h1 className="green"></h1>:<h1 className='red'></h1>} 
            <Link to={"/"} ><img src={home} className="item" alt="home img" /></Link>
                <img src={cart} className="item" alt="cart img" />
                <Link to={"/about"}><img src={info} className="item" alt="info img" /></Link>
                <Link to={"/contact"} ><img src={call} className="item" alt="phone img" /></Link>
                <button className='filter' onClick={()=>{btnName =="Login" ? setbtnName("Logout") :setbtnName("Login") }}>{btnName}</button>
            </div>
        </div>
    );
};

export default Header;