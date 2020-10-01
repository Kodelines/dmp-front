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
      {children}
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
  line-height: 1.4 !important;

  .anticon {
    position: relative;
    top: initial;
    font-size: 44px;
    margin: 32px 0;
  }
`;
