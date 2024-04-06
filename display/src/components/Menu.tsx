import "./Menu.css"
import Ticket from "./Ticket"
import ItemGrid from "./ItemGrid"

interface Props {
    screen: number
}

function Menu(props: Props) {
    return (
        <div className={props.screen === 1 ? "menuScreen" : "hidden"}>
            <Ticket/>
            <ItemGrid/>
        </div>
    );
}

export default Menu;
