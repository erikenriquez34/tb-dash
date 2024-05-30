import "./Ticket.css"
import {useState} from "react";

interface Props {
    name: string;
    count: number
    price: number;
}

function TicketItem(props: Props) {
    const [remove, setRemove] = useState(0)

    return (
        <div className="ticketItem">
            <div className={remove === 1 ? "ticketItemName fade" : "ticketItemName"}
                 onMouseEnter={ () => setRemove(1)}
                 onMouseLeave={ () => setRemove(0)}>

                {props.name}
            </div>

            <div className={remove === 1 ? "ticketItemCount fade" : "ticketItemCount"}>
                x{props.count}
            </div>

            <div className={remove === 1 ? "ticketItemPrice fade" : "ticketItemPrice"}>
                ${(props.price).toFixed(2)}
            </div>
        </div>
    );
}

export default TicketItem;
