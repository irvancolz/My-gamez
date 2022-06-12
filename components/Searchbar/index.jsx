import { useRef } from "react";
import style from "./Searchbar.module.css";
import {FiSearch, FiX} from 'react-icons/fi'


export default function Searchbar(){
    const inputRef = useRef(null);
    
    async function handleSubmit(event){
        event.preventDefault();
        // call api
        inputRef.current.value = ""
    }
    function clearSearch(){
        inputRef.current.value = ""
    }
    return(
        <div className={style.container}>
        <form onSubmit={handleSubmit}>
            <div className={style.formContainer} title="search games">
                <div className={style.formGroup}>
                    <FiSearch />
                </div>
                <div >
                    <input 
                        ref={inputRef}
                        type="text"
                        placeholder="Search games" />
                </div>
                <div className={style.formGroup}>
                <div 
                    title="clear search"
                    onClick={clearSearch}
                    >
                    <FiX />
                </div>
                </div>
            </div>
        </form>
        </div>
    )
}