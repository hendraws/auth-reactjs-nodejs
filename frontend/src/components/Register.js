import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
            });
            console.log('asdfasdfas');
            history('/');
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
                        <form onSubmit={ Register }> 
                            <div className="card-body">
                                <p>{ msg }</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Nama</span>
                                    </label>
                                    <input type="text" placeholder="nama" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type="submit">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register