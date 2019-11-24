import React from 'react';

function Login() {
    return (
        <form className="container">
            <div className="form-group">
                <label for="email">Email Address:</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="passward" className="form-control" id="pwd" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
}

export default Login;