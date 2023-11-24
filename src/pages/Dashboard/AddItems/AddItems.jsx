import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {

    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        // image upload to imgbb and then get an url
        const imgFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imgFile, {

            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
    };

    return (
        <div>
            <SectionTitle
                subHeading='What is new?'
                heading='ADD AN ITEM'
            ></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                    </div>

                    <div className="flex gap-5">

                        {/* category */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="null" {...register("category", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="null" selected>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="pizza">Pizza</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>


                        {/* price */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />
                        </div>

                    </div>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="my-4">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-outline">Add Item <FaUtensils></FaUtensils></button>

                </form>
            </div>
        </div>
    );
};

export default AddItems;