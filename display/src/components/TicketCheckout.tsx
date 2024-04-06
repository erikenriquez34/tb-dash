import "./Ticket.css"

interface Props {
    total: number
}

function TicketCheckout(props: Props) {
    return (
        <footer className="ticketCheckout">
            <div className="ticketTotal">
                Total: <span>{props.total}</span>
            </div>

            <div className="ticketConfig">
                <div className="ticketSubmit">
                    Submit
                </div>

                <div className="ticketReset">
                    Reset
                </div>
            </div>
        </footer>
    );
}

export default TicketCheckout;
