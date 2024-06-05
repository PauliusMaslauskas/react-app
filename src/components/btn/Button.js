import React from 'react';
import classNames from 'classnames';

const Button = ({ children, onClick, className, type = 'button', variant = 'default', size = 'md', id }) => {
  const baseStyles = 'text-sky-400/95 font-bold py-2 px-4 rounded';

  const variantStyles = {
    default: 'bg-transparent text-blue-500 hover:text-sky-500',
    primary: 'text-sky-700 hover:text-sky-500',
    secondary: 'text-gray-700',
    black: 'text-slate-800 hover:text-sky-700'
  };

  const sizeStyles = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  const buttonClassNames = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button
      type={type}
      id={id}
      className={buttonClassNames}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
