import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGooglePlusG } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../Firebase/firebase";
import { useForm } from "react-hook-form";


const SignUP = () => {
    const { register, handleSubmit, } = useForm()
    const [see, setSee] = useState(true)
    const navigate = useNavigate()
    const { createUser, googleLogin } = useContext(AuthContext)


    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        const img = data.img
        const name = data.name

        createUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: img
                }).then(() => {
                    Swal.fire(
                        'Good job!',
                        'Create account Successful!',
                        'success'
                    )
                    location.state ? navigate(location.state) : navigate('/')
                }).catch(() => { })
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



    return (
        <div className="hero min-h-screen bg-base-200 bg-center bg-cover bg-[url(https://i.ibb.co/XF74Hc8/jason-briscoe-e-Lf-QTm-Df-Lk-unsplash.jpg)]" >

            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content w-full flex-col">
                <div className="card md:w-[50%] lg:w-[40%]">
                    <h2 className="text-center font-bold text-2xl mb-1 text-white">Sign Up</h2>
                    <p className="text-white">Welcome to our secure sign up page. Enter your credentials to access your account and enjoy a personalized experience on our platform</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body shadow-2xl shadow-gray-400">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input {...register("name")} name="name" type="text" placeholder="name" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input {...register("email")} name="email" type="email" placeholder="email" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Image</span>
                            </label>
                            <input {...register("img")} name="img" type="text" placeholder="http..." className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input {...register("password")} name="password" type={see ? "password" : 'text'} placeholder="password" className=" p-4 rounded-md border-b-4" required />
                            {
                                see ? <FaEyeSlash onClick={() => setSee(!see)} className="absolute text-xl text-black bottom-5 right-5"></FaEyeSlash>
                                    : <FaEye onClick={() => setSee(!see)} className="absolute text-xl text-black bottom-5 right-5"></FaEye>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-white">Create Account</button>
                        </div>
                        <Link to={'/login'}><p className="text-white">Already have account? <span className="font-bold">Login</span></p></Link>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-outline mt-4 text-white"><FaGooglePlusG className="text-2xl"></FaGooglePlusG> google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUP;