import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/login", {
                email: email,
                password: password,
            });
            console.log('asdfasdfas');
            history('/dashboard');
        } catch (error) {
            console.log(error);
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="hero min-h-screen bg-orange-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={Auth}>
                            <div className="card-body">
                                <p>{msg}</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" value={email} onChange={ (e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" value={password} onChange={ (e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login