import "./Ticket.css"
import TicketHeader from './TicketHeader';
import TicketItem from './TicketItem';
import TicketCheckout from "./TicketCheckout";

interface Item {
    name: string;
    quantity: number;
}

interface Props {
    ticketItems: Item[];
    setTicketItems: (items: Item[]) => void;
}

function Ticket(props : Props) {
    return (
        <div className="ticketContainer">
            <TicketHeader order={27}/>

            <div className="ticketItemContainer">
                {props.ticketItems.map(item => (
                    <TicketItem
                        name={item.name}
                        quantity={item.quantity}
                        price={3}
                    />
                ))}
            </div>

            <TicketCheckout ticketItems={props.ticketItems} setTicketItems={props.setTicketItems} total={12.5}/>
        </div>
    );
}

export default Ticket;
