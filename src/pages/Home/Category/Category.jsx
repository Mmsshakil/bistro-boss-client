
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide className='mb-16'>
                    <img src={img1} alt="" />
                    <h1 className='lg:text-3xl uppercase text-white shadow-lg text-center -mt-7 lg:-mt-16'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide className='mb-16'>
                    <img src={img2} alt="" />
                    <h1 className='lg:text-3xl uppercase text-white shadow-lg text-center -mt-7 lg:-mt-16'>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide className='mb-16'>
                    <img src={img3} alt="" />
                    <h1 className='lg:text-3xl uppercase text-white shadow-lg text-center -mt-7 lg:-mt-16'>Soup</h1>
                </SwiperSlide>
                <SwiperSlide className='mb-16'>
                    <img src={img4} alt="" />
                    <h1 className='lg:text-3xl uppercase text-white shadow-lg text-center -mt-7 lg:-mt-16'>Desert</h1>
                </SwiperSlide>
                <SwiperSlide className='mb-16'>
                    <img src={img5} alt="" />
                    <h1 className='lg:text-3xl uppercase text-white shadow-lg text-center -mt-7 lg:-mt-16'>Salad</h1>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;