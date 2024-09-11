import FoodCard from "../../../components/FoodCard/FoodCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRec = () => {
    const items = [
        {
            name:'Baked risotto', price:30, image:'https://i.ibb.co/pfS2233/Oven-baked-risotto.webp', _id:'6s6d6s9a'
        },
        {
            name:'Piri-piri chicken', price:20, image:'https://i.ibb.co/GVbhFgn/Piri-piri-chicken.webp', _id:'6s6d6s9agd'
        },
        {
            name:'Ravioli lasagne', price:20, image:'https://i.ibb.co/vPy5fm0/Ravioli-lasagne.webp', _id:'6s6d6s9agdad'
        }
    ]
    return (
        <section className="space-y-2">
            <SectionTitle
                subHeading='Should Try'
                heading='CHEF RECOMMENDs'
            ></SectionTitle>
            <div className="grid md:grid-cols-3 justify-items-center grid-cols-2">
                {
                    items.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                }
            </div>
            

        </section>
    );
};

export default ChefRec;