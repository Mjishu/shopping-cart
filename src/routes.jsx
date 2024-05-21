import App from "./App";
import Home from "./components/Home";
import Shopping from "./components/Shopping";

const routes = [
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/store"
        ,element:<Shopping/>
    }
]

export default routes