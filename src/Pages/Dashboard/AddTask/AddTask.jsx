import { useForm } from "react-hook-form";
import SectionTittle from "../../../Shared/SectionTittle";

const AddTask = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
     
        
     
        console.log(data)
    }


    return (
        <div>
            <SectionTittle subTittle={"ADD"} tittle={"Add New Task"}></SectionTittle>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-10">
                <div>
                    <h2 className="text-sm font-bold mb-2">Tittle</h2>
                    <input type="text" {...register("tittle")} placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <h2 className="text-sm font-bold mb-2">Deadline</h2>
                    <input {...register("deadline")} type="date" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <h2 className="text-sm font-bold mb-2">Priority</h2>
                    <select {...register("priority")} className="select select-bordered w-full">
                        <option disabled selected>Select</option>
                        <option>low</option>
                        <option>Moderate</option>
                        <option>High</option>
                    </select>
                </div>
                <div className="">
                    <h2 className="text-sm font-bold mb-2">Description</h2>
                    <textarea {...register("desc")} className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                </div>
                <button type="submit" className="btn btn-outline col-span-2">Create Task</button>
            </form>
        </div>
    );
};

export default AddTask;