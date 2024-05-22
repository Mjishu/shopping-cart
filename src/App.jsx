// import React from 'react'
import Shopping from './components/Shopping'
import Cart from './components/Cart'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route, Outlet } from 'react-router-dom'

function App() {
  const [cart, setCart] = React.useState([])

  React.useEffect(()=>{
    console.log(cart)
},[cart])

  return (
    <div>
      <Navbar/>
      {/* <Shopping cart={cart} setCart={setCart}/> */}
      <Routes>
        <Route path="/" element={<Shopping cart={cart} setCart={setCart}/>}/>
        <Route path="cart" element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
      <Outlet />
    </div>
  )
}

//todo I think i should add a toggle button that loads the cart, i dont know exactly how i would do this though, maybe have a state and then if state
// is true then load it but if state is false then dont load it? I feel like i could also load it how it showed with the nested routes maybe?
    //tldr: Look more into the nested routes before

export default App
