import SectionTittle from "../../../Shared/SectionTittle";

const AddTask = () => {
    return (
        <div>
            <SectionTittle subTittle={"ADD"} tittle={"Add New Task"}></SectionTittle>
            <form>
                <div>
                    <h2 className="text-medium">Tittle</h2>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
            </form>
        </div>
    );
};

export default AddTask;