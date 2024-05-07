import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {MdAutoDelete} from 'react-icons/md'
import {remove} from '../redux/Slices/CartSlice'
function CartItem({item})
{
    const dispatch=useDispatch();
    function removeCart()
    {
        dispatch(remove(item.id))
        toast.error("Item removed")
    }
    return(
        <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-50 mt-2 mb-2 md:mx-5">
            <div className="flex md:flex-row flex-col xl:flex-row lg:flex-row p-0 md:p-3 gap-5 gap-5 items-center">
                <div className="w-[30%]">
                    <img src={item.image} className="w-full"/>
                </div>
                <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%] lg:w-[70%] xl:w-[70%]">
                    <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
                    <h1 className="text-base text-slate-700 font-medium"
                    >{item.description.split(" ").slice(0,15).join(' ')+"..."}</h1>
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-lg text-green-600"
                        >${item.price}</p>
                        <div className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                        onClick={removeCart}><MdAutoDelete/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItem;