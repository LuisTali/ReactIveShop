import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { db } from "../../../firebaseConfig";
import {doc,collection,documentId,getDocs,where, query} from "firebase/firestore";
import { ThemeContext } from '../../../context/ThemeContext.jsx';
import './OrderSearch.css';

const OrderSearch = () =>{
    const {id} = useParams();
    const [order,setOrder] = useState({});
    const [totalItems,setTotalItems] = useState(0);
    const [loading,setLoading] = useState(true);
    const {theme} = useContext(ThemeContext);

    useEffect(()=>{
        let collectionDocs = collection(db,"orders");
        const queryOrder = query(collectionDocs,where("orderId","==",id));
        getDocs(queryOrder)
        .then((res)=>{
            if(res.docs[0]){
                setOrder(res.docs[0].data());
                setLoading(false);
            }
        })
        .catch((err)=>console.log(err));
    },[id]);

    const getTotalItems = () =>{
        let quantity = 0;
        for(const item of order.items){
            quantity = quantity + item.quantity
        }
        return quantity;
    }
    const getTotalPrice = () =>{
        let totalPrice = 0;
        for(const item of order.items){
            totalPrice = totalPrice + item.price
        }
        return totalPrice;
    }
    if(!loading){
      return <div className={theme ? 'orderPage bodyLight' : 'orderPage bodyDark'}>
        <div className='orderDetails'>
            <h2>Detalles de la Orden {id}</h2>
            <h3>Cliente: {order.buyer.to_name}</h3>
            <h3>Precio Total: ${order.total}</h3>
            <ul className='itemsList'>
                <li key='itemDetails' className='itemDetails'>
                <div className='principalInfo'>
                    <h3>Nombre</h3><h3>Cantidad</h3><h3>Precio</h3> 
                </div>
                </li>
                {order.items.map((item)=>{
                    return <li key={item.idCart} className='itemDetails'>
                        <div className='principalInfo'>
                            <h3 className='name'>{item.name}</h3><h3>{item.quantity}</h3><h3>${item.price}</h3>
                        </div>
                        <h4>{item.name}</h4>
                    {item.extras ? item.extras.map((extra)=><h5 key={extra}>{extra}</h5>) : null}
                </li>
                })}
            </ul>
            <div className='total'><h3>Total</h3> <h3>{getTotalItems()}</h3><h3>${getTotalPrice()}</h3></div>
        </div>
    </div>  
    }else{
        return <div className={theme ? 'orderPageLoading bodyLight' : 'orderPageLoading bodyDark'}> 
            <h2>Detalles de la Orden {id}</h2>
            <h1>Loading...</h1>
        </div>
    }
    
}

export default OrderSearch;
