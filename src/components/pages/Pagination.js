import React from "react";
import Cards from "../cards/Cards";
import {AiOutlineCaretLeft, AiFillCaretRight} from 'react-icons/ai'

import "./pagination.css";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <React.Fragment>
      <div className="pagination">

      
      <div className="button-left">
      <button  onClick={onLeftClick}>
      <AiOutlineCaretLeft />
    </button>
      </div>
        
        <div className="page-text">{page} de {totalPages}</div>


        
          <div className="button-right">
          <button onClick={onRightClick}>
          <AiFillCaretRight />
          </button>
          </div>
        
      </div>
    </React.Fragment>
  );
};

export { Pagination };
