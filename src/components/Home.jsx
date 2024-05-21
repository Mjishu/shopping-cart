import {Link} from "react-router-dom"
import Navbar from "./Navbar"

export default function Home(){
    return(
        <>
            <Navbar/>
            <div className="content">
                <div className="home-page">
                    <h1>Gearly Galore</h1>
                    <p>The shop where you can find whatever you need</p>
                </div>
            </div>
        </>
    )
}