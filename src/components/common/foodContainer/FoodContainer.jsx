import React from 'react';
import './FoodContainer.css';
import Product from '../product/Product.jsx';

const FoodContainer = ({items,quantityCart}) =>{
    return <div className='foodContainer'>
        <img id='employee' src='https://res.cloudinary.com/dvcmeanik/image/upload/v1685722386/ReactIveShop/employee.png'/>
        <div className='armrest'>
            <div className='glass'>
                {items.map((item) => <Product key={item.id} {...item} handleAdd={null} category='foods'/>)}
            </div>
        </div>
    </div>
}

export default  FoodContainer;