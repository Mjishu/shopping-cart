import React from "react"

export default function Cart(props){

    const cartMapped = props.cart.map(item => {
        return (
            <div key={item.id}>  
                <img src={item.image} alt="item image" width="220" height="220"/>
                <h3> {item.title}</h3>
                <p>${item.price}</p>
                <div>
                    <button onChange={()=>console.log("-")}>-</button>
                    <input className="amount" type="text" placeholder="0" />
                    <button onChange={()=>console.log("+")}>+</button>
                </div>
            </div>
        )  
    })

    return (
        <div className="cart-items">
            {props.cart.length >= 1 ? cartMapped : "Cart is empty"}

        </div>
    )
}