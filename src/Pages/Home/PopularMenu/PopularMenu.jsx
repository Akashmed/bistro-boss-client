import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import UseMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')
    
    return (
        <section>
            <SectionTitle 
            subHeading='Popular Items'
            heading='From Our Menu'>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 mb-20">
                {
                    popular.map(item => <MenuItems item={item} key={item._id}></MenuItems>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;