function ChangePassword()
{
    const Password=`<div className="row justif-content-center login" id="abc">
    <div className="col-md-4 offset-lg-4">
    <div className="card shadow-lg mt-5">
        <div className="card-header text-light" style={{'backgroundColor': '#282c34'}}>Login Here</div>
        <div className="card-body">
        <form>
            <div className="form mb-3 text-dark">
            <input type="text" className="form-control" id="username" />
            <label htmlFor="username">User Name</label>
            </div>
            <div className="form mb-3 text-dark">
            <input type="password" className="form-control" id="Password" />
            <label htmlFor="Password">Password</label>
            </div>
            <div className="d-grid  vs mb-2 bg-black">
            <a href="admin.html" className="btn text-white" role="button">Login</a>
            </div>
        </form>
            </div>
        </div>
        </div>
    </div> `
document.getElementById('abc').innerHTML=Password;
}
export default ChangePassword;