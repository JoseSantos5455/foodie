import React from 'react';


interface Props {
  theme: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<Props> = ({ theme, className = '', children, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${theme} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
