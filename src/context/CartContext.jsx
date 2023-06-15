import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [productsInCart,setProductsInCart] = useState([]);
    const [quantityCart,setQuantityCart] = useState(productsInCart.length);


    const handleAddDrinks = (item) =>{
        let totalPrice = item.quantity * item.price;
        if(productsInCart.length > 0){ //Si carro no esta vacio
            let productAlready = productsInCart.find((product) => product.name == item.name);
            if(productAlready){ //Si hay un producto con el mismo nombre en el carro
                productsInCart.map((product) => {
                    if(product.name === item.name){
                        product.quantity += item.quantity; 
                        product.price += totalPrice;
                    } 
                })
                //Entonces sumo 1 a cantidad de ese producto y actualizo el carrito
                let newProducts = [...productsInCart];
                setProductsInCart(newProducts)
            }else{
                let newProduct = {idCart:quantityCart,...item,price:totalPrice};
                setQuantityCart(quantityCart + item.quantity);
                let newProducts = [...productsInCart];
                newProducts.push(newProduct);
                setProductsInCart(newProducts)
            } 
        }else{ //Si el carro esta vacio creo un item nuevo y lo pusheo al arreglo sin mas
            let newProducts = [];
            let newProduct = {idCart:quantityCart,...item,quantity:item.quantity,price: totalPrice}
            setQuantityCart(quantityCart+1);
            newProducts.push(newProduct);
            setProductsInCart(newProducts);
        }
    }

    const handleAddFoods = (product,count) =>{
        let flag = false;
        let totalPrice = count * product.price;
        let productFinal = {...product};
        if(!product.salsa){
            const productUpdated = {...product,salsa:'sin salsa'}
            productFinal = productUpdated;
        }
        let product1 = {idCart:productsInCart.length,...productFinal,price:totalPrice,quantity:count};
        for(const item of productsInCart){
            if(item.name == product1.name){
                let temporaryProduct = {...product1,idCart:item.idCart,price:item.price,quantity:item.quantity};
                if(JSON.stringify(item) == JSON.stringify(temporaryProduct)){
                    item.quantity += count;
                    item.price += totalPrice;
                    flag=true;
                    break;
                }
                if(flag) break;
            }
        }
        if(!flag){
            let newProductsInCart = [...productsInCart];
            newProductsInCart.push(product1);
            setProductsInCart(newProductsInCart);
        }else{
            let newProducts = [...productsInCart];
            setProductsInCart(newProducts);
        }
    }

    const handleRemove = (value) =>{
        let newProducts = productsInCart.filter((product) => product.idCart != value)
        setProductsInCart(newProducts);
    }

    const data  = {
        productsInCart:productsInCart,
        setProductsInCart:setProductsInCart,
        handleAddDrinks:handleAddDrinks,
        handleAddFoods:handleAddFoods,
        handleRemove:handleRemove
    }

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
};

export default CartContextProvider;