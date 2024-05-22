import React from "react";
import Item from "../components/Item"
// import {nanoid} from "nanoid"
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Shopping(props){
    const [itemInfo, setItemInfo] = React.useState([])
    const [loading,setLoading] = React.useState(true)
    const [error,setError] = React.useState(null)
    
    
    React.useEffect(()=>{
        async function fetchData(){
            try{
                    const response = await fetch("https://fakestoreapi.com/products/")
                    const data = await response.json();
                    setItemInfo(data);
            }catch(error){
                console.error("error fetching data", error)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])
    
    function handleClick(id){
        const itemFound = itemInfo.find(item => item.id === id)    
        props.setCart(prevCart => ([...prevCart, {title:itemFound.title, image:itemFound.image , id: itemFound.id, price:itemFound.price}]))
        
        }

    const itemsMapped = itemInfo.map(item =>(
        <Item 
            name={item.title}
            key={item.id}
            price={item.price}
            description={item.description}
            imageUrl={item.image}
            id={item.id}
            handleClick={handleClick}
        />
    ))

    if(loading){
        return (
            <p>Loading...</p>
        )
    }

    return(
        <div >
            <div className="content">
                <div className="items-map">
                    {itemsMapped}
                </div>
            </div>
        </div>
        //! Change this to a navbar
    )
}