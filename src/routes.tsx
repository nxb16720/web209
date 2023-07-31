import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import LayoutWebsite from "./layout/LayoutWeb";
import LayoutAdmin from "./layout/LayoutAdmin";

export const routers = createBrowserRouter([
    // layout webiste
    {
        path: "/",
        element: <LayoutWebsite />,
        children: [
            { index: true, element: <div>Home Page</div> },
            { path: "about", element: <div>About page</div> },
        ],
    },
    {
        path: "/admin", // redirect /admin/dashboard
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            { path: "dashboard", element: <div>Dashboard page</div> },
            { path: "products", element: <div>Product Management page</div> },
        ],
    },
    { path: "*", element: <div>Not Found Page</div> },
]);