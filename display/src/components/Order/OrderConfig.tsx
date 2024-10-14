import "./Order.css"

//remove most recent type stuff so you can properly handle no recent
async function removeRecent() {
    const get = await fetch(`http://localhost:8080/api/orders/recent`, {
        method: 'GET'
    });

    if (!get.ok) {
        throw new Error(`No orders remaining!`);
    }

    const ticketNumber = await get.json();
    const remove = await fetch(`http://localhost:8080/api/orders/${ticketNumber}`, {
        method: 'DELETE'
    })

    if (!remove.ok) {
        throw new Error(`deleteOrder: ${remove.statusText}`);
    }
}

function OrderConfig() {
    return (
        <div className="orderConfig">
            <div className="orderBump">
                <div onClick={async () => removeRecent() } className="orderButton">
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