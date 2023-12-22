import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAXiosPublic from "../../../Hooks/AxiosPublic/UseAxiosPublic";

const NewsLatter = () => {

    const axiosPublic = useAXiosPublic()

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        const email = data.email
        console.log(email)

        axiosPublic.post('/newsLatter', { email })
            .then(res => {
                if (res.data && !res.data.exist) {
                    console.log(res.data)
                    Swal.fire({
                        icon: "success",
                        title: "Your Email Address has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Already Exist',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className="hero h-[70vh] my-10" style={{ backgroundImage: 'url(https://i.ibb.co/M2GZvPh/images-15.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content w-full text-center text-neutral-content">
                <div className="w-[60%] mx-auto">
                    <h1 className="mb-5 text-3xl font-medium">Sing up to our newsletter for all the latest news</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center">
                        <input {...register("email")} placeholder="E-mail Address" className=" w-1/2 py-3 focus:border-none pl-2 text-white border-b-2 border-white bg-black bg-opacity-10" type="email" />
                        <button type="submit"><FaArrowRight className="text-white text-xl -ml-4"></FaArrowRight></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;