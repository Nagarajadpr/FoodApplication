 import { useState } from "react";
import { Link } from "react-router-dom";
import food from "../food.jpg"
import Orders from "./Orders";


 const Navbar= () =>{
    let [searchKey,setSearchKey]=useState("");

    return(
        <nav>
            <div className="logo">
                <Link className="Link" to="/"><img src={food} alt="logo" /></Link>
                <h1>village food.....</h1>
                <h4>[taste village flavors]</h4>               
            </div>

            <div className="searchbar"> 
            <input type="search"  value={searchKey} onChange={(e)=>{setSearchKey(e.target.value)}} />
            <Link to={`/search${searchKey}`}><button>search</button></Link>
                </div>

            <div className="navlinks">
                <Link className="Link" to="/addfood">Add food</Link>
                <Link className="Link" to="/orders"><button>Orders</button></Link>
            </div>
        </nav>
    );
 }
 export default  Navbar;