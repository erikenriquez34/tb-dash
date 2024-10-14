import "./Order.css"

//remove most recent type stuff so you can properly handle no recent
async function bumpOrder() {
    const bump = await fetch(`http://localhost:8080/api/orders/bump`, {
        method: 'PUT'
    })

    if (!bump.ok) {
        throw new Error(`bumpOrder: ${bump.statusText}`);
    }
}

function OrderConfig() {
    return (
        <div className="orderConfig">
            <div className="orderBump">
                <div onClick={async () => bumpOrder() } className="orderButton">
                    <img src="/images/right-long-solid.svg" width="25" height="25" alt="rev"/>
                </div>
            </div>

            <div className="orderRecall">
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