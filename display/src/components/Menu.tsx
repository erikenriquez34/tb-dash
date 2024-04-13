import "./Menu.css"
import Ticket from "./Ticket/Ticket"
import ItemGrid from "./ItemGrid/ItemGrid"

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
