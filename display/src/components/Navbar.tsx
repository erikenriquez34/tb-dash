import './Navbar.css'
import NavSection from "./NavSection";
function Navbar() {
    return (
        <div className="navbar">
            <NavSection title={"Saber"}/>
            <NavSection title={"Tooth"}/>
        </div>
    );
}

export default Navbar;
