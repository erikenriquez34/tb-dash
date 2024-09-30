import "./Order.css"

interface Props {
    ticketNumber: number;
}

function OrderHeader(props: Props) {
    return (
        <header className="orderHeader">
            <div className="orderOption">
                To Go
            </div>

            <div className="orderNumber">
                #{String(props.ticketNumber).padStart(4, '0')}
            </div>
        </header>
    );
}

export default OrderHeader;

