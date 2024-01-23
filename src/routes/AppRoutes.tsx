import { HomePage, LoginPage, ProfilePage } from "../pages";
import path from "../utils/path";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: path.LOGIN,
        element: <LoginPage></LoginPage>
    },
    {
        path: path.HOME,
        element: <HomePage></HomePage>
    },
    {
        path: path.PROFILE,
        element: <ProfilePage></ProfilePage>
    }
])

export const AppRoutes = () => {
    return <RouterProvider router={router}></RouterProvider>
}