import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-center bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/ZL6fBvL/images-13.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center justify-start text-neutral-content">
                <div className="text-left w-1/2 ml-20 text-white">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to SolvedIt </h1>
                    <p className="mb-5">SolvedIt: Your Key to Effortless Task Mastery. Simplify, organize, and conquer your to-do list with our intuitive task management platform. Elevate your productivity journey now!</p>
                    <Link to={'/dashboard'}>
                        <button className="btn btn-primary">Let’s Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;