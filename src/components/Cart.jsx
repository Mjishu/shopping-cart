import React from "react"

export default function Cart(props){

    const cartMapped = props.cart.map(item => {
        return (
            <div key={item.id}>  
                <img src={item.image} alt="item image" width="220" height="220"/>
                <h3> {item.title}</h3>
                <p>${item.price}</p>
            </div>
        )  
    })

    return (
        <div className="cart-items">
            {cartMapped}
        </div>
    )
}