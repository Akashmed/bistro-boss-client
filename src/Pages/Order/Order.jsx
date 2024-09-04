import Cover from "../Shared/Cover/Cover";
import orderCover from '../../../src/assets/shop/banner2.jpg'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import UseMenu from "../../hooks/UseMenu";
import FoodTab from "../../components/FoodTab/FoodTab";
import { useParams } from "react-router-dom";
import { toWords } from 'number-to-words';
import { Helmet } from "react-helmet-async";


const Order = () => {
    const [menu] = UseMenu();
    const categories = ['salads', 'pizzas', 'soups', 'desserts']
    const { category } = useParams();
    const initialValue = categories.indexOf(category);
    let word = 'one';

    if (initialValue >= 0) {
        word = toWords(initialValue + 1);
    }
    

    const [value, setValue] = React.useState(word);
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title="Order Food" quote={`Your Favorite Meals Just a Click Away`} />
            <div className="my-10">
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="primary"
                        aria-label="tabs example"
                        sx={{
                            '& .MuiTab-root': {
                                color: 'white',
                                fontWeight: 600,
                                fontFamily: 'sans-serif',
                            },
                            '& .MuiTab-root.Mui-selected': {
                                color: 'orange',
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: 'orange',
                            },
                        }}
                    >
                        <Tab value="one" label="SALAD" />
                        <Tab value="two" label="PIZZA" />
                        <Tab value="three" label="SOUPS" />
                        <Tab value="four" label="DESSERTS" />
                        <Tab value="five" label="DRINKS" />
                    </Tabs>
                </Box>
            </div>
            {value === "one" && <FoodTab items={salads}></FoodTab>}
            {value === "two" && <FoodTab items={pizzas}></FoodTab>}
            {value === "three" && <FoodTab items={soups}></FoodTab>}
            {value === "four" && <FoodTab items={desserts}></FoodTab>}
            {value === "five" && <FoodTab items={drinks}></FoodTab>}
        </div>

    );
};

export default Order;