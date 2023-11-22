import { NavLink, Outlet } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaCalendar, FaHouse, FaWallet } from "react-icons/fa6";
import { TbMessageDollar } from "react-icons/tb";
import { BsCalendar3 } from "react-icons/bs";
import { LuShoppingBag } from "react-icons/lu";


const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-600">
                <ul className="menu space-y-2">
                    <li><NavLink to='/dashboard/userHome'><FaHouse></FaHouse> User Home</NavLink></li>

                    <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>

                    <li><NavLink to='/'><FaWallet></FaWallet> Payment History</NavLink></li>

                    <li><NavLink to='/dashboard/cart'><FiShoppingCart></FiShoppingCart> My Cart</NavLink></li>

                    <li><NavLink to='/'><TbMessageDollar></TbMessageDollar> Add Review</NavLink></li>

                    <li><NavLink to='/'><BsCalendar3></BsCalendar3> My Booking</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHouse></FaHouse>Home</NavLink></li>
                   
                    <li><NavLink to='/menu'><LuShoppingBag></LuShoppingBag>Order</NavLink></li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;