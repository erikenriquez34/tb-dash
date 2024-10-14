import "./Ticket.css"

interface Item {
    name: string;
    quantity: number;
}

interface Props {
    total: number
    setTicketItems: (items: Item[]) => void;
    ticketItems: Item[];
}

function TicketCheckout(props: Props) {
    const handleResetClick = () => {
        const emptyList: Item[] = [];
        props.setTicketItems(emptyList)
    }

    const handleSubmitClick = async () => {
        const orderData = {
            //make this 1 + current
            ticketNumber: Math.floor(Math.random() * 1000),
            priority: 0,
            completed: false,
            initTime: new Date().toISOString(),
            active: true,
            items: props.ticketItems.map(item => ({
                name: item.name,
                quantity: item.quantity
            }))
        };

        try {
            const response = await fetch('http://localhost:8080/api/orders/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData)
            });

            if (response.ok) {
                handleResetClick();
            } else {
                console.error('Error submitting order:', response.statusText);
            }
        } catch (error) {
            console.error('Request failed:', error);
        }
    };

    return (
        <footer className="ticketCheckout">
            <div className="ticketTotal">
                Total: <span>${(props.total).toFixed(2)}</span>
            </div>

            <div className="ticketConfig">
                <div className="ticketSubmit" onClick={() => handleSubmitClick()}>
                    Submit
                </div>

                <div className="ticketReset" onClick={() => handleResetClick()}>
                    Reset
                </div>
            </div>
        </footer>
    );
}

export default TicketCheckout;
