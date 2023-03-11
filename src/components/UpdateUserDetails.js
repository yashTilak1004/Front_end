import React from "react";
function UpdateUserDetails()
{
    return(
    <div className="row justify-content login" id="abc">
    <div className="col-md-4 offset-lg-4">
    <div className="card shadow-lg mt-5">
        {/* <div className="card-header text-light" style={{'backgroundColor': '#282c34'}}>Update Password</div> */}
        <div className="card-body">
        <form>
            <div className="form mb-3 text-dark">
                <input type="password" className="form-control" id="old_pwd" />
                <label htmlFor="old_password">Old Password</label>
            </div>
            <div className="form mb-3 text-dark">
                <input type="password" className="form-control" id="new_pwd" />
                <label htmlFor="new_password">New Password</label>
            </div>
            <div className="d-grid  vs mb-2 bg-black">
                <a href="admin.html" className="btn text-white" role="button">Update Password</a>
            </div>
        </form>
            </div>
        </div>
        </div>
    </div>
    );
    // document.getElementById('abc').innerHTML=Password;
}
export default UpdateUserDetails;