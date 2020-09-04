/**
 *
 * Circle
 *
 */
import styled from 'styled-components/macro';
import colors from 'styles/colors';

interface Props {
  size?: number;
  p?: number;
  color?: string;
  bg?: string;
}

export const Circle = styled.div<Props>`
  height: 0;
  width: ${props => props.size ?? '40px'};
  padding-bottom: ${props => props.size ?? '40px'};
  background-color: ${props => props.bg ?? colors.secondary};
  color: ${props => props.color ?? 'white'};
  border-radius: 50%;
`;
