import {Link} from "react-router-dom"

export default function Home(){
    return(
        <div className="content">
            <div className="home-page">
                <h1>Gearly Galore</h1>
                <p>The shop where you can find whatever you need</p>
                <Link to="/store">Start Shopping?</Link>
            </div>
        </div>
    )
}