import { Link } from 'react-router';

import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/" className="nav-logo">Home</Link>
            <Link to="/art-appreciation-portfolio" className="nav-logo">Art Appreciation Portfolio</Link>
        </nav>
    )
}

export default Navigation;