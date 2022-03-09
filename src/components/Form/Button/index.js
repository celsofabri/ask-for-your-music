import React, { forwardRef } from 'react';

const Button = forwardRef(({ children, ...props }) => {
    return (
      <button {...props}>
        {children}
      </button>
    );
  }
);

export default Button;