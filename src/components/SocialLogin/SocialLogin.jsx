import { FaGoogle } from "react-icons/fa";
import userAuth from "../../hooks/userAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import {  useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleSignIn } = userAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(res =>{
                    console.log(res.data);
                    navigate('/');
                })

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="flex justify-center items-center my-5">
            <button onClick={handleGoogleSignIn} className="btn btn-outline">
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;