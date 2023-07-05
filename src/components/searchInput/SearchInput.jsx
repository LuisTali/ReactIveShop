import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig.js";
import {doc,collection,documentId,getDocs,where, query} from "firebase/firestore";
import { Search } from "@mui/icons-material";
import './SearchInput.css';
import Swal from "sweetalert2";

const SearchInput = ({theme}) =>{
    const [idSearch,setIdSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) =>{
        e.preventDefault();
        if(!idSearch){
            Swal.fire('Ingrese un id de orden valido');
            return;
        } 
        let collectionDocs = collection(db,"orders");
        const queryOrder = query(collectionDocs,where("orderId","==",idSearch));
        getDocs(queryOrder)
        .then((res)=>{
            if(res.docs[0]){
                navigate(`/searchOrder/${idSearch}`);
                setIdSearch('');
            }else{
                Swal.fire('No hay ordenes con ese Id')
            }
        })
        .catch((err)=>console.log(err));
    }

    return <form className={theme ? "formOrdersSearch light" : "formOrdersSearch dark"} onSubmit={(e)=>handleSearch(e)}>
        <div className="inputGroupSearch">
            <input className="inputOrdersSearch" type="text" placeholder="Buscar por Id de Orden" value={idSearch} onChange={(e)=>setIdSearch(e.target.value)}/>
            <Search className="icon" onClick={(e)=>handleSearch(e)}/>
        </div>
    </form>
}

export default SearchInput;