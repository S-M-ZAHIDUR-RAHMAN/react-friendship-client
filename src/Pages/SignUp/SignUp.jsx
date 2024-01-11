import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data?.name, data?.photoURL)
                    .then(() => {
                        //create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photoURL,
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res=>{
                            if(res.data.insertedId){
                                console.log('user added to the database');
                                reset();
                                swal("Good job!", "Sign Up Done!", "success");
                                logOut();
                                navigate('/dashboard')
                            }
                        })
                       
                    }).catch((error) => {
                        console.log(error)
                    });
            })
      
    };


    return (
        <>
            <Helmet>
                <title>Friendship | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Give your details here and register yourself to our amazing community of Friendship-----</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-600">Minimum 6 characters</span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-600">Maximum 20 characters</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600">Password must have one Uppercase, one Lowercase, one Number and one Special character </span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="flex justify-center px-6"><small>Already have an account? <Link className="text-blue-500 underline" to="/login">Login here</Link> </small></p>
                        <div className="divider"></div> 
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;