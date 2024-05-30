import "./Order.css"

function OrderFooter() {
    return (
        <footer className="orderFooter">
            <div className="orderFood">
                0D
            </div>

            <div className="orderPayment">
                Paid
            </div>

            <div className="orderTime">
                00:39
            </div>
        </footer>
    )
}

export default OrderFooter;