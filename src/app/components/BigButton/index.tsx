import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
/**
 *
 * BigButton
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props extends ButtonProps {
  children: React.ReactNode;
  p?: string;
}

export function BigButton({ children, icon, ...props }: Props) {
  return (
    <StyledButton block {...props}>
      {icon}
      <span className="label"> {children} </span>
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  height: auto;
  padding: 20px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: normal;

  .anticon {
    position: relative;
    top: initial;
    font-size: 44px;
    margin: 32px 0;
  }

  .label {
    line-height: 1.4 !important;
  }
`;
