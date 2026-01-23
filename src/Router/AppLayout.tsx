import { useOutlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";

import Navigation from "../Components/Navigation/Navigation";

const AppLayout = () => {
  const location = useLocation();
  const element = useOutlet();

  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          className="main"
          initial={{ opacity: 0, transform: "translateX(-15%)" }}
          animate={{ opacity: 1, transform: "translateX(0%)" }}
          exit={{ opacity: 0, transform: "translateX(15%)" }}
          key={location.pathname}
        >
          {element}
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default AppLayout;