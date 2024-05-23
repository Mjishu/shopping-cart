import React, { useEffect } from "react"

export default function Cart(props){
    const [total, setTotal] = React.useState(0)
    

    useEffect(() => {
        const newTotal = props.cart.reduce((acc,item) => acc + item.price, 0)
        setTotal(newTotal)
        
        props.setItemsInCart(props.cart.length)
    },[props.cart])

    function handleAmountChange(id,amount){
        const updatedCart = props.cart.map(item =>{
            if (item.id ===id ){
                return {...item,amount:amount}
            }
            return item
        })
        props.setCart(updatedCart)
    }
    function incrementAmount(id){
        const updatedCart = props.cart.map(item =>{
            if (item.id ===id ){
                return {...item,amount:item.amount + 1}
            }
            return item
        })
        props.setCart(updatedCart)
    }

    function decrementAmount(id){
        const updatedCart = props.cart.map(item =>{
            if (item.id ===id ){
                return {...item,amount:item.amount - 1}
            }
            return item
        })
        props.setCart(updatedCart)

    }


    const cartMapped = props.cart.map(item => {
        return (
            <div key={item.id}>  
                <img src={item.image} alt="item image" className="cart-image"/>
                <h3> {item.title}</h3>
                <p>${item.price}</p>
                <div>
                    <button onClick={()=> decrementAmount(item.id)}>-</button>
                    <input className="amount" 
                        type="text" 
                        value={item.amount}
                        onChange={(e) => handleAmountChange(item.id, parseInt(e.target.value) )}
                    />
                    <button onClick={()=> incrementAmount(item.id)}>+</button>
                </div>
                <button className="delete-cart-item" onClick={() => props.handleDelete(item.id)}>Delete</button> 
                
            </div>
        )  
    })

    return (
        <div className="cart-holder">
            <h1>Your Cart</h1>
            <h4>Items: {props.itemsInCart}</h4>
            <div className="cart-items">
                {props.cart.length >= 1 ? cartMapped : "Cart is empty"}

            </div>
            <p>Total: ${total.toFixed(2)}</p>
            <button>Go to Checkout</button>
        </div>
    )
}   


//TODO Add it so that if an id is already in the cart then update the amount instead of appending it to the cart;
//! Bug: If you have 2 of the same items in the cart and press delete it doesnt work