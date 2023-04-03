import { useHistory, useParams ,Link} from "react-router-dom"
import useFetch from "../customhook/useFetch";


const Fooddetails = () => {
    let { id } = useParams();
    let history=useHistory();
    let { data: item, pending, error } = useFetch("http://localhost:4000/items/" + id )
    
    let handleDeleteFood= ()=>{
        fetch("http://localhost:4000/items/" + id ,{method:"DELETE"})
        .then(()=>{
            alert("food has been removed");
            history.push("/");
        })
        
    } 
    return (

        <div className="details">
        
            {error && <h1>{error}</h1>}
            {pending && <div className="loader"></div>}
            {item && <div className="food-details">
                <img src={item.pic} alt="food" />
                <h1>FoodName:  {item.foodName}</h1>
                <h2> Rs: {item.price} /-</h2>
                <h2> Rating: {item.rating} </h2>
                <h2> type: {item.type}</h2>
                <button onClick={handleDeleteFood}>Remove food</button>
                <Link to={`/update${id}`}><button >Update food</button></Link>
            </div>}
        </div>

    );
}
export default Fooddetails;          
