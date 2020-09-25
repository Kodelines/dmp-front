import { Button } from 'antd';
/**
 *
 * ListActionButton
 *
 */
import React, { memo, ReactElement } from 'react';
import styled from 'styled-components/macro';

interface Props {
  icon: ReactElement;
  text?: string;
  danger?: boolean;
  href?: string;
}

export const ListActionButton = memo(
  ({ icon, text, danger = false, href }: Props) => {
    return (
      <StyledButton
        type="link"
        icon={<StyledIcon>{icon}</StyledIcon>}
        size="small"
        danger={danger}
        href={href}
      >
        {text && text}
      </StyledButton>
    );
  },
);

const StyledButton = styled(Button)`
  padding: 0;
`;

const StyledIcon = styled.span`
  .anticon {
    font-size: 20px;
  }
  margin-right: 10px;
`;
