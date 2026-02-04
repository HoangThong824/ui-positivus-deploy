import React from "react";
const Button =({ children, onClick, className="" }) => {
    return (
        <button className={`inline-flex items-center justify-center
                           bg-black text-white
                            rounded-[14px]
                            px-6 py-3
                            text-sm sm:text-base
                            hover:opacity-80
                            transition
                            disabled:opacity-50 disabled:cursor-not-allowed
                            ${className}`
                          }>
      {children}
        </button>
    );
}
export default Button;
