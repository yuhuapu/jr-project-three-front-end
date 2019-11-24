import React from "react";


function Signup() {
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
            <div className="form-group">
                <label for="repwd">Repeat Password:</label>
                <input type="password" className="form-control" id="repwd" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Signup;