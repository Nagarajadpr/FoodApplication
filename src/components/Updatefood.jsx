import {  useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Updatefood = () => {
    let history = useHistory();
    let { id } = useParams();
    
    let[foodName,setfoodName]=useState("");
    let[price,setPrice]=useState("");
    let[type,setType]=useState("");
    let[rating,setRating]=useState("");
    let[pic,setPic]=useState("");

    useEffect(()=>{
        fetch("http://localhost:4000/items/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setfoodName(data.foodName);
            setPrice(data.price);
            setType(data.type)
            setRating(data.rating);
            setPic(data.pic);
        })
    },[])

    let handleUpdateFood = (e) => {
        e.preventDefault();

        let UpdatedFood = { foodName,price,type,rating,pic}

        fetch("http://localhost:4000/items/"+id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UpdatedFood)
        })
            .then(() => {
                alert("Food has been updated");
                history.goBack();
                //history.push("/") redirects to home page
            })
    }
    return (

        <div className="Addfood">
            <h1>Update food</h1>

            <div className="form">
                <form onSubmit={handleUpdateFood}>
                    <div className="foodname"><label >FoodName:</label> <input type="text" value={foodName} onChange={(e)=>{setfoodName(e.target.value)}}/></div>
                    <div className="price"><label >Price:</label> <input type="number" value={price} step="10" min="30" max="500"onChange={(e)=>{setPrice(e.target.value)}} /></div>
                    <div className="type">
                        <span >Type:</span>
                        <input type="radio" id="v" name="type" value="veg" onClick={(e)=>{setType(e.target.value)}}/> <label for="v">Veg</label>
                        <input type="radio" id="n" name="type" value="Non-veg" onClick={(e)=>{setType(e.target.value)}}/><label for="n">Non-Veg</label>
                    </div>
                    <div className="picture"><label >Pic</label><input type="url" value={pic} onChange={(e)=>{setPic(e.target.value)}} /></div>
                    <div className="rating"><label >Rating:</label> <input type="number" value={rating} max="10" min="1" step=".1"onChange={(e)=>{setRating(e.target.value)}} /></div>
                    <div className="button"><button >Update food</button></div>
                </form>
            </div>
        </div>
    );

}

export default Updatefood;