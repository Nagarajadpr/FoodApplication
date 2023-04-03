import { useRef } from "react";
import { useHistory } from "react-router-dom";

const Addfood = () => {
    let history = useHistory();
    let foodName = useRef();
    let price = useRef();
    let rating = useRef();
    let pic = useRef();

    let handleAddfood = (e) => {
        e.preventDefault();

        let newFood = {
            foodName: foodName.current.value,
            price: price.current.value,
            type: "",
            rating: rating.current.value,
            pic: pic.current.value
        }

        let options = document.getElementsByName("type");
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                newFood.type = options[i].value;
            }

        }
        fetch("http://localhost:4000/items", {
            method: "POST",
           
            body:JSON.stringify(newFood),
            headers:{"Content-Type":"application/json"},
        })
            .then(() => {
                alert("new food added");
                history.goBack();
                //history.push("/") redirects to home page
            })
    }
    return (

        <div className="Addfood">
            <h1>Add New food</h1>

            <div className="form">
                <form onSubmit={handleAddfood}>
                    <div className="foodname"><label >FoodName:</label> <input type="text" ref={foodName} /></div>
                    <div className="price"><label >Price:</label> <input type="number" ref={price} step="10" min="30" max="500" /></div>
                    <div className="type">
                        <span >Type:</span>
                        <input type="radio" id="v" name="type" /> <label for="v">Veg</label>
                        <input type="radio" id="n" name="type" /><label for="n">Non-Veg</label>
                    </div>
                    <div className="picture"><label >Pic</label><input type="url" ref={pic} name="" id="" /></div>
                    <div className="rating">   <label >Rating:</label> <input type="number" ref={rating} max="10" min="1" step=".1" /></div>
                    <div className="button"><button >AddFood</button></div>
                </form>
            </div>
        </div>
    );

}

export default Addfood;