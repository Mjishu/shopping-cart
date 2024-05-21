// import React from "react"

export default function Item(props){
    
    return(
        <div className="item-holder">
            <img src={props.imageUrl} alt="Image" />
            <h3>{props.name}</h3>
            <h5>${props.price}</h5>
            <p>{props.description}</p>
            <hr />
        </div>
    )
}