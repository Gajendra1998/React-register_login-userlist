import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useHistory  } from "react-router-dom";
import validation from './validation';
import './style.css';
function Register() {

    let history = useHistory();
    const [values, setValues] = useState({
        username: "",
        email: "",
        number: "",
        password: ""
    }); 
    const [errors, setErrors] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
   
         localStorage.setItem("userList",JSON.stringify(values))    
   } 
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div className="base-container">

            <div className="content">

                <div className="Image">
                < img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80" alt="ppp"/>
                </div>

            </div>

            <form className="form" action="">
                <div className="tag">

                    <h2>Welcome</h2>
                    <h5>Please Register to get In</h5>
                </div>
                <div className="formdiv">
                    <div className="form-group" >

                        <label htmlFor="username"></label>
                        <input type="text" name="username" placeholder="username" value={values.username} onChange={handleChange} />
                    </div>
                    {errors.username && <p className="errors"> {errors.username}</p>}

                    <div className="form-group" >

                        <label htmlFor="email"></label>
                        <input type="text" name="email" placeholder="email" value={values.email} onChange={handleChange}></input>
                    </div>
                    {errors.email && <p className="errors"> {errors.email}</p>}

                    <div className="form-group" >

                        <label htmlFor="number"></label>
                        <input type="number" name="number" placeholder="number" value={values.number} onChange={handleChange}></input>
                    </div>
                    {errors.number && <p className="errors"> {errors.number}</p>}

                    <div className="form-group" >
                        <label htmlFor="password"></label>
                        <input type="password" name="password" placeholder="password" value={values.password} onChange={handleChange} ></input>
                    </div>
                    {errors.password && <p className="errors"> {errors.password}</p>}

                    <div className="footer">
                        <button onClick={handleFormSubmit} type="submit" className="btn" >Register</button>
                        <p>Term of use private policy</p>
                    </div>

                </div>

            </form>


        </div>
    )
}
export default Register;
