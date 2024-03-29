import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/SignUp/SignUP";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import Task from "../Pages/Dashboard/Task/Task";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../Pages/Dashboard/UpdateTask/UpdateTask";
import About from "../Pages/About/About";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUP></SignUP>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/addTask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/dashboard/task',
                element: <PrivateRoute><Task></Task></PrivateRoute>
            },
            {
                path: '/dashboard/updateTask/:id',
                element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>
            },
        ]
    }
])

export default Router;