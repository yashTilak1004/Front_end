import React from "react";
const Userpart = ()=>
{   var flag=0;
    var h1_code='<h5 id="abc">Enter an option</h5>';
    if(flag===0)
    {
        flag=1;
        return (<div className="col-lg-10 " id="abc">
        <table className="table" id="this" style={{marginTop:"10px",fontSize:"18px",marginBottom:"10px",padding:"5px",borderStyle:"solid"}}>
            <tr>
                <td>University</td>
                <td>Research Name</td>
                <td>Starting Year</td>
                <td>Ending Year</td>
                <td>Grant Provided</td>
                <td>Link</td>
            </tr>
            <tr>
                <td>IIT H</td>
                <td>AI</td>
                <td>2023</td>
                <td>2025</td>
                <td>1000000</td>
                <td><a href="Example.html">IITH-research</a></td>
            </tr>
            <tr>
                <td>IIT B</td>
                <td>Mineral Engineering</td>
                <td>2023</td>
                <td>2026</td>
                <td>1200000</td>
            </tr>
            <tr>
                <td>IIT C</td>
                <td>CSE</td>
                <td>2023</td>
                <td>2026</td>
                <td>4000000</td>
            </tr>
            <tr>
                <td>IIT B</td>
                <td>CSE</td>
                <td>2023</td>
                <td>2024</td>
                <td>250000</td>
            </tr>
        </table>
        </div>);
    }
    else
    {
        flag=0;
        document.getElementById('abc').innerHTML=h1_code;
    }
}

export default Userpart;