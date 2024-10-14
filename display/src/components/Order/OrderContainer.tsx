import React, { useEffect, useState } from "react";
import Order from "./Order";

interface Item {
    name: string;
    quantity: number;
}

interface Data {
    ticketNumber: number;
    priority: number;
    completed: boolean;
    initTime: string;
    items: Item[];
}

function OrderContainer() {
    const [orders, setOrders] = useState<Data[]>([]);

    useEffect(() => {
        const fetchOrders = () => {
            //get all active, user will bump
            fetch("http://localhost:8080/api/orders").then(response => response.json()).then(data => {
                setOrders(data);
            }).catch(error => console.error("Could NOT get any data from the table:", error));
        }

        fetchOrders();
        const interval = setInterval(fetchOrders, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="orderContainer">
            {orders.length > 0 ? (
                // Map over orders to display each one
                orders.map(order => (
                    <Order
                        ticketNumber={order.ticketNumber}
                        priority={order.priority}
                        completed={order.completed}
                        initTime={order.initTime}
                        items={order.items}/>
                    ))
            ) : (<p></p>)}
        </div>
    );
}

export default OrderContainer;