import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import '../../change.css';
function Register()
{
    return (
        <div className="container-fluid">
            <Header/>
            <center>
            <div className="col-md-8" style={{marginBottom: '45px'}}>
                <div className="card shadow-lg mt-5">
                    <div className="card-header text-light " style={{backgroundColor: 'black'}}>Register Here</div>
                    <div className="card-body text-light" style={{backgroundColor: '#282c34'}}>
                    <form>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-row">
                        <div className="col">
                            <label htmlFor="text1">First Name</label>
                            <input type="text" className="form-control" id="text1" placeholder="First Name" />
                        </div>
                        <div className="col">
                            <label htmlFor="text2">Second Name</label>
                            <input type="text" className="form-control" id="text2" placeholder="Second Name" />
                        </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            </div>
                            <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                        </div>
                        <div className="form-row">
                            <div className="col">
                            <label htmlFor="validationCustom03">City</label>
                            <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                            </div>
                            <div className="col">
                            <label htmlFor="validationCustom04">State</label>
                            <input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
                            </div>
                            <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05">Zip</label>
                            <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
                            </div>
                            <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <input type="password" className="form-control" id="Password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="Password">Rewrite Password</label>
                            <input type="password" className="form-control" id="Password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck2" required />
                                <label className="form-check-label" htmlFor="invalidCheck2">
                                Agree to terms and conditions
                                </label>
                            </div>
                            </div>
                            <button className="btn " type="submit" style={{backgroundColor: 'grey'}}>Submit form</button>
                        </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </center>
            <Footer/>
        </div>
    )
}
export default Register;