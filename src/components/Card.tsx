import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
}

export function Card({ children, className = '', onClick, hoverable = false }: CardProps) {
    return (
        <div
            className={`card ${hoverable ? 'hover:-translate-y-1 cursor-pointer' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
