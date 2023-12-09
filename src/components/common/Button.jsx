import React from 'react';
import { NavLink } from 'react-router-dom';


const Button = ({ label, onClick, to, className }) => {

  //if to prop present use Navlink else use regular button
  if(to){
    return (
      <NavLink to={to} className={className} activeClassName='active' onClick={onClick}>
        {label}

      </NavLink>
    );
  }
  return (
    <button 
      className={`py-2 px-4 rounded-3xl ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
