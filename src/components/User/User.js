import React, { useState } from "react";
import '../../change.css';
import Header from "../Header";
import Footer from "../Footer";
import UpdateUserDetails from "../UpdateUserDetails";
import Userpart from "./Userpart";
import UserName from "./UserName";

const Mild={
    marginTop:"10px",
    marginBottom:"10px",
    color:"Black",
    fontSize:"18px"
};

const UPDATE = "update";
const HISTORY = "history";
const UNIVERSITY = "university";


function User()
{
    function onCurrentClick(value)
    {
        // e.preventDefault();
        setCurrent(value);
    }
    const [current, setCurrent] = useState("");

    return (<div className='container-fluid'>
        <Header/>
        <center>
        <div className="col-md-12">
            <ul className="list-group list-group-horizontal offset-2 "style={Mild}>
                <li className="list-group-item col-md-2 ">Search</li>
                <div className="col-md-2">
                    <button type="button" onClick={() => onCurrentClick(HISTORY)} className="list-group-item list-group-item-action I">History</button>
                </div>
                <div className="col-md-2">
                    <button type="button" onClick={() => onCurrentClick(UNIVERSITY)} className="list-group-item list-group-item-action I">University</button>
                </div>
                <div className="col-md-2">
                    <button type="button" onClick={() => onCurrentClick(UPDATE)} className="list-group-item list-group-item-action I">Update Details</button>
                </div>
                <div className="col-md-2">
                    <button type="button" className="list-group-item list-group-item-action I">Report Issue</button>
                </div>
            </ul>
        </div>
        {current === "" && <h4 id='abc'>Press an Option</h4>}
        {current === HISTORY && <Userpart/>}
        {current === UNIVERSITY && <h4 id='abc'>No university data available yet</h4>}
        {current === UPDATE && <UpdateUserDetails/>}
        </center>

        <Footer/>
    </div>);
}
export default User;