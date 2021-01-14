import React, { useState } from 'react'
import UserForm from '../components/UserForm/UserForm'
import { Link, withRouter } from 'react-router-dom';

function Login({ onSuccess, ...props }) {
    const [errors, setErrors] = useState(null);

    const saveToken = (token) =>{
        localStorage.setItem('USER_TOKEN', token);
    }

    const handleSubmit = async (formData) => {
        const payload = new URLSearchParams(formData.entries())
        const response = await fetch("/api/login", { method: "POST", body: payload })
        const body = await response.json()

        console.log("loginResponse", body)
        if (response.ok) {
        
            // handle login success
            saveToken(body.token);
            setErrors(null)
            onSuccess(body.token)
            props.history.push('/');
        } else {
            // handle login error
            setErrors(body.errors)
        }
    }

    return (
        <div className="container">
            <div clasNames="row mt-3">
                <div className="col-7">
                    <UserForm login onSubmit={handleSubmit} errors={errors}/>

                    <hr/>
                    <div>
                        If you haven't created an account. <Link to="/register">Create a new account</Link>.
                    </div>
                    <div>
                        Return to <Link to="/">Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)