import "./ItemGrid.css"
import {useState} from "react";

function ItemQuantity() {
    const [selection, setSelection] = useState(0);
    const toggleSelection = (selection: number) => {
        setSelection(selection)
    }

    return (
        <div className="itemQuantity">
            QTY
            <div className={selection === 0 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => toggleSelection(0)}>
                1
            </div>

            <div className={selection === 1 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => toggleSelection(1)}>
                2
            </div>

            <div className={selection === 2 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => toggleSelection(2)}>
                3
            </div>

            <div className={selection === 3 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => toggleSelection(3)}>
                4
            </div>

            <div className={selection === 4 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => toggleSelection(4)}>
                5
            </div>

            <div className={selection === 5 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => toggleSelection(5)}>
                6
            </div>

            <div className={selection === 6 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => toggleSelection(6)}>
                7
            </div>

            <div className={selection === 7 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => toggleSelection(7)}>
                8
            </div>

            <div className={selection === 8 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => toggleSelection(8)}>
                9
            </div>

            <div className={selection === 9 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => toggleSelection(9)}>
                +
            </div>
        </div>
    );
}

export default ItemQuantity;
