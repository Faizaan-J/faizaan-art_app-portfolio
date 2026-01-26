import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FocusTrap } from "focus-trap-react";
import { motion, stagger } from "motion/react";
import { artworks } from "../../Data/Artworks";
import type { Artwork } from "../../Data/Artworks";


import "./ArtModal.css";

interface PropTypes {
    chosenId: string | null;
    setChosenIdNull?: () => void;
}

const getPropertyById = (id: string | null, property: keyof Artwork): string | undefined => {
    if (id === null) return undefined;
    const artwork = artworks.find((artwork: Artwork) => artwork.id === id);
    return artwork ? artwork[property] : undefined;
}

const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
};

const ArtModal = ({ chosenId, setChosenIdNull }: PropTypes) => {

    useEffect(() => {
        const previousOverflow = document.body.style.getPropertyValue("overflow");
        document.body.style.setProperty("overflow", chosenId && "hidden" || previousOverflow);

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [chosenId]);

    const medium = getPropertyById(chosenId, "medium");
    const assignment = getPropertyById(chosenId, "assignment");

    return (
        createPortal(
            <div className={`modal-background ${chosenId ? "visible" : ""}`}>
                <FocusTrap active={chosenId !== null}>
                    <motion.div
                        layout
                        className={`modal ${getPropertyById(chosenId, "orientation") || ""}`}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="art-modal-title">
                        <button className="close-button" onClick={setChosenIdNull || (() => { })}>&#10006;</button>
                        <div className="art-image-wrapper">
                            <motion.img layout layoutId={chosenId || ""} key={chosenId || undefined} src={getPropertyById(chosenId, "imageSrc") || undefined} alt={getPropertyById(chosenId, "title") || ""} className="art-image-modal" />
                        </div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { delayChildren: stagger(0.2, { startDelay: 0.5 }) } },
                            }}
                            key={chosenId || undefined}
                            className="art-info"
                        >
                            <motion.h1 variants={fadeInDown} id="art-modal-title">{getPropertyById(chosenId, "title") || ""}</motion.h1>
                            <motion.h2 variants={fadeInDown} className="art-metadata">
                                {getPropertyById(chosenId, "medium") || ""} {medium && assignment && "\u00B7"} {getPropertyById(chosenId, "assignment") || ""}
                            </motion.h2>
                            <motion.p variants={fadeInDown} className="art-description">
                                {getPropertyById(chosenId, "description") || ""}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </FocusTrap>

            </div>
            , document.querySelector("#root")!)
    )
}

export default ArtModal;