import './Navbar.css'
interface Props {
    title: string;
}
function NavSection(props: Props) {
    return (
        <div className="navSection">
            <p>{props.title}</p>
        </div>
    );
}

export default NavSection;
