import "./ItemGrid.css"
import ItemGridNav from "./ItemGridNav";
import ItemQuantity from "./ItemQuantity";
import ItemDisplay from "./ItemDisplay";
import {useState} from "react";

interface Props {
    onAddToTicket: (name: string, quantity: number) => void;
}

function ItemGrid(props : Props) {
    const [selection, setSelection] = useState(0);
    const toggleSelection = (selection: number) => {
        setSelection(selection)
    }

    return (
        <div className="gridContainer">
            <ItemGridNav/>
            <div className="selectItems">
                <ItemQuantity toggleSelection={toggleSelection} selection={selection}/>
                <ItemDisplay onAddToTicket={props.onAddToTicket} selection={selection} setSelection={setSelection}/>
            </div>
        </div>
    );
}

export default ItemGrid;
