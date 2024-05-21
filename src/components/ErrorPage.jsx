import {Link} from "react-router-dom"

function ErrorPage(){
    return (
        <div className="content">
            <h1>Uh Oh! Looks like you are looking for something that doesnt exist!</h1>
            <Link to="/">Go Home?</Link>
        </div>
    )
}

export default ErrorPage