export type ArtworkOrientation = "landscape" | "portrait";
export type Artwork = {
    id: string;
    title: string;
    imageSrc: string;
    medium: string;
    assignment: string;
    description: string;
    animationVariant?: "fadeInLeft" | "fadeInDown" | "fadeInUp";
    orientation: ArtworkOrientation;
};


export const artworks: Artwork[] = [
    {
        "id": "state-machine",
        "title": "State Machine",
        "imageSrc": "/faizaan-art_app-portfolio/art/state_machine.png",
        "assignment": "Personality Project",
        "medium": "Color Pencils",
        "description": "Probably my most favorite art piece that I've made. It represents how I work in a somewhat structured yet chaotic way.\nA state machine is literally a model where a system exists in defined states and changes behavior based on inputs/transitions. That idea mirrors how I operate and approach problem-solving.\nThe control panel and monitor represent my interest in programming and logical problem-solving. The server room both literally represents web networking and figuratively represents structure and system infrastructure. The nuclear reactor adds onto that idea, showing how sometimes I approach problems unconventionally but functional rather than following a clean and expected path. In the field of engineering, a lot of things often are way more complex than you would initially think.\nI used layering of colors and shading to make the colors stand out more and fade well together. I also did short even strokes for the grass and other background elements. Some contrast and emphasis was used.\nFun Fact: The idea of this website itself even reflects the concept of this piece! Instead of using a template-based platform like Google Sites, I built the site from scratch using ReactJS (https://react.dev/) and Framer Motion (https://motion.dev/), allowing for much more freedom and creativity.",
        "animationVariant": "fadeInLeft",
        "orientation": "portrait"
    },
    {
        "id": "electric-passage",
        "title": "Electric Passage",
        "imageSrc": "/faizaan-art_app-portfolio/art/electric_passage.png",
        "assignment": "Space In Perspective Project",
        "medium": "Water Color",
        "description": "Electric Passage shows an urban space that is meant to feel futuristic while also in the present. The single point perspective and the use of purple as neon lights help guide the viewer inwards. The loose, expressive watercolor emphasizes energy and motion, with an abstract look to make the space feel more active and atmospheric. The use of orthogonal lines as a structural guide helped me to establish depth and overlapping forms.\nIf I could do this project again, I would probably refine the perspective and lines just a little bit more before painting. I would also try to spend more time with color constrasting to enhance the purple neon glow effect and make it more separate to other foreground elements.",
        "animationVariant": "fadeInDown",
        "orientation": "landscape"
    },
    {
        "id": "sphinx-of-hatshepsut",
        "title": "Sphinx of Hatshepsut",
        "imageSrc": "/faizaan-art_app-portfolio/art/sphinx_of_hatshepsut.png",
        "assignment": "MET Project",
        "medium": "Pencil Long Study",
        "description": "This drawing is a long study of the Sphinx of Hatshepsut at the Metropolitan Museum of Art. I focused on the contrast between the calm, idealized human face and the powerful lion's body, paying attention to how smooth and rough textures interact with light across the surface. The sculpture's symmetrical pose and grounded form represent authority, while traces of color and facial features reflect Hatshepsut's identity as a female pharaoh that's also calm and controlled.\nSeeing and studying the piece in person shows me how ancient Egyptian artists used form and symbolism carefully to communicate power, identity, and control.",
        "animationVariant": "fadeInUp",
        "orientation": "landscape"
    }
]