import React,{useEffect, useState} from 'react';
import './HomePage.css';

const HomePage = ({theme,greeting}) =>{

    return<div className={theme ? 'homepage bodyLight' : 'homepage bodyDark'}>
        <h1>{greeting}</h1>
        <h4>Seleccione una categoria para comenzar su tour</h4>
    </div> 

}

export default HomePage;