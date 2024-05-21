import React from "react";
import Item from "../components/Item"
import {nanoid} from "nanoid"
import { Link } from "react-router-dom";

export default function Shopping(){
    const [itemInfo, setItemInfo] = React.useState(newItems())

    function generateItem(){ //! Change this later to be blank and then update it based on api
        return {
            imageUrl: "https://picsum.photos/seed/picsum/200/300",
            name: "Item",
            price: "10.00",
            description: "This is the description of an item",
            id:nanoid()
        }
    }

    function newItems() {
        const newItemArr = []
        for (let i=0;i<3;i++){
            newItemArr.push(generateItem())
        }
        return newItemArr
    }

    const itemsMapped = itemInfo.map(item =>(
        <Item 
            name={item.name}
            key={item.id}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
        />
    ))

    return(
        <div >
            <div className="items-map">
                {itemsMapped}
            </div>
            <Link to="/">Go Home</Link>
        </div>
        //! Change this to a navbar
    )
}