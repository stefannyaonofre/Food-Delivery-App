import React from "react";
import search from '/Search.svg'
import './search.scss';
const Search = () => {
  return (
    <>
      <div className="input-group mb-3 input">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-warning"
            type="button"
            id="button-addon1"
          >
            <img src={search} alt="" />
          </button>
        </div>
        <input
          type="text"
          className="form-control custom-input"
          placeholder="Buscar platos"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />    
      </div>
    </>
  );
};

export default Search;
