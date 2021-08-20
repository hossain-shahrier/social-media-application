import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./registration.css";
import { registration } from "../../FetchData";

export default function Registration() {
    const history = useHistory();
    const [user, setUser] = useState({
        username: "",
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        gender: "",
    });

    const change = (e) => {
        const attr = e.target.name;
        const val = e.target.value;
        setUser({ ...user, [attr]: val });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        registration(user);
        history.push("/login");
    };

    return (
        <div className="registration">
            <div className="registrationWrapper">
                <div className="registrationLeft">
                    <h3 className="registrationLogo">Friend-Finder</h3>
                    <span className="registrationDesc">
                        Connect with friends and the world around you on
                        Friend-Finder.
                    </span>
                </div>
                <div className="registrationRight">
                    <div className="registrationBox">
                        <input
                            placeholder="Username"
                            type="text"
                            className="registrationInput"
                            name="username"
                            value={user.username}
                            onChange={change}
                        />
                        <input
                            placeholder="Name"
                            type="text"
                            className="registrationInput"
                            name="name"
                            value={user.name}
                            onChange={change}
                        />
                        <input
                            placeholder="Email"
                            type="email"
                            className="registrationInput"
                            name="email"
                            value={user.email}
                            onChange={change}
                        />
                        <input
                            placeholder="Phone no"
                            type="tel"
                            className="registrationInput"
                            name="phone"
                            value={user.phone}
                            onChange={change}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            className="registrationInput"
                            name="password"
                            value={user.password}
                            onChange={change}
                        />
                        <input
                            placeholder="Confirm Password"
                            type="password"
                            className="registrationInput"
                            name="cpassword"
                            value={user.cpassword}
                            onChange={change}
                        />
                        <select
                            className="registrationInput"
                            name="gender"
                            value={user.gender}
                            onChange={change}
                        >
                            <option defaultValue>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <button className="loginButton" onClick={onSubmit}>
                            Sign Up
                        </button>

                        <button className="loginRegisterButton">
                            <Link style={{ color: "white" }} to={`/login`}>
                                Log into Account
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
