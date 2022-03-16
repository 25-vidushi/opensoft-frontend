import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

class Signin extends Component {
    render() {
        return (
            <div>
                <Link to="/"><button className="back-btn" style={{padding:"0.75rem", margin:"1rem", backgroundColor:"brown", border: "none", color: "whitesmoke", borderRadius: "0.2rem"}} >Back</button></Link>
                <h1 style={{color: "#917164", fontSize: "10rem", textAlign: "center"}}>Sign in</h1>
                <div  className='sign-frm'>
                    <h1 style={{fontSize: "2.5rem"}}>Welcome back!</h1>
                    <br />
                    <form action="includes/signin.inc.php" method="post">   
                        <label htmlFor="uid">Enter username/email:</label> 
                        <input type="text" name="uid" />  
                        <label htmlFor="pwd">Enter password:</label> 
                        <input type="password" name="pwd" />
                        <input type="submit" name="submit" value="Lessgo!" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Signin;