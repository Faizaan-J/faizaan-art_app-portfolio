import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { router } from '../../Router/Router';

import NavToggle from './NavToggle';
import NavButton from './NavButton';

import './Navigation.css';

const createNavButtonsFromRouter = () => {
    const rootRoute = router[0];

    if (!rootRoute.children) return null;

    return rootRoute.children.map((route, index) => {
        if (!route.path || !route.handle || typeof route.handle.navName !== 'string') return null;

        return (
            <NavButton
                key={index}
                to={route.path}
                name={route.handle.navName}
            />
        );
    })
}

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(true);
    const nodeRef = useRef(null);

    return (
        <nav className={`navigation ${isOpen ? "open" : "closed"}`}>
            <NavToggle isOpen={isOpen} setisOpen={setIsOpen} />

            <CSSTransition
            in={isOpen}
            timeout={600}
            classNames="nav-list"
            unmountOnExit={false}
            nodeRef={nodeRef}
            >
                <ul ref={nodeRef} className="nav-button-container">
                    {createNavButtonsFromRouter()}
                </ul>
            </CSSTransition>
        </nav>
    )
}

export default Navigation;