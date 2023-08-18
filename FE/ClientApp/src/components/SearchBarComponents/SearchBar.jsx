import React,{useState} from "react";
import { json } from "react-router-dom";

function SearchBar({setResults}) {
const [input,setInput]=useState("")
const fetchData = (value) => {
    fetch("http://localhost:8282/products")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((product) => {
          return (
            value &&
            product &&
            product.proname &&
            product.proname.toLowerCase().includes(value)
           
          );
        });
        
       console.log(results)
       setResults(results);
      });
  };
  
const handleChange=(value)=>{
    setInput(value)
    fetchData(value)
}
    return (
        <div style={{ width: '350px', borderRadius: '0', border: '1px solid #ced4da', boxShadow: 'none', outline: 'none', marginLeft: '150px' }}>
            <form className="d-flex">
                <input className="form-control me-2 search-bar" type="search" placeholder="Search..." aria-label="Search"
                 style={{ width: '350px', borderRadius: '0', boxShadow: 'none', outline: 'none', border: 'none' }} 
                 value={input} onChange={(e)=>handleChange(e.target.value)}
                 
                 />
                <button className="btn" type="submit" style={{ boxShadow: 'none', outline: 'none', border: 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="currentColor" color='royalblue' className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>

            </form>
        </div>
    );
}
export default SearchBar;