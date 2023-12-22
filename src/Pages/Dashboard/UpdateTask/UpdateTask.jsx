import { useParams } from "react-router-dom";
import useAXiosPublic from "../../../Hooks/AxiosPublic/useAXiosPublic";
import { useEffect, useState } from "react";
import SectionTittle from "../../../Shared/SectionTittle";
import Swal from "sweetalert2";

const UpdateTask = () => {
    const { id } = useParams()
    const axiosPublic = useAXiosPublic()
    const [task, setTask] = useState()

    useEffect(() => {
        axiosPublic.get(`/getTask/${id}`)
            .then(res => setTask(res.data))
    }, [id, axiosPublic])


    const onSubmit = (data) => {
        const newTask = {
            tittle: data.tittle,
            desc: data.desc,
            deadline: data.deadline,
            priority: data.priority,
            ongoing: false,
            completed: false,
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
                }
            })
    }

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const tittle = form.tittle.value
        const deadline = form.deadline.value
        const priority = form.priority.value
        const desc = form.desc.value

    }



    return (
        <div>
            <SectionTittle subTittle={"ADD"} tittle={"Add New Task"}></SectionTittle>
            <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-10">
                <div>
                    <h2 className="text-sm font-bold mb-2">Tittle</h2>
                    <input defaultValue={task?.tittle} required type="text" name="tittle" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <h2 className="text-sm font-bold mb-2">Deadline</h2>
                    <input  required name="deadline" type="date" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <h2 className="text-sm font-bold mb-2">Priority</h2>
                    <select defaultValue={task?.priority} required name="priority" className="select select-bordered w-full">
                        <option disabled selected>Select</option>
                        <option>low</option>
                        <option>Moderate</option>
                        <option>High</option>
                    </select>
                </div>
                <div className="">
                    <h2 className="text-sm font-bold mb-2">Description</h2>
                    <textarea required defaultValue={task?.desc} name="desc" className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                </div>
                <button type="submit" className="btn btn-outline col-span-2">Create Task</button>
            </form>
        </div>
    );
};

export default UpdateTask;