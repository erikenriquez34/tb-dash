import "./ItemGrid.css"

interface Props {
    imageName: string;
    name: string;
}

function Item(props: Props) {
    return (
        <div className="item">
            <img src={"/images/" + props.imageName + ".jpg"} width="85" height="85" alt={props.imageName}/>
            <div className="item-name">
                {props.name}
            </div>
        </div>
    );
}

export default Item;