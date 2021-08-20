import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { login, Google } from "../../FetchData";
import { GoogleLogin } from "react-google-login";

export default function Login({ callback }) {
    const history = useHistory();

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        login({ email: email, password: password }, setUser);
        if (user.id) {
            callback(user);
            history.push("/");
        } else {
            history.push("/login");
        }
    };

    const responseGoogle = (response) => {
        Google(response.profileObj, callback);
        setTimeout(function () {
            history.push("/excel");
        }, 1000);

        // console.log(response);
        // console.log(response.profileObj);
        // console.log(response.profileObj.email);
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Friend-Finder</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on
                        Friend-Finder.
                    </span>
                </div>
                <div className="loginRight">
                    <form onSubmit={onSubmit}>
                        <div className="loginBox">
                            <input
                                placeholder="Email"
                                type="email"
                                className="loginInput"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                placeholder="Password"
                                type="password"
                                className="loginInput"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                className="loginButton"
                                type="submit"
                                value="Log In"
                            />
                            {/* <span className="loginForgot">
                                Forgot Password?
                            </span> */}
                            <GoogleLogin
                                className="loginRegisterButton"
                                clientId="24220924358-pmb7kpjejuilr520v19fuvgji8hd27tt.apps.googleusercontent.com"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                            />
                            <button className="loginRegisterButton">
                                <Link
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                    to={`/registration`}
                                >
                                    Create a New Account
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
