import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../change.css';

function Admin()
{
    return (<div className="container-fluid">
        <Header/>
        <div className="col-md-12">
            <ul className="list-group list-group-horizontal offset-2 " style={{paddingTop:"10px",paddingBottom:"10px",fontSize:"18px"}}>
                <li className="list-group-item ">Search</li>
                <div className="col-md-2">
                    <button type="button" onClick="" className="list-group-item list-group-item-action I">Research List</button>
                </div>
                <div className="col-md-2">
                    <button type="button" onClick="University()" className="list-group-item list-group-item-action I">University</button>
                </div>
                <div className="col-md-2">
                    <button type="button" onClick="" className="list-group-item list-group-item-action I">Cost</button>
                </div>
                <div className="col-md-2">
                    <button type="button" onClick="" className="list-group-item list-group-item-action I">Region</button>
                </div>
                <div className="col-md-2">
                    <button type="button" onClick="" className="list-group-item list-group-item-action I">Scheme</button>
                </div>
            </ul>
        </div>
        <Footer/>
    </div>);
}
export default Admin;