import React, { useState } from 'react'

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onClick = async () => {
        var url = process.env.REACT_APP_API_URL + '/api/user/login';
        console.log('url', url)
        const data = {
            "username": username,
            "password": password
        }

        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const final = await response.json();
        setToken(final.status);
    };

    const setInputValue = {
        username: setUsername,
        password: setPassword
    }

    const onInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setInputValue[name](value);
    }

    return (
        <div className="Login-form">
            <h2>Log in</h2>
            <label htmlFor="username">Username:</label> <br />
            <input type="text" value={username} onChange={(e) => onInputChange(e)} name="username" /> <br />
            <label htmlFor="password">Password:</label> <br />
            <input type="password" name="password" id="userPass" value={password} onChange={(e) => onInputChange(e)} /> <br />
            <button onClick={onClick}>Submit</button>
        </div>
    )

}

export default Login