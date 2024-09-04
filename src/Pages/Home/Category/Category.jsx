import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle 
            subHeading={"From 11:00am to 10:00pm"}
            heading={"order online"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1}></img>
                    <h3 className='lg:text-4xl text-xl  uppercase text-white ml-1 -mt-14'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2}></img>
                    <h3 className='lg:text-4xl text-xl  uppercase text-white ml-1 -mt-14'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3}></img>
                    <h3 className='lg:text-4xl text-xl  uppercase text-white ml-1 -mt-14'>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4}></img>
                    <h3 className='lg:text-4xl text-xl uppercase text-white ml-1 -mt-14'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5}></img>
                    <h3 className='lg:text-4xl text-xl  uppercase text-white ml-1 -mt-14'>salads</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;