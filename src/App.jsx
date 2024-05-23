// import React from 'react'
import Shopping from './components/Shopping'
import Cart from './components/Cart'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route, Outlet } from 'react-router-dom'

function App() {
  const [cart, setCart] = React.useState( JSON.parse(localStorage.getItem("cartItems")) ||[])
  const [itemsInCart, setItemsInCart] = React.useState(0)
  const [isCartVisible,setIsCartVisible] = React.useState(false);

  function toggleCart(){
    setIsCartVisible(!isCartVisible)
    console.log(isCartVisible)
  }

//   React.useEffect(()=>{
//     console.log(cart)
// },[cart])

  return (
    <div>
      <Navbar toggleCart={toggleCart}/>
      {/* <Shopping cart={cart} setCart={setCart}/> */}
        <Shopping cart={cart} setCart={setCart} isCartVisible={isCartVisible} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
      {/* <Outlet /> */}
    </div>
  )
}

export default App


//// 1 make the item counter in the cart work(for the buttons next to it)
  // 2 if item in cart already, add +1 to the items amount instead of adding it as a seperate item
      // if item.id in cart(
      //   const search = find cart.item.id....
      //   setCart(prevcart => {...prevcart, amount: search.amount + 1})
      // )
  // 3 style it up 