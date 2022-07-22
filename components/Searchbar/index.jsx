import { useRef } from "react";
import style from "./Searchbar.module.css";
import {FiSearch, FiX} from 'react-icons/fi'


export default function Searchbar(){
    const inputRef = useRef();
    
    async function handleSubmit(event){
        event.preventDefault();
        console.log(inputRef.current.value)
        // call api
        inputRef.current.value = ""
    }
    function clearSearch(){
        inputRef.current.value = ""
    }
    return(
        <form onSubmit={handleSubmit} className={style.container}>
            <div className={`${style.formGroup} ${style.header}`}
            onClick={()=> handleSubmit()}>
                <FiSearch />
            </div>
            <div className={`${style.formGroup} ${style.body}`}>
                <input 
                placeholder="search"
                type='text' 
                ref={inputRef}/>
            </div>
            <div className={`${style.formGroup} ${style.clear}`}
            onClick={()=> clearSearch()}>
                <FiX />
            </div>
        </form>
    )
}