import { Link, useLocation } from "react-router";

interface PropTypes {
    to: string;
    name: string;
}

const NavButton = ({ to, name }: PropTypes) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li className={`nav-button${isActive ? " active" : ""}`}>
            <Link className="nav-link" to={to}>{name}</Link>
        </li>
    )
}

export default NavButton;