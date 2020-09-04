/**
 *
 * Alert
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { IconPin } from 'app/components/customIcons';
import colors from 'styles/colors';

interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
  pinned?: boolean;
  onPinClicked?: (pinned) => void;
}

export default function Alert({
  children,
  color,
  icon,
  pinned,
  onPinClicked,
}: Props) {
  return (
    <Div color={color}>
      {icon && (
        <LefSide>
          <IconBox color={color}>{icon}</IconBox>
        </LefSide>
      )}
      <Content>{children}</Content>
      <RightSide>
        <PinButton
          style={{ color: pinned ? colors.primary : '#a3a3a3' }}
          onClick={() => (onPinClicked || Function)(!pinned)}
        >
          <IconPin />
        </PinButton>
      </RightSide>
    </Div>
  );
}

const Div = styled.div`
  border: solid 1px #dadada;
  border-radius: 10px;
  padding: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const LefSide = styled.div`
  display: flex;
  margin-right: 20px;

  .anticon {
    position: relative;
    top: initial;
  }
`;

const IconBox = styled.div`
  background-color: ${props => props.color ?? '#fff'};
  border-radius: 50%;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 22px;
`;

const Content = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
`;

const RightSide = styled.div`
  display: flex;
  margin-left: 20px;

  .anticon {
    position: relative;
    top: initial;
  }
`;

const PinButton = styled.div`
  padding: 0 5px;
  cursor: pointer;
  position: absolute;
  margin-top: -8px;
  right: 20px;
  transition: color 0.25s;

  &:hover {
    color: ${colors.primary};
    transition: color 0.25s;
  }
`;
