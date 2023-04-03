import { useParams } from "react-router-dom";
import Foodlist from "./Foodlist";
import { useEffect,useState } from "react";


const Searchfood = () => {
    let {searchKey}=useParams();
    let[items,setItems]=useState(null)
    let[pending,setPending]=useState(true)
    let[error,setError]=useState(null)

    
   useEffect(()=>{
    setTimeout(() => {
        console.log("fetch starts");
        fetch("http://localhost:4000/items")
    .then((response)=>{
        
        if(response.ok==true)
        {
        return(response.json())
        }
        else{
            throw Error("data not found,please try diffrent keyword")
        }
    })
    .then( (data)=>{setItems(data); setPending(false) })//response for loading
     .catch((err)=>{setError(err.message);setPending(false)}) //related for network issues&problem in server 
    }, 5000);
},[])
    
    return ( <div className="search-food">
    
    <h1>search Result:</h1>
    {error &&<h1>{error}</h1>}
    {pending &&  <div className="loader"></div>  }
    
      {items &&<Foodlist items={items.filter((food)=> {return food.foodName.toUpperCase().includes(searchKey.toUpperCase())})} />}

    
    </div> );
}
 
export default Searchfood;