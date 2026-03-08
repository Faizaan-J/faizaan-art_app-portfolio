import { motion } from "framer-motion";

import { router } from "../../Router/Router";
import NavButton from "./NavButton";

const createNavButtonsFromRouter = () => {
    const rootRoute = router[0];

    if (!rootRoute.children) return null;

    return rootRoute.children.map((route, index) => {
        if (!route.path || !route.handle || typeof route.handle.navName !== "string") return null;

        return (
            <li className="nav-li" key={index}>
                <NavButton key={index} to={route.path} name={route.handle.navName} />
            </li>);
    });
};

interface PropTypes {
    isOpen: boolean;
}

const NavButtonContainer = ({ isOpen }: PropTypes) => {
    return (
        <motion.ul
            initial={false}
            className="nav-button-container"
            animate={{
                maxWidth: isOpen ? ["0px", "0px", "1000px"] : ["1000px", "0px", "0px"],
                opacity: isOpen ? [0, 0, 1] : [1, 0, 0],
                filter: isOpen ? ["blur(10px)", "blur(10px)", "blur(0px)"] : ["blur(0px)", "blur(10px)", "blur(10px)"],
                visibility: isOpen ? ["hidden", "hidden", "visible"] : ["visible", "hidden", "hidden"],
                overflow: isOpen ? "visible" : "hidden",
            }}
            transition={{
                maxWidth: { duration: isOpen ? 0.4 : 0.8 },
                opacity: { duration: 0.6 },
                visibility: { duration: 0.6 },
                filter: { duration: isOpen ? 0.6 : 0.8 },
            }}
        >
            {createNavButtonsFromRouter()}
        </motion.ul>
    )
}

export default NavButtonContainer;