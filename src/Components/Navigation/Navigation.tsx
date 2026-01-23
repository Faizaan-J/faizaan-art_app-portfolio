import { useState } from "react";
import { motion } from "framer-motion";

import { router } from "../../Router/Router";
import NavToggle from "./NavToggle";
import NavButton from "./NavButton";

import "./Navigation.css";

const createNavButtonsFromRouter = () => {
    const rootRoute = router[0];

    if (!rootRoute.children) return null;

    return rootRoute.children.map((route, index) => {
        if (!route.path || !route.handle || typeof route.handle.navName !== "string") return null;

        return <NavButton key={index} to={route.path} name={route.handle.navName} />;
    });
};

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <motion.nav
            initial={false}
            className="navigation"
            animate={{
                gap: isOpen ? "0.7em" : 0,
            }}
            transition={{ gap: { duration: 0.3 } }}
        >
            <NavToggle isOpen={isOpen} setisOpen={setIsOpen} />

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
        </motion.nav>
    );
};

export default Navigation;