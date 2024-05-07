import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product";
function Home()
{
    const API_URL=`https://fakestoreapi.com/products`;
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);
    async function fetchData()
    {
        setLoading(true);
        try
        {
            const result =await fetch(API_URL);
            const data=await result.json();
            setData(data);
        }
        catch(error)
        {
            console.error(`API doesn't work`)
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <div>
            {
                loading?
                    <div className="w-[100vw] flex justify-center items-center h-[80vh]">
                        <Spinner/>
                    </div>:
                (
                    data.length>0?(
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-2 min-h-[100vh] gap-x-5 pb-8 gap-y-8 pt-10">
                            {
                                data.map((data)=>{
                                    return <Product key={data.id} data={data}/>
                                })
                            }
                        </div>
                    ):
                    <div className="flex justify-center items-center">
                        <p>No Data Found</p>
                    </div>
                )
            }
        </div>
    )
}
export default Home;