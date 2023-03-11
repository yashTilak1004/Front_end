import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './../change.css'
import { Link } from 'react-router-dom';

const Menu={
    paddding:"5px",
    backgroundColor:"lightgrey",
    fontSize:"18px"
};
function List()
{
    return (<div className='container-fluid'>
        <Header/>
        <div className="row" >
        <aside className="col-lg-2 menubar" style={{marginTop:"15px",marginBottom:"15px",minHeight:"400px"}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{backgroundColor: 'Black',color:'white'}}>Filter</li>
                <a href='/' className="list-group-item list-group-item-action "style={Menu}>Programmes</a>
                <a href='/' className="list-group-item list-group-item-action "style={Menu}>University</a>
                <a href='/' className="list-group-item list-group-item-action "style={Menu}>Type</a>
                <a href='/' className="list-group-item list-group-item-action "style={Menu}>Region</a>
                <a href='/' className="list-group-item list-group-item-action "style={Menu}>Schemes</a>
            </ul>
        </aside>
        <div className="col-lg-10 customTable" style={{paddingTop:"10px"}}>
        <table className="table">
            <tbody><tr className="text-dark">
                <td>University</td>
                <td>Research Name</td>
                <td>Starting Year</td>
                <td>Ending Year</td>
                <td>Grant Provided</td>
                <td>Link</td>
            </tr>
            <tr className="text-dark">
                <td>IIT H</td>
                <td>AI</td>
                <td>2023</td>
                <td>2025</td>
                <td>1000000</td>
                <td><Link  to='/Example' className=" text-decoration-none" style={{color:"black",textDecoration:"none"}}>IITH-research</Link></td>
            </tr>
            <tr className="text-dark">
                <td>IIT B</td>
                <td>Mineral Engineering</td>
                <td>2023</td>
                <td>2026</td>
                <td>1200000</td>
            </tr>
            <tr className="text-dark">
                <td>IIT C</td>
                <td>CSE</td>
                <td>2023</td>
                <td>2026</td>
                <td>4000000</td>
            </tr>
            <tr className="text-white">
                <td>IIT B</td>
                <td>CSE</td>
                <td>2023</td>
                <td>2024</td>
                <td>250000</td>
            </tr>
            </tbody></table>
        <button type="button" >
            download CSV
        </button>
        </div>

        </div>
        <Footer/>
        </div>
        );
}
export default List;