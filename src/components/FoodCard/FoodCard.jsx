import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userAuth from "../../hooks/userAuth";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCarts from '../../hooks/useCarts';


const FoodCard = ({ item }) => {

    const { name, recipe, image, price, _id } = item;
    const { user } = userAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCarts();

    const handleAddCart = () => {
        // console.log(food, user.email);
        if (user && user.email) {
            // send cart to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success(`${name} added in cart`);
                    }
                })
            // refetch Cart to update the cart items count
            refetch();



        }
        else {
            Swal.fire({
                title: "You are not logged in !",
                text: "Please login for add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // redrect to the login page
                    navigate('/login', { state: { from: location } });

                }
            });

        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute left-72 top-5 bg-slate-700 text-white font-bold py-2 px-4 rounded-md ">${price}</p>
            <div className="card-body flex justify-center items-center text-center">
                <h2 className="card-title text-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddCart} className="btn btn-outline btn-info border-0 border-b-4">Add to Cart</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default FoodCard;