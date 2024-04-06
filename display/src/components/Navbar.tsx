import './Navbar.css'

interface Props {
    toggleScreen: (index: number) => void;
    screen: number
}
function Navbar(props: Props) {
    return (
        <nav className="navbar">
            <div className={props.screen === 0 ? "navSection active-navSection" : "navSection"}
                 onClick={() => props.toggleScreen(0)}>
                <p>Saber</p>
            </div>

            <div className={props.screen === 1 ? "navSection active-navSection" : "navSection"}
                 onClick={() => props.toggleScreen(1)}>
                <p>Tooth</p>
            </div>
        </nav>
    );
}

export default Navbar;
