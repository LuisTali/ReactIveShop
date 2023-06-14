import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import './Form.css'

const Form = ({theme,message,productsInCart,setFormAvailable,setProductsInCart}) =>{
    const [userData,setUserData] = useState({to_name:'',reply_to:'',to_email:'',adress:''});
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if(validEmail.test(userData.to_email)){
            emailjs.sendForm('envServiceId', 'envTemplateId', e.target, 'envPublicKey')
            .then((result)=>{
                console.log(result);
                setProductsInCart([]);
                navigate('/');
            }, (error)=> {
                console.log(error);
            });
        }
        else{
            alert('Ingrese formato email valido');
        }
        
    }

    const handleChange = (e) =>{
        setUserData({...userData,[e.target.name] : e.target.value});
        console.log(userData);
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
                <label>Direccion</label>
                <input type="text" name="adress" onChange={handleChange}/>
            </div>
            <input type="text" readOnly style={{display:'none'}} name="message" value={message}/>
            <input type="text" readOnly style={{display:'none'}} name="reply_to" value='taliercioluis1@gmail.com'/>
            <button type="submit">comprar</button>
        </form>
    </div>
}

export default Form;