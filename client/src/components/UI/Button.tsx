import React from 'react';
import 'styles/UI/btns.css';

interface Props {
  theme: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ theme, className = '', children, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${theme} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
