import HomePage from "../components/pages/home/HomePage.jsx";
import ItemListContainer from "../components/layouts/itemListContainer/ItemListContainer.jsx";
import FoodEdit from "../components/pages/foodEdit/FoodEdit.jsx";
import EndBuy from "../components/pages/endBuy/EndBuy.jsx";
import OrderSearch from "../components/pages/orderSearch/OrderSearch.jsx";

export const menuRoutes = [
    {
        id:'home',
        path:'/',
        Element: HomePage,
    },
    {
        id: 'categoria',
        path:'/categorias/:categoria',
        Element: ItemListContainer,
    },
    {
        id:'productId',
        path:'/comidas/:id',
        Element: FoodEdit,
    },
    {
        id:'endBuy',
        path:'/endBuy',
        Element: EndBuy,
    },
    {
        id:'orderById',
        path:'/searchOrder/:id',
        Element: OrderSearch
    }
]