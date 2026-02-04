import React from "react"
const Container = ({ children, className="" }) => {
    return (
        <div className={`w-full max-w-[1440px] mx-auto px-4 sm:px-14 lg:px-[70px] xl:px-[100px] ${className}`}>
            {children}
        </div>
    );
};
export default Container;