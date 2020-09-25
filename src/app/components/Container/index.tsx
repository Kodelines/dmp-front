/**
 *
 * Container
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

interface ContainerProps {
  justify?: JustifyValues;
  align?: AlignValues;
  direction?: Directions;
  noPadding?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${props => props.justify ?? 'normal'};
  align-items: ${props => props.align ?? 'normal'};
  flex-direction: ${props => props.direction ?? 'column'};
  padding-right: 15px;
  padding-left: 15px;
  padding-top: ${props => (props.noPadding ? '0px' : '40px')};
  padding-bottom: ${props => (props.noPadding ? '0px' : '40px')};
  margin-right: auto;
  margin-left: auto;
  /* margin-top: 20px; */
  width: 100%;

  @media (min-width: 576px) {
    & {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    & {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    & {
      max-width: 720px;
    }
  }

  @media (min-width: 1200px) {
    & {
      max-width: 920px;
    }
  }
`;
