import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../../src/assets/menu/menu-bg.jpg'
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import UseMenu from "../../hooks/UseMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../src/assets/menu/pizza-bg.jpg'
import saladImg from '../../../src/assets/menu/salad-bg.jpg'
import soupImg from '../../../src/assets/menu/soup-bg.jpg'



const Menu = () => {
    const [menu] = UseMenu()
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu' quote='Would you like to try our dish?'></Cover>
            <SectionTitle
                subHeading='Do not miss'
                heading='Todays Offer'>
            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} img={dessertImg} quote={`"Dessert is like a feel-good song, and the best ones make you dance."`} title='desserts'></MenuCategory>
            <MenuCategory items={pizzas} img={pizzaImg} quote={`"There is no better feeling in the world than a warm pizza box on your lap."`} title='pizzas'></MenuCategory>
            <MenuCategory items={salads} img={saladImg} quote={`"A well-made salad must have a certain uniformity; it should make perfect sense for those ingredients to share a bowl."`} title='salads'></MenuCategory>
            <MenuCategory items={soups} img={soupImg} quote={`"Good soup is one of the prime ingredients of good living."`} title='soups'></MenuCategory>

        </div>
    );
};

export default Menu;