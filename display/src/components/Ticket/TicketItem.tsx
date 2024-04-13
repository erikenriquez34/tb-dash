import "./Ticket.css"

interface Props {
    name: string;
    count: number
    price: number;
}

function TicketItem(props: Props) {
    return (
        <div className="ticketItem">
            <div className="ticketItemName">
                {props.name}
            </div>

            <div className="ticketItemCount">
                x{props.count}
            </div>

            <div className="ticketItemPrice">
                ${(props.price).toFixed(2)}
            </div>
        </div>
    );
}

export default TicketItem;
