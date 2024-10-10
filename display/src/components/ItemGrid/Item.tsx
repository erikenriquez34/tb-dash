import "./ItemGrid.css"

interface Props {
    imageName: string;
    name: string;
    onAddToTicket: (name: string, quantity: number) => void;
    quantity: number;
    setSelection: (selection: number) => void;
}

function Item(props: Props) {
    const handleAddClick = () => {
        const quantity = props.quantity + 1;
        props.onAddToTicket(props.name, quantity);
        props.setSelection(0);
    };

    return (
        <div className="item">
            <img src={"/images/" + props.imageName + ".jpg"} width="85" height="85"
                 alt={props.imageName} onClick={() => handleAddClick()} />
            <div className="item-name">
                {props.name}
            </div>
        </div>
    );
}

export default Item;