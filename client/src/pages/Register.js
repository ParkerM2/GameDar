import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import UserForm from '../components/UserForm/UserForm'

function Register({ onSuccess, ...props }) {
    const [errors, setErrors] = useState(null);

    const saveToken = (token) =>{
        localStorage.setItem('USER_TOKEN', token);
    }

    const handleSubmit = async (formData) => {
        const payload = new URLSearchParams(formData.entries())
        const response = await fetch("/api/register", { method: "POST", body: payload})
        const body = await response.json()

        console.log("registerResponse", body)
        if (response.ok) {
            // handle register success
            setErrors(null)
            onSuccess(body.token)
            saveToken(body.token);
            alert('Signup successful!');
            props.history.push('/')
        } else {
            // handle register error
            setErrors(body.errors)
        }
    }

    return (
        <div className="container">
            <div className="row mt-5" style={{ fontSize: '10px' }}>
                <div className="col-4 login-left">
                </div>
                <div className="col-5 mt-2">
                    <UserForm onSubmit={handleSubmit} errors={errors} />

                    <hr/>
                    <div>
                        If you already have had an account. <a href="/login">Log in</a>.
                    </div>
                    <div>
                        Return to <a href="/">Home Page</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register);