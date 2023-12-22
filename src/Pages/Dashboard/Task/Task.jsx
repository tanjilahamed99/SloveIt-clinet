import useAllTask from "../../../Hooks/AllTask/useAllTask";
import DisplayTask from "../../../Hooks/DisplayTask/DisplayTask";
import SectionTittle from "../../../Shared/SectionTittle";

const Task = () => {

    const [task] = useAllTask()

    return (
        <div>
            <SectionTittle subTittle={"Task"} tittle={"All Task"}></SectionTittle>
            <div className="grid  gap-10 ">
                <div className="border-2 ">
                    <h2 className="bg-slate-100 text-2xl text-center">To do</h2>

                    <div className="p-3 bg-slate-50 space-y-3">
                        {
                            task.map(i => <div key={i._id}>
                                <div className="collapse bg-base-200">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium">
                                        {
                                            i.tittle
                                        }
                                    </div>
                                    <div className="collapse-content">
                                        <h2 className="text-xl font-medium">Deadline :{i.deadline}</h2>
                                        <h2>Priority: {i.priority}</h2>
                                        <h2>Description: {i.desc}</h2>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="border-2">
                    <h2 className="bg-slate-100 text-2xl text-center">Ongoing</h2>
                    <div className="p-3 bg-slate-50">
                        <h2 className="">1: task added</h2>
                        <h2 className="">1: task added</h2>
                        <h2 className="">1: task added</h2>
                        <h2 className="">1: task added</h2>
                        <h2 className="">1: task added</h2>
                        <h2 className="">1: task added</h2>
                    </div>
                </div>
                <div className="border-2">
                    <h2 className="bg-slate-100 text-2xl text-center">Completed</h2>
                    <div className="p-3 bg-slate-50 ">
                        <h2 className="">1: task added</h2>
                        <h2 className="">1: task added</h2>
                        <h2 className="">1: task added</h2>
                        <h2 className="">1: task added</h2>
                        <h2 className="">1: task added</h2>
                        <h2 className="">1: task added</h2>
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