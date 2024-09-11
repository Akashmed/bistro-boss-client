import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseCart from "../../hooks/UseCart";


const FoodCard = ({ item }) => {
    const { name, image, price, _id } = item;
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();
    const [,refetch] = UseCart();

    const handleCart = food => {

        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            };

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} has been added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }

                });
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: location });
                }
            });
        }
    }

    return (
        <div className="relative w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover w-full h-56" src={image} alt="avatar" />
            <div className="absolute top-0 right-0 mt-4 mr-4 font-semibold bg-white text-[#BB8506] p-2 rounded-lg shadow-md">
                ${price}
            </div>
            <div className="py-5 text-center">
                <h4 className="text-xl font-bold text-white">{name}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-200 p-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <button onClick={() => handleCart(item)} className="btn rounded border-b-4 border-[#BB8506] hover:bg-black bg-white mt-4 text-[#BB8506]">Add to cart</button>
            </div>
        </div>

    );
};

export default FoodCard;