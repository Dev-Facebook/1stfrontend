
import React from 'react'
import '../../App.css'
import { useState } from "react";
import axios from "axios";
// import Back from '../common/back/Back';
// import { Nav } from "../Navbar component/Nav"

import { useNavigate } from "react-router-dom"
// import { Link } from 'react-router-dom'

const Alogin = () => {
    const [email, setemail] = useState("email");
    // const [username, setemail] = useState("username");
    const [password, setpassword] = useState("password");
    const [message, setmessage] = useState("");
    const [isloading, setisloading] = useState(false);

    const values = {
        email: email,
        // username: username,
        password: password,
    }
    const endpoint = "http://localhost:5100/log/signup";
    let navigate = useNavigate()

    const Creatz =(e)=>{
        e.preventDefault();
        alert("You have to roboot your device, for you to create account")
    }
    const Forgetz =()=>{
        alert("Reboot your device now")
    }
    const Login = (e) => {
        e.preventDefault();
        console.log(values);
        axios
            .post(endpoint, values)
            .then((response) => {
                console.log(response.data);
                alert("Login went throung")
                alert(response.data.message);
                setmessage(response.data.message)
                setisloading(false)
                if (response.data.status) {
                    localStorage.token = response.data.token
                    localStorage.firstname = response.data.firstname
                    localStorage.setItem('firstname', response.data.firstname);
                    navigate("/")
                }


            })
            .catch((err) => {
                console.log(err);
                // alert(values);
                alert(err);
                // alert("login faild");
                alert(message);
                setisloading(false)

            }); if (message === false) {
                console.log(message);
                alert(message)
            } else {
            console.log(message);
        }

    };
    return (
        <all id='all'>
            <div id='jol' className='text-center m-auto mt-5'>
                <img  src='https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg' alt='facebook' />
            </div>
            <div className=" shadow mt-2 text-center w-50 m-auto">
                <h6 className='text-dark'>Log in to Facebook</h6>

                <div className={message === "" ? "" : "alert-alert-info"}>
                    <h3>
                        {message}
                    </h3>
                </div>

                <form method="POST" typeof="submit" >
                    <div className='form-group'>
                        <div id='input' className='mt-2'>

                            <input
                                // onBlur={formik.handleBlur}
                                onChange={(e) => setemail(e.target.value)}
                                type="text"
                                className="form-control w-75 m-2 m-auto"
                                placeholder="MobileNum\Email"
                            />
                            {/* {formik.touched.email && <small className="text-light">{formik.errors.email}</small>} */}
                        </div>


                        <div className='mt-3'>

                            <input
                                onChange={(e) => setpassword(e.target.value)}
                                type="password"
                                className="form-control w-75 m-auto"
                                placeholder="Password"
                            />


                        </div>

                        <button onClick={Login} className="btn btn-primary mt-3 w-50">
                        {isloading ? "loading please wait" : "Log In"}

                        </button>
                        <div className='mt-4'>
                            <a onClick={Forgetz} href='###'>Forgetten password?</a>
                        </div>
                        <div>
                            <button onClick={Creatz} id='btn' className='btn text-white mt-5'>create new account</button>
                        </div>
                    </div>
                </form>
                <h4>{message}</h4>

            </div>
        </all>
    )
}

export default Alogin