import React from 'react';
const UserName=function ()
{
    return <div className='container-fluid'>
        <div className='col md-5 offset-2'>
            <div className='card shadow-lg mt-5'>
                <div className="card-header text-light " style={{backgroundColor: 'black'}}>Change Username</div>
                    <div className="card-body text-light" style={{backgroundColor: '#282c34'}}>
                        <form>
                            <div className='form-group'>
                            <label htmlFor="Username">New Username</label>
                            <button className="btn " type="submit" style={{backgroundColor: 'grey'}}>Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
}
export default UserName;