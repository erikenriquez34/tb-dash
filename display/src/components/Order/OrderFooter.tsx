import "./Order.css"
import {useEffect, useState} from "react";

interface Props {
    completed: boolean;
    initTime: string;
}

function OrderFooter(props: Props) {
    const [timeDiff, setTimeDiff] = useState<string>("");

    useEffect(() => {
        const initialTime = new Date(props.initTime);

        const calculateTime = () => {
            const currentTime = new Date();
            const diffInMilliseconds = currentTime.getTime() - initialTime.getTime();

            const totalSeconds = Math.floor(diffInMilliseconds / 1000);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            const formattedTimeDiff = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            setTimeDiff(formattedTimeDiff);
        };
        calculateTime();
        const interval = setInterval(calculateTime, 1000);
        return () => clearInterval(interval);
    }, [props.initTime]);

    return (
        <footer className="orderFooter">
            <div className="orderFood">
                0D
            </div>

            <div className="orderPayment">
                {props.completed ? ("Placed") : ("Completed")}
            </div>

            <div className="orderTime">
                {timeDiff}
            </div>
        </footer>
    )
}

export default OrderFooter;