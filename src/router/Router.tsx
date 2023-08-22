import Home from "../page/Home.tsx";
import FullSneakers from "../page/FullSneakers.tsx";
import Cart from "../page/Cart.tsx";


const routers = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/sneakers/:id",
        element: <FullSneakers/>,
    },
    {
        path: "/cart",
        element: <Cart/>,
    },
]

export default routers