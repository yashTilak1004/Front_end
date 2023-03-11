import React, { useState } from "react";
import '../Change.css';
import Header from "./Header";
import Footer from "./Footer";
import ChangePassword from "./changenPW";
import Userpart from "./Userpart";
import UserName from "./UserName";
const Mild={
    marginTop:"10px",
    marginBottom:"10px",
    color:"Black",
    fontSize:"18px"
};
// let check = false;




function User()
{
    const Table= ()=>
    {
        setCheck(!check)
    }
    function University()
    {
        setCheck(check);
    }    
    const [check, setCheck] = useState(false);
    return (<div className='container-fluid'>
        <Header/>
        <center>
        <div className="col-md-12">
            <ul className="list-group list-group-horizontal offset-2 "style={Mild}>
                <li className="list-group-item col-md-2 ">Search</li>
                        
                <div className="col-md-2">
                    <button type="button" onClick={Table} className="list-group-item list-group-item-action I">History</button>
                </div>
                <div className="col-md-2">
                    <button type="button" onClick={University} className="list-group-item list-group-item-action I">Change username</button>
                </div> 
                <div className="col-md-2">
                    <button type="button" onClick={ChangePassword} className="list-group-item list-group-item-action I">Change Password</button>
                </div>
                <div className="col-md-2">
                    <button type="button" className="list-group-item list-group-item-action I">Report Issue</button>
                </div>
            </ul>
        </div>
        {!check && <h4 id='abc'>Press an Option</h4>}
        {check && <Userpart/>}
        
        </center>   

        <Footer/>
    </div>);
}
export default User;