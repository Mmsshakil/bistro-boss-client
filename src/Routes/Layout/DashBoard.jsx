import { NavLink, Outlet } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaCalendar, FaHouse, FaWallet } from "react-icons/fa6";
import { TbMessageDollar } from "react-icons/tb";
import { BsCalendar3 } from "react-icons/bs";
import { LuShoppingBag } from "react-icons/lu";
import { MdAttachEmail } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { CiCircleList } from "react-icons/ci";
import { FaBook } from "react-icons/fa";


const DashBoard = () => {


    const isAdmin = true;

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-600">
                <ul className="menu space-y-2">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome'><FaHouse></FaHouse>Admin Home</NavLink></li>

                            <li><NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils>Add Items</NavLink></li>

                            <li><NavLink to='/dashboard/manageItems'><CiCircleList></CiCircleList>Manage Items</NavLink></li>

                            <li><NavLink to='/dashboard/manageBookings'><FaBook></FaBook>Manage Bookings</NavLink></li>

                            <li><NavLink to='/dashboard/users'><FcManager></FcManager>All Users</NavLink></li>

                        </> : <>

                            <li><NavLink to='/dashboard/userHome'><FaHouse></FaHouse> User Home</NavLink></li>

                            <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>

                            <li><NavLink to='/'><FaWallet></FaWallet> Payment History</NavLink></li>

                            <li><NavLink to='/dashboard/cart'><FiShoppingCart></FiShoppingCart> My Cart</NavLink></li>

                            <li><NavLink to='/'><TbMessageDollar></TbMessageDollar> Add Review</NavLink></li>

                            <li><NavLink to='/'><BsCalendar3></BsCalendar3> My Booking</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>

                    {/* shared nav links */}

                    <li><NavLink to='/'><FaHouse></FaHouse>Home</NavLink></li>

                    <li><NavLink to='/menu'><LuShoppingBag></LuShoppingBag>Order</NavLink></li>
                    <li><NavLink to='/'><MdAttachEmail></MdAttachEmail>Contact</NavLink></li>
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