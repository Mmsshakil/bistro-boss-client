import featured from '../../../assets/home/featured.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'


const Featured = () => {
    return (
        <section className='featured-section bg-fixed text-white px-36 py-16 mb-16'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'featured'}
            ></SectionTitle>

            <div className='md:flex justify-center items-center md:gap-10 p-7 bg-slate-800 bg-opacity-20'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum distinctio quis veritatis soluta hic esse architecto, praesentium non recusandae asperiores, porro ratione quae perspiciatis, cumque deserunt cupiditate commodi dolore libero atque. Porro obcaecati, dolorum quia maxime laudantium molestias est odio impedit placeat temporibus, illum quibusdam optio tempora consequatur. A, dolores.</p>
                    <button className="btn btn-outline border-0 border-b-4">Default</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;