import { motion, stagger } from "motion/react";
import { artworks } from "../../../Data/Artworks";

import ArtCard from "../../../Components/ArtCard/ArtCard";
import ArtModal from "../../../Components/ArtModal/ArtModal";

import "./ArtAppreciationPortfolio.css";
import { useState } from "react";

const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },

};
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};
const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};
const animations = {
    fadeInDown,
    fadeInUp,
    fadeInLeft
}
const animation = { type: "spring" as const, stiffness: 100, damping: 15 }

type AnimationKey = keyof typeof animations;

const createArtworkCards = (setChosenArtwork: (id: string) => void) => {
    return artworks.map((artwork, index) => (
        <ArtCard layout layoutId={artwork.id} title={artwork.title} imageSrc={artwork.imageSrc} setChosenArtwork={setChosenArtwork} assignment={artwork.assignment} medium={artwork.medium} variants={animations[(artwork.animationVariant as AnimationKey) || 'fadeInDown']} transition={animation} id={artwork.id} key={index} />
    ));
}

const ArtAppreciationPortfolio = () => {
    const [chosenArtworkId, setChosenArtworkId] = useState<string | null>(null);

    const setChosenArtworkIdNull = () => setChosenArtworkId(null);

    return (
        <>
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeInDown}
                transition={animation}
                className="art-title"
            >
                These are three pieces I created for Art Appreciation.
            </motion.h1>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { delayChildren: stagger(0.2, { startDelay: 0.2 }) } },
                }}
                transition={animation}
                className="art-grid"
            >
                {createArtworkCards(setChosenArtworkId)}
            </motion.div>
            <ArtModal chosenId={chosenArtworkId} setChosenIdNull={setChosenArtworkIdNull} />
        </>
    )
}

export default ArtAppreciationPortfolio;