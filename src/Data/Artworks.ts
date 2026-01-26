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
        "description": "Im writing this later",
        "animationVariant": "fadeInLeft",
        "orientation": "portrait"
    },
    {
        "id": "electric-passage",
        "title": "Electric Passage",
        "imageSrc": "/faizaan-art_app-portfolio/art/electric_passage.png",
        "assignment": "Space In Perspective Project",
        "medium": "Water Color",
        "description": "Im writing this later",
        "animationVariant": "fadeInDown",
        "orientation": "landscape"
    },
    {
        "id": "sphinx-of-hatshepsut",
        "title": "Sphinx of Hatshepsut",
        "imageSrc": "/faizaan-art_app-portfolio/art/sphinx_of_hatshepsut.png",
        "assignment": "MET Project",
        "medium": "Pencil Long Study",
        "description": "Im writing this later",
        "animationVariant": "fadeInUp",
        "orientation": "landscape"
    }
]