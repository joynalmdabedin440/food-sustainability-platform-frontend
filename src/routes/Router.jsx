import {
  createBrowserRouter,
  
} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "register",
                Component: RegisterPage
            },
            {
                path: "login",
                Component: LoginPage
            },
            

        ]
    }
])

export default router;