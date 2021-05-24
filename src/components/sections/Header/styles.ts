import styled from 'styled-components';

interface SWrapperElementProps
  extends React.ComponentPropsWithoutRef<'header'> {
  color?: string;
}

export const SWrapperElement = styled.header<SWrapperElementProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: ${({ color }) => color || 'none'};
  transform: translate(0, -10%);
  font-size: 1 rem;
  color: red;
  width: 90%;
`;
SWrapperElement.displayName = 'SWrapperElement';

export const SLogo = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  -webkit-text-stroke: 2px blue;
  letter-spacing: -5px;
`;
SLogo.displayName = 'SLogo';
