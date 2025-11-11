import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`px-5 py-2 rounded-md font-semibold text-black bg-kirusa-red hover:bg-gradient-to-r hover:from-kirusa-red hover:to-kirusa-redLight transition-all shadow-sm hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
