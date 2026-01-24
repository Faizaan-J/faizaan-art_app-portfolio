import { motion } from "motion/react";
import type { MotionProps } from "motion/react";

import "./ArtCard.css";

type PropTypes = {
    title: string;
    imageSrc: string;
    assignment?: string;
    medium?: string;
    description?: string;
    className?: string;
} & MotionProps;

const ArtCard = ({ title, imageSrc, medium, assignment, className, ...motionProps }: PropTypes) => {
    return (
        <motion.button className={`art-card ${className || ""}`}
            {...motionProps}
        >
            <img src={imageSrc} alt={title} className="art-image" />
            <div className="card-content">
                <h1 className="art-title">{title}</h1>
                <h2 className="art-metadata">{medium} · {assignment}</h2>
            </div>
        </motion.button>
    )
}

export default ArtCard;