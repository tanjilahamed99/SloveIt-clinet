import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const ulLinks = <>
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
    </>


    return (
        <div className="flex container mx-auto gap-10">
            <div className="bg-slate-100 h-[100vh] w-[20%] py-5 ">
                <ul className="text-center">
                    {
                        ulLinks
                    }
                </ul>
            </div>
            <div className="w-[70%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;