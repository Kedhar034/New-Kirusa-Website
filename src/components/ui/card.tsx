import React from "react";

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div
      className={`p-4 rounded-2xl shadow-md bg-white/90 backdrop-blur-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = "",
  children,
}) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = "",
  children,
}) => {
  return <h2 className={`text-xl font-bold text-gray-800 ${className}`}>{children}</h2>;
};

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = "",
  children,
}) => {
  return <div className={`${className}`}>{children}</div>;
};
