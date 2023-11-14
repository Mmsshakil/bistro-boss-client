import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>

            {title && <Cover
                img={coverImg}
                title={title}
            ></Cover>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
                {
                    items.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;