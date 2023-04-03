 import { useEffect,useState } from "react";



 function useFetch(request)
{
    let [data, setData] = useState(null)
    let [pending, setPending] = useState(true)
    let [error, setError] = useState(null)

       
    useEffect(()=>{
        setTimeout(() => {
            fetch(request)
        .then((response)=>{
            if(response.ok==true)
            {
            return(response.json())
            }
            else{
                
                throw Error("data not found,please try diffrent keyword")
            }
        })
        .then( (data)=>{setData(data); setPending(false) })//response for loading
         .catch((err)=>{setError(err.message);setPending(false)}) //related for network issues&problem in server 
        }, 1000);
    },[])

    return{data,pending,error}
}
export default useFetch;