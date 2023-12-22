import { useForm } from "react-hook-form";
import SectionTittle from "../../../Shared/SectionTittle";
import useAXiosPublic from "../../../Hooks/AxiosPublic/useAXiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AddTask = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAXiosPublic()
    const { user } = useContext(AuthContext)

    const onSubmit = (data) => {
        const newTask = {
            tittle: data.tittle,
            desc: data.desc,
            deadline: data.deadline,
            priority: data.priority,
            ongoing: false,
            completed: false,
            email: user?.email
        }

        axiosPublic.post('/task', newTask)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: "success",
                        title: "created a new task",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                }
            })
    }


    return (
        <div>
            <SectionTittle subTittle={"ADD"} tittle={"Add New Task"}></SectionTittle>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-10">
                <div>
                    <h2 className="text-sm font-bold mb-2">Tittle</h2>
                    <input required type="text" {...register("tittle")} placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <h2 className="text-sm font-bold mb-2">Deadline</h2>
                    <input required {...register("deadline")} type="date" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <h2 className="text-sm font-bold mb-2">Priority</h2>
                    <select required {...register("priority")} className="select select-bordered w-full">
                        <option disabled selected>Select</option>
                        <option>low</option>
                        <option>Moderate</option>
                        <option>High</option>
                    </select>
                </div>
                <div className="">
                    <h2 className="text-sm font-bold mb-2">Description</h2>
                    <textarea required {...register("desc")} className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                </div>
                <button type="submit" className="btn btn-outline col-span-2">Create Task</button>
            </form>
        </div>
    );
};

export default AddTask;