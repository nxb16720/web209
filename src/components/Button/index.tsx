import React from "react";
type Props = {
    type?: "primary" | "danger";
    icon?: React.ReactNode;
    primary?: boolean;
    danger?: boolean;
    children?: React.ReactNode
    onClick?: () => void

}

const Button = ({ type, icon, primary, children, danger, onClick }: Props) => {
    return (
        <button onClick={onClick}
            className={`p-2 border border-gray-400 rounded
    ${type == "primary" && "bg-blue-500 text-white"}
    ${type == "danger" && "bg-red-500 text-white"}
`}
        >
            {icon && icon}
            {children}
        </button>)
};

export default Button