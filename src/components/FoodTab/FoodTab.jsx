import FoodCard from "../FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";

const FoodTab = ({ items }) => {
    const [foodItems, setFoodItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const ItemsPerPage = 6;
    const [totalPages, setTotalPages] = useState(0);

    const pages = [...Array(totalPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/menu?category=${items}&page=${currentPage}&size=${ItemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setFoodItems(data.items);
                setTotalPages(Math.ceil(data.totalItems / ItemsPerPage));
            });
    }, [items, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Swiper
                className="mySwiper"
            >
                <SwiperSlide key={currentPage}>
                    <div className="grid md:grid-cols-3 justify-items-center grid-cols-2 gap-7">
                        {foodItems.map((item) => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="flex justify-center mt-4">
                {
                    pages.map(page => <button
                        key={page}
                        className={`px-4 py-2 mx-1 ${currentPage === page ? 'bg-[#BB8506] text-white' : 'bg-gray-200'}`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page + 1}
                    </button>)
                }
            </div>
        </div>
    );
};

export default FoodTab;
