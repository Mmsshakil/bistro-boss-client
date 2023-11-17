import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiSolidQuoteLeft } from 'react-icons/bi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'Testimonial'}
            ></SectionTitle>



            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className=" flex flex-col items-center text-center gap-3 mt-10 px-48">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <BiSolidQuoteLeft className="text-8xl"></BiSolidQuoteLeft>
                            <p>{review.details}</p>
                            <p className="text-2xl text-yellow-600">{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    );
};

export default Testimonial;