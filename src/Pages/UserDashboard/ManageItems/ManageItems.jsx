import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseMenu from "../../../hooks/UseMenu";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = UseMenu();
    const axiosSecure = UseAxiosSecure();

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                }
            }
        });
    }
    return (
        <div>
            <SectionTitle subHeading='Hurry UP' heading='Manage all items'></SectionTitle>
            <div className="flex justify-between">
                <h2 className="text-4xl">Total Items: {menu.length}</h2>
            </div>
            <div className="mt-4">
                <div className="overflow-x-auto rounded-xl">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-black">
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th className="text-center">Update</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td><img className="w-24 h-auto" src={item.image}></img></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td className="text-center">
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className="btn btn-ghost btn-lg">
                                                <FaEdit className="text-[#D1A054]"></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="text-center">
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg">
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

export default ManageItems;