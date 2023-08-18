import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultsList = ({results}) => {
  

  return (
    <div>{
     results.map((result,id)=>{
        
        return  <Link to={`/products/${result.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
        <div key={id}>{result.proname}</div></Link>
     })
    }
    </div>
  );
};

export default SearchResultsList;
