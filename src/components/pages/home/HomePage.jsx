import React,{useContext, useEffect, useState} from 'react';
import './HomePage.css';
import {useLocation} from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext.jsx';

const HomePage = () =>{
    const [location,setLocation] = useState(useLocation().pathname);
    const [greeting,setGreeting] = useState('Welcome to ReactIve Shop')
    const {theme} = useContext(ThemeContext);
    
    useEffect(()=>{
        if(location != '/'){
            setGreeting('Opss, we could not find the page you were looking for')
        }
    },[location]);

    return<div className={theme ? 'homepage bodyLight' : 'homepage bodyDark'}>
        <h1>{greeting}</h1>
        <h4>Seleccione una categoria para comenzar su tour</h4>
    </div> 

}

export default HomePage;