import App from "./App";
import Home from "./components/Home";
// import Shopping from "./components/Shopping";
import ErrorPage from "./components/ErrorPage";
// import Cart from "./components/Cart";

const routes = [
    {
        path:"/",
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path:"/store"
        ,element:<App/>,
        children:[
            {
                path:"cart",
            }
        ]
    },
]

export default routes