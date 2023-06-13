import React, { useState } from "react";



const Form = () =>{
    const [userData,setUserData] = useState({name:'',lastname:'',email:''});

    const handleSubmit = (e) =>{
        e.preventDefault();

        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        
        if(validEmail.test(userData.email)){
            let data = {
                nombre:userData.name,
                apellido:userData.lastname,
                email:userData.email
            }
            console.log(data);
        }
        else{
            alert('Ingrese formato email valido');
        }
    }

    const handleChange = (e) =>{
        setUserData({...userData,[e.target.name] : e.target.value});
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div className="inputGroup">
                <label>Ingrese Nombre</label>
                <input type="text" name="name" onChange={handleChange}/>
            </div>
            <div className="inputGroup">
                <label>Ingrese Apellido</label>
                <input type="text" name="lastname" onChange={handleChange}/>
            </div>
            <div className="inputGroup">
                <label>Ingrese Email</label>
                <input type="text" name="email" onChange={handleChange}/>
            </div>
            <button type="submit">comprar</button>
        </form>
    </div>
}

export default Form;