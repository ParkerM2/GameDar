import React from 'react'
import UserForm from '../components/UserForm/UserForm'

function Register() {
    const handleSubmit = (formValues) => {
        console.log("register", formValues)
    }
    return (
        <div className="container">
            <div className="row mt-5" style={{ fontSize: '10px' }}>
                <div className="col-4 login-left">
                </div>
                <div className="col-5 mt-2">
                    <UserForm onSubmit={handleSubmit}/>

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