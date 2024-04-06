import "./Ticket.css"
import TicketHeader from './TicketHeader';
import TicketItem from './TicketItem';
import TicketCheckout from "./TicketCheckout";

function Ticket() {
    return (
        <div className="ticketContainer">
            <TicketHeader date={"Apr 6, 2024"} time={"1:33 pm"} order={27}/>

            <div className="ticketItemContainer">
                <TicketItem name={"Soft Taco"} count={12} price={3}/>
                <TicketItem name={"Crunchwrap"} count={2} price={52.32}/>
            </div>

            <TicketCheckout total={12.5}/>
        </div>
    );
}

export default Ticket;
