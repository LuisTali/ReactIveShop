import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {CartContext} from '../../../context/CartContext.jsx'
import {db} from '../../../firebaseConfig.js';
import {collection, doc, addDoc, updateDoc} from "firebase/firestore";
import emailjs from '@emailjs/browser';
import './Form.css'
import Swal from 'sweetalert2'

const Form = ({theme,productsInCart,setFormAvailable}) =>{
    const [userData,setUserData] = useState({to_name:'',reply_to:'',to_email:'',adress:'',cellphone:''});
    const [verifyEmail,setVerifyEmail] = useState('');
    const {totalPrice, emptyCart} = useContext(CartContext);
    const [message,setMessage] = useState('');
    const navigate = useNavigate();

    console.log(verifyEmail);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if(!userData.to_email || !userData.to_name || !userData.adress || !userData.cellphone || !verifyEmail){
            Swal.fire({
                title: 'Llene todos los campos',
                showDenyButton: false,
                confirmButtonText: 'Entendido',
            })
            return;
        }else if(userData.to_email != verifyEmail){
            Swal.fire({
                title: 'Compruebe que su email coincida las dos veces',
                showDenyButton: false,
                confirmButtonText: 'Entendido',
            })
            return;
        }
        createMessage();

        if(validEmail.test(userData.to_email)){
        Swal.fire(
            'Gracias por su compra',
            'Los detalles de la orden han sido enviados a su mail y sera redigirido a la homepage',
            'success'
        )
        //Creo la orden y la subo a firebase
        let order = {
            buyer: userData,
            items: productsInCart,
            total: totalPrice()
        }
        let ordersCollection = collection(db,"orders");
        addDoc(ordersCollection,order);

        for(const product of productsInCart){
            updateDoc(doc(db,"productos",product.id),{
                stock: product.stock - product.quantity
            });
        };

        await setTimeout(()=>{
            emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target,import.meta.env.VITE_PUBLIC_KEY)
            .then((result)=>{
                emptyCart();
                navigate('/');
            }, (error)=> {
                console.log(error);
            });
        },3000);
        }
        else{
            alert('Ingrese formato email valido');
        }
    }

    const createMessage = () =>{
        let auxmessage = `<div>
        <h3>Con envio a: ${userData.adress}</h3>
        <h3>Telefono: ${userData.cellphone}</h3>
        <ul>${productsInCart.map((product) =>{
            return (
                `<li><h3>Name: ${product.name}</h3><h3>Quantity: ${product.quantity}</h3><h3>Price: $${product.price}</h3></li>`    
            )} 
        )}</ul>
        <h3>Total Price: $${totalPrice()}</h3>
        </div>`;

        setMessage(auxmessage);
    }

    const handleChange = (e) =>{
        setUserData({...userData,[e.target.name] : e.target.value});
    }

    return <div className={theme ? 'form light bodyLight' : 'form dark bodyDark'}>
        <button className="backBtn" onClick={()=>setFormAvailable(false)}>back</button>
        <form onSubmit={handleSubmit}>
            <div className="inputGroup">
                <label>Nombre Completo</label>
                <input type="text" name="to_name" onChange={handleChange}/>
            </div>
            <div className="inputGroup">
                <label>Email</label>
                <input type="text" name="to_email" onChange={handleChange}/>
            </div>
            <div className="inputGroup">
                <label>Email nuevamente</label>
                <input type="text" name="verifyEmail" onChange={(e)=>setVerifyEmail(e.target.value)}/>
            </div>
            <div className="inputGroup">
                <label>Direccion</label>
                <input type="text" name="adress" onChange={handleChange}/>
            </div>
            <div className="inputGroup">
                <label>Telefono</label>
                <input type="text" name="cellphone" onChange={handleChange}/>
            </div>
            <input type="text" readOnly style={{display:'none'}} name="message" value={message}/>
            <input type="text" readOnly style={{display:'none'}} name="reply_to" value='taliercioluis1@gmail.com'/>
            <button type="submit">comprar</button>
        </form>
    </div>
}

export default Form;