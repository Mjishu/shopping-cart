import React from "react";
import Item from "../components/Item"
import {nanoid} from "nanoid"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Shopping(){
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
    console.log(itemInfo)

    const itemsMapped = itemInfo.map(item =>(
        <Item 
            name={item.title}
            key={item.id}
            price={item.price}
            description={item.description}
            imageUrl={item.image}
            id={item.id}
        />
    ))

    return(
        <div >
            <Navbar/>
            <div className="content">
                <div className="items-map">
                    {itemsMapped}
                </div>
            </div>
        </div>
        //! Change this to a navbar
    )
}