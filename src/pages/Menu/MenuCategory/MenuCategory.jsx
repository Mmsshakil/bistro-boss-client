import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>

            {title && <Cover
                img={coverImg}
                title={title}
            ></Cover>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5 mb-5">
                {
                    items.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center mb-10">
                <Link to='/order'>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;