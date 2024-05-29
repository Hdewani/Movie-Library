import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const handleLogin = (e) => {
        e.preventDefault()
        const loggedUser = JSON.parse(localStorage.getItem('user'))
        if (input.email === loggedUser.email && input.password === loggedUser.password) {
            alert("Logged In Successfully")
            navigate("/")
            localStorage.setItem('loggedIn', true)
            console.log(input)
        }
        else {
            alert("Invalid Credentials")
        }
    }
    return (
        <div
            className="align-items-center justify-content-center bg-fullwidth login-container" >
            <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
                <div className="col-md-4 p-lg-2 w-25">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">LogIn</h3>
                            <form onSubmit={handleLogin}>
                                <div className="mb-5">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control custom-rounded"
                                        id="email"
                                        value={input.email}
                                        required
                                        name='email'
                                        onChange={(e) =>
                                            setInput({
                                                ...input,
                                                [e.target.name]: e.target.value
                                            })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control custom-rounded"
                                        id="password"
                                        value={input.password}
                                        name='password'
                                        onChange={(e) =>
                                            setInput({
                                                ...input,
                                                [e.target.name]: e.target.value
                                            })}
                                        required

                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary w-50">Log In</button>
                                </div>
                                <h6 className="text-center mt-3">
                                    Don't Have Account? <a href="/signIn">Create new Account</a>
                                </h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;