import { useEffect } from "react";
import useFetch from "../customhook/useFetch";
import Foodlist from "./Foodlist";

const Home = () => {


    let { data: items, pending, error } = useFetch("http://localhost:4000/items");

        useEffect(()=>{
            
            if(localStorage.getItem("orders")===null)
            {
                localStorage.setItem("orders","[]");
            }
        },[])


    return (
        <div className="home">                                                                                                                                                                                          
            {error && <h1>{error}</h1>}
            {pending && <div className="loader"></div>}
            {items && <Foodlist items={items} title="All food" />}

            {/* <foodlist items={items.filter((food)=>{return food.type=="non-veg"})} title="veg food"/> }*/}
        </div>

    );
}
export default Home;