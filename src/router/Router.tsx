import Home from "../page/Home.tsx";
import FullSneakers from "../page/FullSneakers.tsx";
import Cart from "../page/Cart.tsx";


const routers = [
    {
        path: "sneakers/",
        element: <Home/>,
    },
    {
        path: "sneakers/:id",
        element: <FullSneakers/>,
    },
    {
        path: "sneakers/cart",
        element: <Cart/>,
    },
]

export default routers