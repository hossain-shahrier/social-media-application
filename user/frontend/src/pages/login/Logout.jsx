import { useHistory } from "react-router-dom";

export default function Logout({ callback }) {
    const history = useHistory();
    callback();
    setTimeout(function () {
        history.push("/login");
    }, 1000);
    return <div>successfully Logged out</div>;
}
