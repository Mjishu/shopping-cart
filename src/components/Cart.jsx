import React, { useEffect } from "react"

export default function Cart(props){
    const [total, setTotal] = React.useState(0)

    useEffect(() => {
        const newTotal = props.cart.reduce((acc,item) => acc + item.price, 0)
        setTotal(newTotal)
    },[props.cart])

    const cartMapped = props.cart.map(item => {
        return (
            <div key={item.id}>  
                <img src={item.image} alt="item image" className="cart-image"/>
                <h3> {item.title}</h3>
                <p>${item.price}</p>
                <div>
                    <button onChange={()=>console.log("-")}>-</button>
                    <input className="amount" type="text" placeholder="0" />
                    <button onChange={()=>console.log("+")}>+</button>
                </div>
                <button className="delete-cart-item" onClick={() => props.handleDelete(item.id)}>Delete</button> 
                
            </div>
        )  
    })

    return (
        <div className="cart-holder">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {props.cart.length >= 1 ? cartMapped : "Cart is empty"}

            </div>
            <p>Total: ${total.toFixed(2)}</p>
        </div>
    )
}   