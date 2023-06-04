import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./homePage1";
import Layout2 from "./Page2";
import Layout3 from "./enter";
import Layout4 from "./sign-up";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>
    },
    {
        path:"/page2",
        element:<Layout2/>
    },
    {
        path:"/page3",
        element:<Layout3/>
    },
    {
        path:"/page4",
        element:<Layout4/>
    },
])
export default function MyRouter(){
    return(
        <RouterProvider router={router}/>
    )
}

