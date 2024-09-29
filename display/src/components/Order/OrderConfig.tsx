import "./Order.css"

function OrderConfig() {
    return (
        <div className="orderConfig">
            <div className="orderBump">
                <div className="orderButton">
                    <img src="/images/right-long-solid.svg" width="25" height="25" alt="rev"/>
                </div>
            </div>

            <div className="orderNext">
                <div className="orderButton">
                    <img src="/images/rotate-left-solid.svg" width="25" height="25" alt="rev"/>
                </div>
            </div>

            <div className="orderNext">
                <div className="orderButton">
                    <img src="/images/forward-solid.svg" width="25" height="25" alt="rev"/>
                </div>
            </div>
        </div>
    )
}

export default OrderConfig;