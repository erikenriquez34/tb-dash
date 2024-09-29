import "./Order.css"
import OrderItem from "./OrderItem"

interface Item {
    name: string;
    quantity: number;
}

interface Props {
    items: Item[];
}

function OrderContent(props: Props) {
    return (
        <div className="orderContent">
            {props.items.map(item => (
                <OrderItem name={item.name} quantity={item.quantity} />
            ) )}
        </div>
    );
}

export default OrderContent;