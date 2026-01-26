import { motion } from "motion/react";
import type { MotionProps } from "motion/react";

import "./ArtCard.css";

type PropTypes = {
    title: string;
    imageSrc: string;
    assignment: string;
    medium: string;
    id: string;
    setChosenArtwork: (id: string) => void;
} & MotionProps;

const ArtCard = ({ title, imageSrc, medium, assignment, id, setChosenArtwork, ...motionProps }: PropTypes) => {
    return (
        <motion.button 
            onClick={() => setChosenArtwork(id)}
            className={`art-card ${id || ""}`}
            {...motionProps}
        >
            <img src={imageSrc} alt={title} className="art-image" />
            <div className="card-content">
                <h1 className="art-title">{title}</h1>
                <h2 className="art-metadata">{medium} &#183; {assignment}</h2>
            </div>
        </motion.button>
    )
}

export default ArtCard;