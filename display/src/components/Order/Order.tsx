import "./Order.css"
import OrderHeader from "./OrderHeader";
import OrderContent from "./OrderContent";
import OrderFooter from "./OrderFooter";

interface Item {
    name: string;
    quantity: number;
}

interface Props {
    ticketNumber: number,
    priority: number,
    completed: boolean,
    initTime: string,
    items: Item[],
}

function Order(props: Props) {
    return (
        <div className="order">
            <OrderHeader ticketNumber={props.ticketNumber}/>
            <OrderContent items={props.items}/>
            <OrderFooter completed={props.completed} initTime={props.initTime}/>
        </div>
    );
}

export default Order;