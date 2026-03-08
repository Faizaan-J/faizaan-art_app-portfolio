import { useState } from "react";
import { motion } from "framer-motion";

import NavToggle from "./NavToggle";
import NavButtonContainer from "./NavButtonContainer";

import "./Navigation.css";

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
            <NavButtonContainer isOpen={isOpen} />
        </motion.nav>
    );
};

export default Navigation;