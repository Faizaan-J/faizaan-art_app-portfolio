import { useLocation } from "react-router";

import NavButton from "../Components/Navigation/NavButton";

import "./ErrorPage.css";

const ErrorPage = () => {
    const location = useLocation();

    return (
        <>
            <h1 className="error-title">Error</h1>
            <ul className="error-message">
                <li><span>Page </span></li>
                <li className="error-pathname"><span>{location.pathname}</span></li>
                <li><span> does not exist.</span></li>
            </ul>
            <span className="back-to-home-container">
                <NavButton to="/" name="Go back to home" />
            </span>
        </>
    )
}

export default ErrorPage;
