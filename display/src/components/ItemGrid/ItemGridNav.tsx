import "./ItemGrid.css"
import {useState} from "react";

function ItemGridNav() {
    const [category, setCategory] = useState(0);
    const toggleCategory = (category: number) => {
        setCategory(category)
    }

    return (
        <div className="ItemGridNav">
            <div className={category === 0 ? "ItemGridNavSection ItemGridNavSection-active" : "ItemGridNavSection"}
                 onClick={() => toggleCategory(0)}>
                All
            </div>

            <div className={category === 1 ? "ItemGridNavSection ItemGridNavSection-active" : "ItemGridNavSection"}
                 onClick={() => toggleCategory(1)}>
                Tacos
            </div>

            <div className={category === 2 ? "ItemGridNavSection ItemGridNavSection-active" : "ItemGridNavSection"}
                 onClick={() => toggleCategory(2)}>
                Burritos
            </div>

            <div className={category === 3 ? "ItemGridNavSection ItemGridNavSection-active" : "ItemGridNavSection"}
                 onClick={() => toggleCategory(3)}>
                Special
            </div>

        </div>
    );
}

export default ItemGridNav;