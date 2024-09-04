import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title, img, quote }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} quote={quote}></Cover>}
            <div className={`grid md:grid-cols-2 gap-5 ${title && 'mt-10'} `}>
                {
                    items.map(item => <MenuItems item={item} key={item._id}></MenuItems>)
                }
            </div>
            <div className="mb-20 mt-1 flex justify-center">
                <Link to={`/order/${title}`}><button className="btn btn-outline px-14 border-0 border-b-4 mt-4">Order Food Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;