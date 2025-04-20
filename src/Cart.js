import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./Utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        return dispatch(clearCart())
    }

    return (
        <div className={cartItems.length == 0 ? "text-center" : "m-35 bg-gray-100 shadow-md  h-full text-center rounded-md"}>
            <h2 className="text-2xl p-5">Cart</h2>
            {cartItems.length == 0 ? <h1 className="font-extrabold text-4xl text-red-600">Your Cart is Empty!!</h1> : 
            <button className="border-red-600 hover:bg-red-400 border-2 shadow-xl rounded-lg h-7 w-21 m-2 text-xs cursor-pointer absolute right-[150]" onClick={() => handleClearCart()}>clear Cart</button>}
            <div>
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;