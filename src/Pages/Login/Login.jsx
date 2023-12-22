
import { FaEyeSlash, FaEye, FaGooglePlusG, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, } = useForm()
    const [see, setSee] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext)


    const onSubmit = (data) => {
        const email = data.email
        const password = data.password

        loginUser(email, password)
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Login Successful!',
                    'success'
                )
                location.state ? navigate(location.state) : navigate('/')
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })


    }


    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Login Successful!',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Login Successful!',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }




    return (
        <div className="hero min-h-screen bg-base-200 bg-center bg-cover bg-[url(https://i.ibb.co/XF74Hc8/jason-briscoe-e-Lf-QTm-Df-Lk-unsplash.jpg)]" >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content w-full flex-col ">
                <div className="card lg:w-[40%] md:w-[50%]">
                    <h2 className="text-center font-bold text-2xl mb-1 text-white">Please Login?</h2>
                    <p className="text-white">Welcome to our secure login page. Enter your credentials to access your account and enjoy a personalized experience on our platform</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body shadow-2xl shadow-gray-400">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input {...register("email")} name="email" type="email" placeholder="email" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input {...register("password")} name="password" type={see ? "password" : 'text'} placeholder="password" className=" p-4 rounded-md border-b-4" required />
                            {
                                see ? <FaEyeSlash onClick={() => setSee(!see)} className="absolute text-xl text-black bottom-12 right-5"></FaEyeSlash>
                                    : <FaEye onClick={() => setSee(!see)} className="absolute text-xl text-black bottom-12 right-5"></FaEye>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link text-white link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-white">Login</button>
                        </div>
                        <Link to={'/signUP'}><p className="text-white">New here? <span className="font-bold">Sign Up</span></p></Link>
                    </form>
                    <div className="flex gap-5">
                        <button onClick={handleGoogleLogin} className="btn btn-outline mt-4 text-white"><FaGooglePlusG className="text-2xl"></FaGooglePlusG> google</button>
                        <button onClick={handleGithubLogin} className="btn btn-outline mt-4 text-white"><FaGithub className="text-2xl"></FaGithub> Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;