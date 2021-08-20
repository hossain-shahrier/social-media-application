import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Logout from "./pages/login/Logout";
import EditProfile from "./pages/profile/EditProfile";
import Profile from "./pages/profile/Profile";
import Chat from "./pages/chat/Chat";
import VideoChat from "./pages/videoChat/VideoChat";
import FriendsProfile from "./pages/profile/FriendsProfile";
import Registration from "./pages/registration/Registration";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { logout, GetUser } from "./FetchData";
import { useCookies } from "react-cookie";
import { ExportCSV } from "./ExportCSV";
import { ContextProvider } from "./SocketContext";

function App() {
    const [user, setUser] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const fileName = "UserRegistrationInfo";

    let viewers = [{ email: user.email, password: user.password }];
    GetUser(setUser, "getUser/" + cookies.user);
    const loginFunction = (user) => {
        setCookie("user", user.id);
        setUser(user);
    };

    const logoutFunction = () => {
        removeCookie("user");
        logout(user);
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {cookies.user ? (
                        <Home user={user} />
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route exact path="/login">
                    {cookies.user ? (
                        <Home user={user} />
                    ) : (
                        <Login callback={loginFunction} />
                    )}
                </Route>
                <Route exact path="/logout">
                    {cookies.user ? (
                        <Logout callback={logoutFunction} />
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route exact path="/registration">
                    <Registration />
                </Route>
                <Route path="/excel">
                    {cookies.user ? (
                        <ExportCSV csvData={viewers} fileName={fileName} />
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/chat">
                    {cookies.user ? (
                        <Chat user={user} />
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/videocall">
                    {cookies.user ? (
                        <ContextProvider user={user}>
                            <VideoChat />
                        </ContextProvider>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route exact path="/profile">
                    {cookies.user ? <Profile /> : <Redirect to="/login" />}
                </Route>
                <Route exact path="/editProfile">
                    {cookies.user ? <EditProfile /> : <Redirect to="/login" />}
                </Route>
                <Route path="/profile/:id">
                    {cookies.user ? (
                        <FriendsProfile />
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="*">
                    <h3>404 not found</h3>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
