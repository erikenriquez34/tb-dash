import "./Ticket.css"
import {useEffect, useState} from "react";

interface Props {
    order: number
}

function TicketHeader(props: Props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const currentDate = new Date();

            const dateStr = currentDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            });

            const timeStr = currentDate.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            });

            setDate(dateStr);
            setTime(timeStr);
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 60000);

        return () => clearInterval(interval);
    }, []);

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
