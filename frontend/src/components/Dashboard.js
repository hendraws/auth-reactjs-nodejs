import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expired, setExpired] = useState('');
    const [users, setUsers] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        refreshToken();
        getUsers();
    }, [])

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);

            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpired(decoded.exp);
        } catch (error) {
            if (error.response) {
                history('/');
            }
        }
    }

    // buat inthence dari axios
    const axiosJwt = axios.create();

    // untuk melakukan pengecekan sebelum request
    axiosJwt.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expired * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpired(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    })

    const getUsers = async () => {
        const response = await axiosJwt.get("http://localhost:5000/users", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setUsers(response.data);
    };

    return (
        <div className='container mx-auto mt-5'>
            <h1 className="">Welcome back {name}</h1>
            <button className="btn btn-primary" onClick={getUsers}>Get Users</button>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th>{ index + 1}</th>
                                <td>{ user.name }</td>
                                <td>{ user.email}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard