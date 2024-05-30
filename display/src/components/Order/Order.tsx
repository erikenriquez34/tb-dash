import "./Order.css"
import OrderHeader from "./OrderHeader";
import OrderContent from "./OrderContent";
import OrderFooter from "./OrderFooter";

//TODO add navigation for order screen
function Order() {
    return (
        <div className="order">
            <OrderHeader/>
            <OrderContent/>
            <OrderFooter/>
        </div>
    );
}

export default Order;