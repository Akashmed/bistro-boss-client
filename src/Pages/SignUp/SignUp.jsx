import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import img from '../../../src/assets/others/authentication2.png'
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = UseAxiosPublic();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then(() => {
                updateUserProfile(data.name, data.PhotoURL)
                    .then(() => {

                        const userInfo = {
                            name: data.name,
                            email: email
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Sign up successful",
                                        text: "Welcome to Bistro Boss!",
                                    });
                                    navigate('/');
                                    reset();
                                }
                            })
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.log(err))

    };

    return (
        <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero-content w-full max-w-5xl flex flex-col lg:flex-row-reverse justify-between items-center">
                <div className="w-full lg:w-1/2 h-auto p-4 text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold mb-4">Sign Up now!</h1>
                    <img src={img} className="max-w-full h-auto mx-auto lg:mx-0" alt="Sign up illustration" />
                </div>

                <div className="card bg-base-100 w-full lg:w-1/2 max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("PhotoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" required />
                            {errors.PhotoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
                                })} placeholder="Password" className="input input-bordered" required />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters long</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password should be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password should contain one digit, one uppercase, one lowercase and one special character</p>}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Sign Up</button>
                        </div>

                        <label className="label">
                            <p className="label-text-alt text-center">Already have an account? <Link className="link text-blue-700 font-semibold link-hover" to="/login">Login</Link></p>
                        </label>
                        <SocialLogin from='/'></SocialLogin>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default SignUp;