import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');



    return (
        <div>
            <Cover img={coverImg} title={'order food'}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                {/* salad */}
                <TabPanel>
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
                        {
                            salad.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div> */}
                    <OrderTab
                        item={salad}></OrderTab>
                </TabPanel>

                {/* pizza */}
                <TabPanel>
                    <OrderTab item={pizza}></OrderTab>
                </TabPanel>

                {/* soups */}
                <TabPanel>
                    <OrderTab item={soup}></OrderTab>
                </TabPanel>

                {/* desserts */}
                <TabPanel>
                    <OrderTab item={dessert}></OrderTab>
                </TabPanel>

                {/* drinks */}
                <TabPanel>
                    <OrderTab item={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;