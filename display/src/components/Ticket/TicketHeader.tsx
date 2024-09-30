import "./Ticket.css"

interface Props {
    order: number
}

const currentDate = new Date();

const date = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
});

const time = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
});

function TicketHeader(props: Props) {
    return (
        <header className="ticketHeader">
            <ul>
                <li>
                    <span>Date:</span> {date}
                </li>
                <li>
                    <span>Time:</span> {time}
                </li>
                <li>
                    <span>Order:</span> {String(props.order).padStart(4, '0')}
                </li>
            </ul>
        </header>
    );
}

export default TicketHeader;
