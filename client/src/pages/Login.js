import React from 'react'
import UserForm from '../components/UserForm/UserForm'
import { Link } from 'react-router-dom';

function Login() {
    const handleSubmit = (formValues) => {
        console.log("login", formValues)
    }

    return (
        <div className="container">
            <div clasNames="row mt-3">
                <div className="col-7">
                    <UserForm login onSubmit={handleSubmit}/>

                    <hr/>
                    <div>
                        If you haven't had an account. <Link to="/register">Create a new account</Link>.
                    </div>
                    <div>
                        Return to <Link to="/">Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login