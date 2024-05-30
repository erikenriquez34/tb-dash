import OrderContainer from "./Order/OrderContainer"
import OrderConfig from "./Order/OrderConfig";
import "./Orders.css"

interface Props {
    screen: number
}

function Menu(props: Props) {
    return (
        <div className={props.screen === 0 ? "orderScreen" : "hidden"}>
            <OrderConfig/>
            <OrderContainer/>
        </div>
    );
}

export default Menu;
