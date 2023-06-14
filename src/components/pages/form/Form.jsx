import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Form = ({message,productsInCart,setFormAvailable,setProductsInCart}) =>{
    const [userData,setUserData] = useState({to_name:'',reply_to:'',to_email:''});
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if(validEmail.test(userData.to_email)){
            emailjs.sendForm('envServiceId', 'envTemplateId', e.target, 'envPublicKey')
            .then((result)=>{
                console.log(result);
            }, (error)=> {
                console.log(error);
            });
        }
        else{
            alert('Ingrese formato email valido');
        }
        setProductsInCart([]);
        navigate('/');
    }

    const handleChange = (e) =>{
        setUserData({...userData,[e.target.name] : e.target.value});
        console.log(userData);
    }

    return <div>
        <button onClick={()=>setFormAvailable(false)}>back</button>
        <form onSubmit={handleSubmit}>
            <div className="inputGroup">
                <label>Ingrese Nombre Completo</label>
                <input type="text" name="to_name" onChange={handleChange}/>
            </div>
            <div className="inputGroup">
                <label>Ingrese Email</label>
                <input type="text" name="to_email" onChange={handleChange}/>
            </div>
            <input type="text" style={{display:'none'}} name="message" value={message}/>
            <input type="text" style={{display:'none'}} name="reply_to" value='taliercioluis1@gmail.com'/>
            <button type="submit">comprar</button>
        </form>
    </div>
}

export default Form;