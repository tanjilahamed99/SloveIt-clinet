import Swal from "sweetalert2";
import useAllTask from "../../../Hooks/AllTask/useAllTask";
import useAXiosPublic from "../../../Hooks/AxiosPublic/useAXiosPublic";
import SectionTittle from "../../../Shared/SectionTittle";

const Task = () => {
    const axiosPublic = useAXiosPublic()
    const [, refetch, allTask, ongoingTask, completedTask] = useAllTask()


    const handleMakeOngoing = (id) => {
        axiosPublic.patch(`/task/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Its now ongoing",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })

    }
    const handleMakeComplete = (id) => {
        axiosPublic.patch(`/taskCompleted/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Success dane this task",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })

    }


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/task/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            refetch()
                        }
                    })

            }
        })

    }


    return (
        <div className="pb-20">
            <SectionTittle subTittle={"Task"} tittle={"All Task"}></SectionTittle>
            <div className="grid  gap-10 ">
                <div className="border-2 ">
                    <h2 className="bg-slate-100 text-2xl text-center">To do</h2>

                    <div className="p-3 bg-slate-50 space-y-3">
                        {
                            allTask.map(i => <div key={i._id}>
                                <div className="collapse bg-base-200">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium">
                                        {
                                            i.tittle
                                        }
                                    </div>
                                    <div className="collapse-content">
                                        <div className="flex justify-between">
                                            <div>
                                                <h2 className="font-medium text-xl">Priority: {i.priority}</h2>
                                                <h2 className=" text-xl">Description: {i.desc}</h2>
                                            </div>
                                            <h2 className="text-sm font-medium">Deadline :{i.deadline}</h2>
                                        </div>
                                        <button onClick={() => handleMakeOngoing(i._id)} className="btn mt-2 btn-outline btn-sm text-green-600">Ongoing</button>
                                        <button onClick={() => handleDelete(i._id)} className="btn mt-2 btn-outline btn-sm mx-3 text-red-500">Delete</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="border-2">
                    <h2 className="bg-slate-100 text-2xl text-center">Ongoing</h2>
                    <div className="p-3 bg-slate-50 space-y-3">
                        {
                            ongoingTask.map(i => <div key={i._id}>
                                <div className="collapse bg-base-200">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium">
                                        {
                                            i.tittle
                                        }
                                    </div>
                                    <div className="collapse-content">
                                        <div className="flex justify-between">
                                            <div>
                                                <h2 className="font-medium text-xl">Priority: {i.priority}</h2>
                                                <h2 className=" text-xl">Description: {i.desc}</h2>
                                            </div>
                                            <h2 className="text-sm font-medium">Deadline :{i.deadline}</h2>
                                        </div>
                                        <button onClick={() => handleMakeComplete(i._id)} className="btn mt-2 btn-outline btn-sm">Complete</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="border-2">
                    <h2 className="bg-slate-100 text-2xl text-center">Completed</h2>
                    <div className="p-3 bg-slate-50 space-y-3">
                        {
                            completedTask.map(i => <div key={i._id}>
                                <div className="collapse bg-base-200">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium">
                                        {
                                            i.tittle
                                        }
                                    </div>
                                    <div className="collapse-content">
                                        <div className="flex justify-between">
                                            <div>
                                                <h2 className="font-medium text-xl">Priority: {i.priority}</h2>
                                                <h2 className=" text-xl">Description: {i.desc}</h2>
                                            </div>
                                            <h2 className="text-sm font-medium">Deadline :{i.deadline}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

                {/* {
                    task.map(i => <DisplayTask key={i._id} task={i}></DisplayTask>)
                } */}
            </div>
        </div>
    );
};

export default Task;