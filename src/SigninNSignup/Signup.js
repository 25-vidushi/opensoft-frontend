import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Signup extends Component {
    render() {
        return (
            <div>
                <Link to="/"><button className="back-btn" style={{padding:"0.75rem", margin:"1rem", backgroundColor:"brown", border: "none", color: "whitesmoke", borderRadius: "0.2rem"}} >Back</button></Link>
                <h1 style={{color: "#917164", fontSize: "10rem", textAlign: "center"}}>SIGN UP</h1>
                <div  className='sign-frm'>
                    <h1 style={{fontSize: "2.5rem"}}>Fill in your details to get started!</h1>
                    <br />
                    <form action="includes/signup.inc.php" method="post">  
                        <input type="text" name="name" placeholder="Enter full name" />
                        <input type="text" name="email" placeholder="Enter email address" />
                        <input type="text" name="uid" placeholder="Enter username" />
                        <input type="password" name="pwd" placeholder="Enter password" />
                        <input type="password" name="pwd2" placeholder="Re-enter password" />
                        <input type="submit" value="Sign Up!" name="submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;