import React, { useState } from "react";
import './LoginForm.css';

export function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [updateText, setUpdateText] = useState([]);
    // const [loggedInUser, setLoggedInUser] = useState("");


    const submit = (e) => {
        e.preventDefault();

        if (email && password) {
            const details = {
                name: name,
                email: email,
                password: password
            }

            setUpdateText([...updateText, details]);
            setName("");
            setEmail("");
            setPassword("");
            localStorage.setItem('details', JSON.stringify(details))
        } else {
            alert('invalid details');
        }

    }

    // const handleLogout = () => {
    //     setLoggedInUser(null)
    //     localStorage.setItem('loggedInUser', null);
    //     setName("")
    //     setEmail("")
    //     setPassword("")
    // }

    return (
        <>
            <section className="container">
                <form onSubmit={submit}>
                    <fieldset>
                        <div className="usernameDiv">
                            <label htmlFor="name" className="input">Name</label>
                            <input type="text" name="name" id="name" className='inputName input' value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </div>
                        <div className="usernameDiv">
                            <label htmlFor="email" className="input">Email</label>
                            <input type="text" name="email" id="email" className='inputName input' value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div className="passwordDiv">
                            <label htmlFor="password" className="input">Password</label>
                            <input type="password" name="password" id="password" className='inputName input' value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        </div>
                        <div className="btnDiv">
                            <button className="btn" type="submit">Login</button>
                        </div>
                    </fieldset>

                </form>
                <div>
                    {
                        updateText.map((data) => {
                            return (
                                <>
                                    <div className="logoutDiv">
                                        <h1 className="welcomeHeading">Welcome, {data.name}!</h1>
                                        {/* <div>
                                            <button onClick={handleLogout} className="logoutBtn">Log Out</button>
                                        </div> */}
                                    </div>

                                </>
                            )
                        })
                    }
                </div>

            </section>

        </>
    )
}