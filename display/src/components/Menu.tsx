import "./Menu.css"
import Ticket from "./Ticket/Ticket"
import ItemGrid from "./ItemGrid/ItemGrid"
import {useState} from "react";

interface Props {
    screen: number
}

interface Item {
    name: string;
    quantity: number;
}

function Menu(props: Props) {
    const [ticketItems, setTicketItems] = useState<Item[]>([]);

    const handleAddToTicket = (name: string, quantity: number) => {
        setTicketItems((prevItems) => {
            const duplicate = prevItems.findIndex(item => item.name === name);
            if (duplicate !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[duplicate].quantity += quantity;
                return updatedItems;
            } else {
                return [...prevItems, {name, quantity}];
            }
        });
    };

    return (
        <div className={props.screen === 1 ? "menuScreen" : "hidden"}>
            <Ticket ticketItems={ticketItems} setTicketItems={setTicketItems}/>
            <ItemGrid onAddToTicket={handleAddToTicket} />
        </div>
    );
}

export default Menu;
