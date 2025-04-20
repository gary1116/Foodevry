import { useState, useContext } from 'react';
import Logo from './images/food-logo.png';
import home from './images/home.png';
import cart from './images/shopping-cart.png';
import info from './images/info.png';
import call from './images/call.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from './Utils/useOnlineStatus';
import UserContext from './Utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

//subscribing to the store using the selector
const cartItems=useSelector((store)=>store.cart.items);
console.log(cartItems);
  // console.log(loggedInUser);
  return (
    <div className="flex justify-between w-full items-center bg-amber-100 mb-5 shadow-lg">
      {/* Logo */}
      <div className="w-85">
        <Link to={"/"}>
          <img src={Logo} alt="food Logo"  />
        </Link>
      </div>

      {/* Nav items */}
      <div className="flex gap-5 m-10">
        {/* Online/Offline Status */}
        {onlineStatus === true ? (
          <div className="w-10 h-10 bg-[#90EE90] rounded-full"></div>
        ) : (
          <div className="w-10 h-10 bg-[#f08080]  rounded-full"></div>
        )}

        {/* Navigation Icons */}
        <Link to={"/"}>
          <img src={home} className="w-10 h-10 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="home img" />
        </Link>
        <div className="relative inline-block">
        <Link to={"/cart"}>
        <h3 className='absolute -top-1 -right-1 bg-amber-400 text-black text-l font-extrabold w-5 h-5 flex items-center justify-center rounded-full z-10'>{cartItems.length}</h3>
        <img src={cart} className="w-10 h-10 transition-transform duration-300 ease-in-out transform hover:scale-110 relative z-0" alt="cart img" />
        </Link>
        </div>
        <Link to={"/about"}>
          <img src={info} className="w-10 h-10 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="info img" />
        </Link>
        <Link to={"/contact"}>
          <img src={call} className="w-10 h-10 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="phone img" />
        </Link>

        {/* Login/Logout Button */}
        <button
          
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
        <p className='text-xl text-center'>{loggedInUser}</p>
      </div>
    </div>
  );
};

export default Header;
