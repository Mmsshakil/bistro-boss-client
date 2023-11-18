import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";





const SIgnUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const {createUser} = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600 pt-1">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-600 pt-1">Email is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 15,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
                            })} placeholder="password" className="input input-bordered" />

                            {errors.password?.type === 'required' && <span className="text-red-600 pt-1">Password is required</span>}

                            {errors.password?.type === 'minLength' && <span className="text-red-600 pt-1">Password must be 6 characters</span>}

                            {errors.password?.type === 'maxLength' && <span className="text-red-600 pt-1">Password must be less than 15 characters</span>}

                            {errors.password?.type === 'pattern' && <span className="text-red-600 pt-1">Password must have a-z, A-Z, 0-9 & special character</span>}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='text-center mb-5 text-yellow-600'>
                        <h2>Already registered? <Link className='font-bold' to='/login'>Go to log in</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIgnUp;