import React from "react";
import Item from "../components/Item"
import {nanoid} from "nanoid"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Shopping(){
    const [itemInfo, setItemInfo] = React.useState(newItems())
    const [loading,setLoading] = React.useState(true)
    const [error,setError] = React.useState(null)

    function generateItem(){ //! Change this later to be blank and then update it based on api
        return {
            imageUrl: "https://picsum.photos/seed/picsum/200/300",
            name: "Item",
            price: "10.00",
            description: "This is the description of an item",
            category:"",
            id:null
        }
    }

    function newItems() {
        const newItemArr = []
        for (let i=0;i<3;i++){
            newItemArr.push(generateItem())
        }
        return newItemArr
    }
    
    React.useEffect(()=>{
        async function fetchData(){
            try{
                const updatedItem = await Promise.all(itemInfo.map(async(item)=>{
                    const response = await fetch("https://fakestoreapi.com/products/")
                    const data = await response.json();
                    return {...item, imageUrl:data.image, name:data.title,price:data.price,description:data.description, category:data.category,id:data.id}
                }))
                setItemInfo(updatedItem)
            }catch(error){
                console.error("error fetching data", error)
            }
        }
        fetchData()
    },[])

    const itemsMapped = itemInfo.map(item =>(
        <Item 
            name={item.name}
            key={item.id}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
        />
    ))

    return(
        <div >
            <Navbar/>
            <div className="items-map">
                {itemsMapped}
            </div>
        </div>
        //! Change this to a navbar
    )
}