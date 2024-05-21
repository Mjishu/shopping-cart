import App from "./App";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path:"/",
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path:"/store"
        ,element:<Shopping/>
    }
]

export default routes