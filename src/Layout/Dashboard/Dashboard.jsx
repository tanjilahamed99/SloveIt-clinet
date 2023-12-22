import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)

    const ulLinks = <>
        <div className="mb-5">
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <h2 className="text-md font-bold">{user.displayName}</h2>
            <h2 className="text-sm font-bold">{user.email}</h2>
        </div>
        <li>
            <NavLink
                to="/dashboard/addTask"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                }
            >
                Add New Task
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/task"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                }
            >
                Task List
            </NavLink>
        </li>
        <hr className="text-black font-bold border-4" />
        <li>
            <Link to={'/'}>Home</Link>
        </li>
    </>


    return (
        <div className="flex flex-col md:flex-row  container mx-auto gap-10">
            <div className="bg-slate-100 md:h-[100vh] lg::w-[20%] md:w-[30%] py-5 ">
                <ul className="text-center space-y-2">
                    {
                        ulLinks
                    }
                </ul>
            </div>
            <div className="lg:w-[80%] md:w-[70%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;