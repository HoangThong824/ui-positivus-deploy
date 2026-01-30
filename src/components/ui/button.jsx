import React from "react";
const Button =({ children, onClick, className="" }) => {
    return (
        <button className={`bg-black text-white rounded-[14px] hover:opacity-80 transition ${className}`}>
      {children}
    </button>
    );
}
export default Button;
