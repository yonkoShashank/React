import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/CartSlice";
function Product({data})
{
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch();
    function addToCart()
    {
        dispatch(add(data));
        toast.success(`Added to Cart`);
    }
    function removeFromCart()
    {
        dispatch(remove(data.id))
        toast.error(`Removed From Cart`);
    }
    return(
        <div className="flex flex-col items-center justify-between hover:scale-110 gap-3 p-4 mt-2 ml-5 rounded-xl transition duration-300 ease-in hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1"
                >{data.title}</p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left"
                >{data.description.split(" ").slice(0,15).join(" ")+("...")}</p>
            </div>
            <div className="h-[180px]">
                <img src={data.image} alt="clothing pic" className="h-full w-full"/>
            </div>
            <div className="flex justify-between items-center w-full mt-5">
                <div>
                    <p className="text-green-500 font-semibold">${data.price}</p>
                </div>
                <div>
                    {
                        cart.some((check)=>check.id===data.id)?
                        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                        onClick={removeFromCart}>Remove Item</button>
                        :<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                        onClick={addToCart}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default Product;