import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
function Cart()
{
    const {cart}=useSelector((state)=>state);
    const [totalAmount,setTotalAmount]=useState(0);
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
    },[cart])
    return(
        <div>
            {
                cart.length>0?
                (
                    <div className="flex max-w-[1200px] mx-auto lg:flex-row xl:flex-row md:flex-col flex-col justify-center">
                        <div className="xl:w-[60%] lg:w-[60%] w-[100%] flex flex-col p-2">
                            {
                                cart.map((item,index)=>
                                <CartItem key={item.key} index={index} item={item}/>
                                )
                            }
                        </div>
                        <div className="xl:w-[40%] lg:w-[40%] w-[100%] mt-5 flex flex-col">
                            <div className="flex flex-col p-5 my-14 h-[100%]">
                                <div className="font-semibold text-xl text-green-800 uppercase">Your Cart</div>
                                <div className="font-semibold text-5xl text-green-700 uppercase">Summary</div>
                                <p className="text-xl pt-5">
                                    <span className="text-gray-700 font-semibold text-xl"
                                    >Total Items: {cart.length}</span>
                                </p>
                            </div>
                            <div className="flex flex-col mb-8">
                                <p className="text-xl font-bold"
                                >Total Amount:${totalAmount.toFixed(2)}</p>
                                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl"
                                >CheckOut</button>
                            </div>
                        </div>
                    </div>
                ):
                <div className="w-[100vw] mx-auto flex flex-col justify-center items-center h-[80vh]">
                    <div className="text-gray-700 font-semibold text-xl mb-2"
                    >Your Cart is Empty!</div>
                    <Link to="/">
                        <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider"
                        >Click to Shop</button>
                    </Link>
                </div>
            }
        </div>
    )
}
export default Cart;