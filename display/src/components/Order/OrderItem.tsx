import "./Order.css"

interface Props {
    name: string;
    quantity: number
}

function OrderItem(props: Props) {
    return (
        <div className="orderItem">
            {props.quantity}x {props.name}
        </div>
    )
}

export default OrderItem;