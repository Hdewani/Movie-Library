import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handeSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(input));
        console.log(input)
        navigate("/login")
    }

    return (
        <div
            className="align-items-center justify-content-center bg-fullwidth login-container">
            <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
                <div className="col-md-4 p-5">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Create Account</h3>
                            <form onSubmit={handeSubmit}>
                                <div className="mb-5">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        name='name'
                                        type="text"
                                        className="form-control custom-rounded"
                                        id="name"
                                        value={input.name}
                                        onChange={(e) =>
                                            setInput({
                                                ...input,
                                                [e.target.name]: e.target.value
                                            })}
                                        required
                                    />
                                </div>
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
                                <div className="mb-5">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control custom-rounded"
                                        id="password"
                                        name="password"
                                        value={input.password}
                                        required
                                        onChange={(e) =>
                                            setInput({
                                                ...input,
                                                [e.target.name]: e.target.value
                                            })}
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary w-50">Sign In</button>
                                </div>
                                <h6 className="text-center mt-3">
                                    Already have an Account? <a href="/login">Login Here</a>
                                </h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
