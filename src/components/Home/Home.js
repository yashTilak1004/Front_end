//also a login page
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from "./../Header";
import Footer from "./../Footer";
import "../../change.css";

import AuthContext from "./AuthContext.js";

function Home() {
    const navigate = useNavigate();
    const [requsername,setUsername] = useState('');
    const [reqpassword,setPassword] = useState('');

    const clickHandler = async (e) => {
        e.preventDefault();

        // Uncomment this once the back end is enabled

        // try {

        //     const res = await axios.post(
        //     // "http://localhost:5000/user/login",        {

        //     "https://mw-six.vercel.app/user/login",        {
        //       username: requsername,
        //       password: reqpassword
        //     },
        //     {
        //       credentials: "include",
        //       mode:"cors"
        //     }
        //   );

        //   if (res.status === 200) {

        //     console.log(res.data);

        //     localStorage.setItem('user',res.data.username)
        //     localStorage.setItem('role',res.data.role)

        //     console.log(localStorage);
        //     if(res.data.role === "admin")
        //       navigate('/Admin');
        //     else
        //       navigate('/User');
        //   }
        // } catch(error) {
        //   console.log(" error" + error);
        // } finally {
        //     console.log("in finally");
        // }

        if (requsername.includes("admin")) {

        localStorage.setItem('user', "admin")
        localStorage.setItem('role', "admin")
        console.log(localStorage);
        navigate('/Admin');
        } else {
            localStorage.setItem('user', "non-admin")
            localStorage.setItem('role', "non-admin")
            console.log(localStorage);
            navigate('/User');
        }
      }
  return (
    <div className="container-fluid">
      <Header />
      <center>
        <div className="row justify-content login">
          <div className="col-md-4 offset-lg-4">
            <div className="card shadow-lg mt-5">
              <div
                className="card-header text-light"
                style={{ backgroundColor: "#282c34" }}
              >
                Login Here
              </div>
              <div className="card-body">
                <form>
                  <div className="form mb-3 text-dark">
                    <input type="text" className="form-control" id="username" onChange={(e) => {setUsername(e.target.value)}}/>
                    <label htmlFor="username">User Name</label>
                  </div>
                  <div className="form mb-3 text-dark">
                    <input
                      type="password"
                      className="form-control"
                      id="Password"
                      onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <label htmlFor="Password">Password</label>
                  </div>
                  <div className="d-grid  vs mb-2 bg-black">
                  <button  onClick={clickHandler} className="btn text-white" type="button">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </center>
      <Footer />
    </div>
  );
}
export default Home;
