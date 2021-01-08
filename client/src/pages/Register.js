import React, { useState } from 'react'
import UserForm from '../components/UserForm/UserForm'

function Register({ onSuccess }) {
    const [errors, setErrors] = useState(null)

    const handleSubmit = async (formData) => {
        const response = await fetch("/api/register", { method: "POST", body: formData})
        const body = await response.json()

        console.log("registerResponse", body)
        if (response.ok) {
            // handle register success
            setErrors(null)
            onSuccess(body.token)
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
                    <UserForm onSubmit={handleSubmit} errors={errors}/>

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

export default Register