import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRec = () => {
    return (
        <section className="space-y-2">
            <SectionTitle
                subHeading='Should Try'
                heading='CHEF RECOMMENDs'
            ></SectionTitle>
            <div className="flex justify-center space-x-6">
                <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover w-full h-56" src='https://i.ibb.co/pfS2233/Oven-baked-risotto.webp' alt="avatar" />

                    <div className="py-5 text-center">
                        {/* <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">John Doe</a> */}
                        <h4 className="text-xl font-bold text-white">Baked risotto</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-200 p-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn rounded border-b-4 border-[#BB8506] hover:bg-black bg-white mt-4 text-[#BB8506]">Add to cart</button>
                    </div>
                </div>
                <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover w-full h-56" src='https://i.ibb.co/GVbhFgn/Piri-piri-chicken.webp' alt="avatar" />

                    <div className="py-5 text-center">
                        <h4 className="text-xl font-bold text-white">Piri-piri chicken</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-200 p-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn rounded border-b-4 border-[#BB8506] hover:bg-black bg-white mt-4 text-[#BB8506]">Add to cart</button>
                    </div>
                </div>
                <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover w-full h-56" src='https://i.ibb.co/vPy5fm0/Ravioli-lasagne.webp' alt="avatar" />
                    <div className="py-5 text-center">
                        <h4 className="text-xl font-bold text-white">Ravioli lasagne</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-200 p-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn rounded border-b-4 border-[#BB8506] hover:bg-black bg-white mt-4 text-[#BB8506]">Add to cart</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ChefRec;