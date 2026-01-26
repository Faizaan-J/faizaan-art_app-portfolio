import { Link, useLocation } from "react-router";

interface PropTypes {
    to: string;
    name: string;
}

const NavButton = ({ to, name }: PropTypes) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link className={`nav-link${isActive ? " active" : ""}`} to={to}>{name}</Link>
    );
}

export default NavButton;