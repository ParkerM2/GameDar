import React from 'react'

function UserForm({ login, errors, onSubmit }) {

    const handleSubmit = (event) => {
        event.preventDefault()
        if (typeof onSubmit === 'function') {
            onSubmit(new FormData(event.target))
             
        }
    }

    return (
        <div>
            <div className="text-danger">
                { errors }
            </div>
            <form onSubmit={handleSubmit}>
                { login || (
                    <div className="form-group">
                        <label htmlFor="userName">Full name:</label>
                        <input type="text" className="form-control" name="user_name" id="userName" placeholder="Full name" />
                    </div>
                )}
                
                <div className="form-group">
                    <label htmlFor="email">Email address: (*)</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password: (*)</label>
                    <input type="password" name="user_password" className="form-control" id="password" placeholder="Password" required />
                </div>

                { login || (
                    <div className="form-group">
                        <label htmlFor="passwordConfirmation">Confirm password: (*)</label>
                        <input type="password" className="form-control" name="passwordConfirmation" id="passwordConfirmation" placeholder="Password Confirmation" required />
                    </div>
                )}
                
                <button type="submit" className="btn btn-primary">{ login ? "Log In" : "Register" }</button>
            </form>
        </div>
    )
}

export default UserForm