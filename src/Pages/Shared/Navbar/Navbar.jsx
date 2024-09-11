import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../../../hooks/UseCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = UseCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logout successful",
                    text: "Come back soon!",
                });
            })
            .catch(err => console.log(err))
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our menu</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li><Link to='/order/salad'>Order Now</Link></li>
        {
            user ?
                <>
                    <li><button onClick={handleLogOut}>Logout</button></li>

                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? user.displayName : ''}
                    <Link to='dashboard/cart'>
                        <button className="btn">
                            <FaShoppingCart />
                            <span className="badge text-orange-500 ">+{cart.length}</span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;