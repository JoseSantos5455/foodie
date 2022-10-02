import React from 'react';

interface Props {
  theme: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ theme, className = '', children, onClick, type, disabled = false }) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick} className={`btn ${theme} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
