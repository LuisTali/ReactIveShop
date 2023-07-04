import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [productsInCart,setProductsInCart] = useState([]);
    const [lastId, setLastId] = useState(0);
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
                        setQuantityCart(quantityCart + item.quantity);
                    } 
                })
                //Entonces sumo 1 a cantidad de ese producto y actualizo el carrito
                let newProducts = [...productsInCart];
                setProductsInCart(newProducts)
            }else{
                let newProduct = {idCart:lastId,...item,price:totalPrice};
                console.log(newProduct);
                setQuantityCart(quantityCart + newProduct.quantity);
                let newProducts = [...productsInCart];
                newProducts.push(newProduct);
                setProductsInCart(newProducts);
                setLastId(lastId + 1);
            } 
        }else{ //Si el carro esta vacio creo un item nuevo y lo pusheo al arreglo sin mas
            let newProducts = [];
            let newProduct = {idCart:lastId,...item,quantity:item.quantity,price: totalPrice}
            newProducts.push(newProduct);
            setProductsInCart(newProducts);
            setQuantityCart(newProduct.quantity);
            setLastId(lastId + 1);
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
        let product1 = {
            idCart:lastId,
            id:productFinal.id,
            name:productFinal.name,
            imgsrc:productFinal.imgsrc,
            price:totalPrice,
            quantity:count,
            extras:productFinal.extras,
            salsa: productFinal.salsa,
            stock:productFinal.stock
        };
        for(const item of productsInCart){
            if(item.name == product1.name){
                let temporaryProduct = {
                    idCart:item.idCart,
                    id:product1.id,
                    name:product1.name,
                    imgsrc:product1.imgsrc,
                    price:item.price,
                    quantity:item.quantity,
                    extras:product1.extras,
                    salsa: product1.salsa,
                    stock: product1.stock
                };
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
            setLastId(lastId + 1);
        }else{
            let newProducts = [...productsInCart];
            setProductsInCart(newProducts);
        }
        setQuantityCart(quantityCart + count);
    }

    const handleRemove = (value) =>{
        let newProducts = productsInCart.filter((product) => product.idCart != value);
        setProductsInCart(newProducts);
        quantityProducts(newProducts);
    }

    const quantityProducts = (array) =>{
        let quantity = 0;
        for(const product of array){
            quantity += product.quantity;
        }
        setQuantityCart(quantity);
    }

    const totalPrice = () =>{
        let total = 0;
        for (const product of productsInCart){
            total = total + product.price;
        }
        return total;
    }

    const emptyCart = () =>{
        setProductsInCart([]);
        setQuantityCart(0);
        setLastId(0);
    }

    const data  = {
        productsInCart:productsInCart,
        setProductsInCart:setProductsInCart,
        handleAddDrinks:handleAddDrinks,
        handleAddFoods:handleAddFoods,
        handleRemove:handleRemove,
        quantityCart:quantityCart,
        totalPrice:totalPrice,
        emptyCart:emptyCart
    }

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
};

export default CartContextProvider;