import { useLocation } from "react-router";

const ErrorPage = () => {
    const location = useLocation();

    return (
        <>
            <h1 style={{ color: "red", fontWeight: "bold" }}>Error</h1>
            <p>Page <b style={{scale: 2, display: "inline-block"}}>{location.pathname}</b> does not exist.</p>
        </>
    )
}

export default ErrorPage;
