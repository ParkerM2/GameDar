import React from 'react'

class UserForm extends React.Component {
    state = {
        userName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.props.onSubmit) {
            if (this.props.login) {
                this.props.onSubmit({
                    email: this.state.email,
                    password: this.state.password
                })
            } else {
                this.props.onSubmit(this.state)
            }
        }
    }

    update = (field) => {
        return (event) => this.setState({ [field]: event.target.value })
    }

    render() {
        const { login, errors } = this.props

        return (
            <div>
                <div className="text-danger">
                    { errors }
                </div>
                <form onSubmit={this.handleSubmit}>
                    { login || (
                        <div className="form-group">
                            <label htmlFor="userName">Full name:</label>
                            <input type="text" className="form-control" name="userName" id="userName" placeholder="Full name" value={this.state.userName} onChange={this.update('userName')}/>
                        </div>
                    )}
                    
                    <div className="form-group">
                        <label htmlFor="email">Email address: (*)</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" required value={this.state.email} onChange={this.update('email')}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password: (*)</label>
                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" required value={this.state.password} onChange={this.update('password')}/>
                    </div>

                    { login || (
                        <div className="form-group">
                            <label htmlFor="passwordConfirmation">Confirm password: (*)</label>
                            <input type="password" className="form-control" name="passwordConfirmation" id="passwordConfirmation" placeholder="Password Confirmation" required value={this.state.passwordConfirmation} onChange={this.update('passwordConfirmation')}/>
                        </div>
                    )}
                    
                    <button type="submit" className="btn btn-primary">{ login ? "Log In" : "Register" }</button>
                </form>
            </div>
        )
    }
}

export default UserForm