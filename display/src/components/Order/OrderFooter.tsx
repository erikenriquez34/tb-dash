import "./Order.css"

interface Props {
    completed: boolean;
    initTime: string;
}

function OrderFooter(props: Props) {
    return (
        <footer className="orderFooter">
            <div className="orderFood">
                0D
            </div>

            <div className="orderPayment">
                {props.completed ? ("Placed") : ("Completed")}
            </div>

            <div className="orderTime">
                {props.initTime}
            </div>
        </footer>
    )
}

export default OrderFooter;