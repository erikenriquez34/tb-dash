import "./ItemGrid.css"
import Item from "./Item"

interface Props {
    onAddToTicket: (name: string, quantity: number) => void;
    selection: number;
    setSelection: (selection: number) => void;
}

function ItemDisplay(props : Props) {
    return (
        <div className="itemDisplay">
            <Item onAddToTicket={props.onAddToTicket} quantity={props.selection} imageName={"crunchyTaco"}
                  name={"Crunchy Taco"} setSelection={props.setSelection} />
            <Item onAddToTicket={props.onAddToTicket} quantity={props.selection} imageName={"softTaco"}
                  name={"Soft Taco"} setSelection={props.setSelection}/>
            <Item onAddToTicket={props.onAddToTicket} quantity={props.selection} imageName={"chalupaSupreme"}
                  name={"Chalupa Supreme"} setSelection={props.setSelection}/>
        </div>
    );
}

export default ItemDisplay;
