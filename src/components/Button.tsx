import React from "react";

interface ButtonProps {
    onClick: (event:React.MouseEvent<HTMLButtonElement>,id:number) => void;
    
}
export const Button = ({ onClick }: ButtonProps) => {
    return (
        <button onClick={(e)=>{onClick(e,1)}}>Click</button>
    );
};    
    
