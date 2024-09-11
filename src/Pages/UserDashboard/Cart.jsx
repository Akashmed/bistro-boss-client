import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import UseCart from "../../hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const Cart = () => {
    const [cart, refetch] = UseCart();
    const axiosSecure = UseAxiosSecure();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>
            <SectionTitle subHeading='My cart' heading='Wanna Add More ?'></SectionTitle>
            <div className="flex justify-between">
                <h2 className="text-4xl">Total Items: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: ${totalPrice}</h2>
                <button className="btn text-black hover:text-white bg-[#D1A054]">PAY</button>
            </div>
            <div className="mt-4">
                <div className="overflow-x-auto rounded-xl">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-black">
                                <th></th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td><img className="w-24 h-auto" src={item.image}></img></td>
                                    <td>{item.price}</td>
                                    <td className="text-center">
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-800"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;