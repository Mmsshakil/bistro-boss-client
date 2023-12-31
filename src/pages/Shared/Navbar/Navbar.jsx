import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { BsCart4 } from "react-icons/bs";
import useCarts from "../../../hooks/useCarts";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCarts();

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log('Log Out success', result);
            })
            .then(error => {
                console.log(error.message);
            })
    }

    const navOptions = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/dashboard/cart'>
            <button className="btn">
                <div className="text-xl mr-2">
                    <BsCart4 />
                </div>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>

        {user ?
            <li><button onClick={handleLogOut} className="btn btn-primary">Log Out</button></li>
            :
            <li><Link to='/login'>Login</Link></li>
        }




    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-10 bg-black max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 justify-center items-center">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;