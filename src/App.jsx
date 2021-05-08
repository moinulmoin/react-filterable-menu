import React, { useState } from 'react';
import Buttons from './components/Buttons';
import MenuItems from './components/MenuItems';
import data from './data';

let allCategories = data.map((item) => item.category);
allCategories = ['all', ...new Set(allCategories)];
console.log(allCategories);
function App() {
    const [menuItems, setMenuItems] = useState(data);
    const [categories] = useState(allCategories);

    const handleClick = (cate) => {
        if (cate === 'all') {
            setMenuItems(data);
            return;
        }
        const newList = data.filter((item) => item.category === cate);
        setMenuItems(newList);
    };

    return (
        <div className="container pt-5">
            <Buttons handleClick={handleClick} categories={categories} />
            <MenuItems menuItems={menuItems} />
        </div>
    );
}

export default App;
