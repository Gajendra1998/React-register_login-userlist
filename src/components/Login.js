import React from 'react'
import style from './style.css'
function Login() {
    return (
        <div className="base-container">

            <div className="content">

                <div className="Image">
                    < img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80" />
                </div>

            </div>

            <div className="form">
                <div className="tag">
                    <h2>Welcome back!  </h2>
                    <h5>Please Login to your Account</h5>
                </div>
                <div className="formdiv">

                    <div className="form-group" >

                        <label htmlFor="email"></label>
                        <input type="text" name="email" placeholder="email"></input>
                    </div>


                    <div className="form-group" >

                        <label htmlFor="password"></label>
                        <input type="text" name="password" placeholder="password"></input>
                    </div>

                    <div className="lastdiv">
                        <div className="chkbox">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1"> Remember me</label>
                        </div>
                        <div className="forgotpassword">
                            <a  href="#">forgot password</a>
                        </div>
                    </div>

                    <div className="footer">
                        <button type="button" className="btn" >Login</button>
                        <p>Term of use private policy</p>
                    </div>
                    
                </div>
                
            </div>

                
        </div>
    )
}

export default Login;
