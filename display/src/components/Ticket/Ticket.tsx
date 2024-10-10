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

            <TicketCheckout total={12.5}/>
        </div>
    );
}

export default Ticket;
