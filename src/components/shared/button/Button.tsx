import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
onClick?: () => void;
children: React.ReactNode;
className?: string;
disabled?: boolean;
type?: ButtonType; // Button type
}

const Button: React.FC<ButtonProps> = ({
onClick,
children,
className = '',
disabled = false,
type = 'button', // Default type is 'button'
}) => {
return (
<button
type={type}
onClick={onClick}
className={`button ${className}`}
disabled={disabled}
>
{children}
</button>
);
};

export default Button