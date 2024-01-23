
const About = () => {
    return (
        <div className="container mx-auto  my-20 flex flex-col lg:flex-row  items-center gap-10">
            <div className="lg:w-1/2">
                <img className="w-full" src="https://i.ibb.co/9vYvKRL/images-16.jpg" alt="" />
            </div>
            <div className="lg:w-1/2 space-y-3">
                <h2 className="text-[#c19d68] font-medium">Task Management Website</h2>
                <h3 className="text-3xl font-semibold text-[#1e1e1e]">Solved It: Unleash Productivity, Simplify Tasks, Achieve More in Minutes</h3>
                <p className="text-[#616161]">SolvedIt: Your Key to Effortless Task Mastery. Simplify, organize, and conquer your to-do list with our intuitive task management platform. Elevate your productivity journey now!</p>
                <button className="btn btn-outline">About More</button>
            </div>
        </div>
    );
};

export default About;