import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ item }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 justify-center items-center">
            {
                item.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;