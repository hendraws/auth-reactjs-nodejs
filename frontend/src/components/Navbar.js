import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const history = useNavigate();


    const Logout = async() => {
        try {
            await axios.delete('http://localhost:5000/logout');
            history('/');
        } catch (error) {
            console.log(error);
        }    
    }
    return (
        <div>
            <div className="navbar bg-base-300">
                <div className='container mx-auto'>
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li><button onClick={Logout} className="btn btn-secondary">Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar