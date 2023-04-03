import { useEffect, useState } from "react";
import Foodlist from "./Foodlist";

const Orders = () => {
 
    let [orders,setOrders]=useState(null);
    
    useEffect(()=>{
        let foodOrdered=localStorage.getItem("orders");
        foodOrdered=JSON.parse(foodOrdered);
        console.log(foodOrdered);
        setOrders(foodOrdered);
    },[])
    return (


        <div className="orders">
        {orders&&<Foodlist  items={orders} title=" ordered list" />}
        </div>  );
}
 
export default Orders;

