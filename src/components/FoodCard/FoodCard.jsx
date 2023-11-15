
const FoodCard = ({ item }) => {

    const { name, recipe, image, price } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute left-72 top-5 bg-slate-700 text-white font-bold py-2 px-4 rounded-md ">${price}</p>
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;