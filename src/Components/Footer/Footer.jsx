import {FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center   text-base-content">
            <div className="w-full">
                <div className=" p-10 flex flex-col lg:flex-row bg-slate-100 footer gap-20 lg:items-center">
                    <div className="lg:w-[25%] mx-auto">
                        <h1 className="text-xl font-bold">Solved It</h1>
                        <p className="text-left">
                        SolvedIt: Your Key to Effortless Task Mastery. Simplify, organize, and conquer your to-do list with our intuitive task management platform. Elevate your productivity journey now!
                        </p>
                        <div className="flex gap-3" >
                            <a href="https://github.com/tanjilahamed99" >
                                <p className="text-2xl border border-black w-fit p-2 rounded-full hover:bg-yellow-500 hover:text-white hover:border-none"><FaGithub></FaGithub></p>
                            </a>
                            <a href="https://www.linkedin.com/in/tanjil-ahamed/">
                                <p className="text-2xl border border-black w-fit p-2 rounded-full hover:bg-yellow-500 hover:text-white hover:border-none"><FaLinkedinIn></FaLinkedinIn></p>
                            </a>
                            <a href="https://www.facebook.com/BoTKT78/">
                                <p className="text-2xl border border-black w-fit p-2 rounded-full hover:bg-yellow-500 hover:text-white hover:border-none"><FaFacebookF></FaFacebookF></p>
                            </a>

                        </div>
                    </div>
                    <nav className="lg:w-[25%] mx-auto text-left w-full" >
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className="lg:w-[25%] mx-auto text-left w-full" >
                        <header className="footer-title">My Location</header>
                        <a className="link link-hover">Saheprotap,Narsingdi</a>
                        <a className="link link-hover">Bangladesh</a>
                        <header className="font-bold mt-2 mb-1">My Email</header>
                        <a className="link link-hover">tanjil.ahamed0199@gmail.com</a>
                    </nav>
                    <nav className="lg:w-[25%] mx-auto text-left w-full">
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                        <a className="link link-hover">Cookie policy</a>
                        <a className="link link-hover">Local policy</a>
                    </nav>
                </div>
                <aside className="bg-black w-full text-white p-5">
                    <p>Copyright © 2023 - All right reserved by <span className="font-semibold">Tanjil Ahamed</span></p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;