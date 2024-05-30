import "./Order.css"

interface Props {
    name: string;
    count: number
}

function OrderItem(props: Props) {
    return (
        <div className="orderItem">
            {props.count}x {props.name}
        </div>
    )
}

export default OrderItem;