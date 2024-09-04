import FoodCard from "../FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const FoodTab = ({ items }) => {
    
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
            <SwiperSlide>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-7">
                    {items.map((item) => (
                        <FoodCard key={item._id} item={item} />
                    ))}
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FoodTab;