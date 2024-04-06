import "./Ticket.css"

interface Props {
    date: string;
    time: string;
    order: number
}

function TicketHeader(props: Props) {
    return (
        <header className="ticketHeader">
            <ul>
                <li>
                    <span>Date:</span> {props.date}
                </li>
                <li>
                    <span>Time:</span> {props.time}
                </li>
                <li>
                    <span>Order:</span> {String(props.order).padStart(4, '0')}
                </li>
            </ul>
        </header>
    );
}

export default TicketHeader;
