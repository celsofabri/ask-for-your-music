import React, { forwardRef } from 'react';
import { StyledInput } from '../styled';

const Button = forwardRef(({ children, ...props }, ref) => {
    return (
      <StyledInput ref={ref} {...props}>
        {children}
      </StyledInput>
    );
  }
);

export default Button;