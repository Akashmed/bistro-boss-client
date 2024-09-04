
const FoodCard = ({ item }) => {
    const { name, image, price} = item;

    return (
        <div className="relative w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover w-full h-56" src={image} alt="avatar" />
            <div className="absolute top-0 right-0 mt-4 mr-4 font-semibold bg-white text-[#BB8506] p-2 rounded-lg shadow-md">
                ${price}
            </div>
            <div className="py-5 text-center">
                <h4 className="text-xl font-bold text-white">{name}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-200 p-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <button className="btn rounded border-b-4 border-[#BB8506] hover:bg-black bg-white mt-4 text-[#BB8506]">Add to cart</button>
            </div>
        </div>

    );
};

export default FoodCard;