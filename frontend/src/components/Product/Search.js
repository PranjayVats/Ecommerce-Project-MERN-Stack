import React, { Fragment,useState } from 'react';
import MetaData from '../Layout/MetaData';
import "./Search.css";

function Search({history}) {
    const [keyword, setKeyword]=useState("");
    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        if(keyword.trim()){
            history.push(`/products/${keyword}`);
        }
        else{
            history.push("/products");
        }
    }

    return (
        <Fragment>
            <MetaData title="SEARCH A PRODUCT -- ECOMMERCE"/>
            <form className="searchBox" onSubmit={searchSubmitHandler}>
                <input type="text"
                placeholder="Search a Product ..."
                onChange={(e)=>setKeyword(e.target.value)}
                />
                <input type="submit" value="Search"/>
            </form>
        </Fragment>
    )
}

export default Search
