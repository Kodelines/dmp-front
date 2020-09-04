/**
 *
 * Box
 *
 */
import styled from 'styled-components/macro';

type JustifyValues =
  | 'normal'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit';

type AlignValues =
  | 'normal'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit';

type Directions = 'column' | 'row';

interface Props {
  fill?: boolean;
  justify?: JustifyValues;
  align?: AlignValues;
  direction?: Directions;
  height?: string;
  width?: string;
  p?: string;
  m?: string;
  radius?: string;
  bg?: string;
  color?: string;
  borderColor?: string;
  borderWidth?: number;
}

export const Box = styled.div<Props>`
  display: flex;
  flex: ${props => (props.fill ? '1 1 auto!important' : 'initial')};
  justify-content: ${props => props.justify ?? 'normal'};
  align-items: ${props => props.align ?? 'normal'};
  flex-direction: ${props => props.direction ?? 'column'};
  height: ${props => props.height ?? 'initial'};
  width: ${props => props.width ?? 'initial'};
  padding: ${props => props.p ?? 'initial'};
  margin: ${props => props.m ?? 'initial'};
  background: ${props => props.bg ?? 'none'};
  color: ${props => props.color ?? 'initial'};
  border-color: ${props => props.borderColor ?? '#eee'};
  border-width: ${props => props.borderWidth + 'px' ?? 'initial'};
  border-radius: ${props => props.radius ?? '10px'};
  border-style: solid;

  .anticon {
    position: relative;
    top: initial;
  }
`;
