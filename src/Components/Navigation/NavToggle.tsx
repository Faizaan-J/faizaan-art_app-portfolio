interface PropTypes {
    isOpen: boolean;
    setisOpen: (isOpen: boolean) => void;
}

const NavToggle = ({ isOpen, setisOpen }: PropTypes) => {
    return (
        <button className={`nav-toggle${isOpen ? " active" : ""}`} onClick={() => setisOpen(!isOpen)}>
            <img src="/faizaan-art_app-portfolio/hamburger.svg" alt="Menu Toggle" />
        </button>
    )
}

export default NavToggle;