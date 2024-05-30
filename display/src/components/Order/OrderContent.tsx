import "./Order.css"
import OrderItem from "./OrderItem"

function OrderContent() {
    return (
        <div className="orderContent">
            <OrderItem count={7} name={"Crunchy Taco"}/>
            <OrderItem count={7} name={"Crunchy Taco"}/>
            <OrderItem count={7} name={"Crunchy Taco"}/>
            <OrderItem count={7} name={"Crunchy Taco"}/>
            <OrderItem count={7} name={"Crunchy Taco"}/>
            <OrderItem count={7} name={"Crunchy Taco"}/>
            <OrderItem count={7} name={"Crunchy Taco"}/>
            <OrderItem count={7} name={"Crunchy Taco"}/>
            <OrderItem count={7} name={"Crunchy Taco"}/>
        </div>
    );
}

export default OrderContent;