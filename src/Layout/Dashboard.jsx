import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../hooks/UseCart";
import UseAdmin from "../hooks/UseAdmin";

const Dashboard = () => {
    const [cart] = UseCart();
    const [isAdmin] = UseAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <h2 className="text-3xl text-center text-black mb-3">Bistro Boss Resturant</h2>
                <ul className="menu text-black p-4">
                    {
                        isAdmin === true ?
                         <>
                            <li><NavLink to='/dashboard/adminHome'>
                                <FaHome></FaHome>
                                Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItems'>
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'>
                                <FaList></FaList>
                                Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageBookings'>
                                <FaBook></FaBook>
                                Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/users'>
                                <FaUsers></FaUsers>
                                All users</NavLink></li>
                        </> :
                         <>
                            <li><NavLink to='/dashboard/userHome'>
                                <FaHome></FaHome>
                                User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'>
                                <FaCalendar></FaCalendar>
                                Reservation</NavLink></li>
                            <li><NavLink to='/dashboard/cart'>
                                <FaShoppingCart></FaShoppingCart>
                                My Cart ({cart.length})</NavLink></li>
                            <li><NavLink to='/dashboard/review'>
                                <GoCodeReview />
                                Add Review</NavLink></li>
                            <li><NavLink to='/dashboard/bookings'>
                                <FaList></FaList>
                                My bookings</NavLink></li>
                        </>
                    }
                    <div className="border-t-2 border-black my-4"></div>
                    <li><NavLink to='/'>
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>
                    <li><NavLink to='/menu'>
                        <IoIosMenu />
                        Menu</NavLink>
                    </li>
                    <li><NavLink to='/contact'>
                        <FaEnvelope></FaEnvelope>
                        Email</NavLink>
                    </li>
                </ul>

            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;