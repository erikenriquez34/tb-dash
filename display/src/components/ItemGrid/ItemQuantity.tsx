import "./ItemGrid.css"

interface Props {
    toggleSelection: (selection: number) => void;
    selection: number;
}

function ItemQuantity(props : Props) {
    return (
        <div className="itemQuantity">
            QTY
            <div className={props.selection === 0 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => props.toggleSelection(0)}>
                1
            </div>

            <div className={props.selection === 1 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => props.toggleSelection(1)}>
                2
            </div>

            <div className={props.selection === 2 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => props.toggleSelection(2)}>
                3
            </div>

            <div className={props.selection === 3 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => props.toggleSelection(3)}>
                4
            </div>

            <div className={props.selection === 4 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => props.toggleSelection(4)}>
                5
            </div>

            <div className={props.selection === 5 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => props.toggleSelection(5)}>
                6
            </div>

            <div className={props.selection === 6 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => props.toggleSelection(6)}>
                7
            </div>

            <div className={props.selection === 7 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => props.toggleSelection(7)}>
                8
            </div>

            <div className={props.selection === 8 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => props.toggleSelection(8)}>
                9
            </div>

            <div className={props.selection === 9 ? "quantityValue quantityValue-active" : "quantityValue"}
                 onClick={() => props.toggleSelection(9)}>
                +
            </div>
        </div>
    );
}

export default ItemQuantity;
