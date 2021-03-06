import React, { forwardRef } from 'react';
import { StyledButton } from '../styled';

const Button = forwardRef(({ children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);

export default Button;