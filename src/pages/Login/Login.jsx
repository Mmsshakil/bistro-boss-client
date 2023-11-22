
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa";
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const validateCaptchaValue = e => {

        const value = e.target.value;

        if (validateCaptcha(value) == true) {
            // alert('Captcha Matched');
            setDisabled(false);
        }

        else {
            // alert('Captcha Does Not Match');
            setDisabled(true);
        }
    }

    return (

        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={validateCaptchaValue} type="text" name="captcha" placeholder="Type the text above" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6 flex items-center justify-center">

                            <input disabled={disabled} className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-center mb-5 text-yellow-600'>
                        <h2>New here? <Link className='font-bold' to='/signup'>Create a New Account</Link></h2>
                    </div>
                    <div className="divider divider-info">Social Login</div>

                    {/* TODO: here will add the google login button */}
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;