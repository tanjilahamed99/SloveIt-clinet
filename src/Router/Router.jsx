import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/SignUp/SignUP";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";

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
        ]
    },
    {
     path:'/dashboard',
     element:<Dashboard></Dashboard>,
     children:[
        {
            path:'/dashboard/addTask',
            element:<AddTask></AddTask>
        }
     ]
    }
])

export default Router;