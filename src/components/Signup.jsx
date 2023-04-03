import { useRef } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    let r1=useRef();
    let r2=useRef();
    let r3=useRef();
    let r4=useRef();

    let handleSignup=()=>{
        let r1=useRef();
        let r2=useRef();
        let r3=useRef();
        let r4=useRef();

        let handleSignup =(e)=>{
            e.preventDefault();/*use to avoid auto refresh of the page*/

            const user={
                username:r1.current.value,
                usermail:r2.current.value,
                password:r3.current.value
            }
            fetch("http://localhost:4000/users",{method:"POST",headers:{"Content-Type":"application/json"},JSON.stringify(user)})
            .then(()=>{

            })
        }
    }

    return ( 

        <div className="signup-page">
            <div className="signup-container">

                <h1>SIGN UP</h1>
                <form  onSubmit={handleSignup}>
                    <input type="text" placeholder="Username" ref={r1}/>
                    <input type="email" placeholder="Email" ref={r2} />
                    <input type="password" placeholder="password" ref={r3} />
                    <input type="text" placeholder="Confirm password" ref={r4}  />
                    <input type="submit" value="Signup" />
                </form>
                <Link >register through facebook</Link>
                <div className="or">
                    <hr />
                    <h4>OR</h4>
                    <hr />
                </div>
                <h3>Alredy have an account?</h3>
                <button>Sign-In</button>
            </div>

        </div>

     );
}
 
export default Signup;