// import React from "react"

export default function Item(props){
    
    return(
        <div className="item-holder">
            <img src={props.imageUrl} alt="Image" width="100" />
            <h3>{props.name}</h3>
            <h4>${props.price}</h4>
            <button onClick={()=> console.log(props.id)}>Add to Cart</button>
        </div>
    )
}
