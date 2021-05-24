import styled from 'styled-components';

interface SWrapperElementProps
  extends React.ComponentPropsWithoutRef<'div'> {
  color: string;
}

export const SWrapperElement = styled.div<SWrapperElementProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ color }) => color || 'none'};
  border: 1px solid black;
  font-size: 1 rem;
  color: red;
`;
SWrapperElement.displayName = 'SWrapperElement';

export const SLogo = styled.p`
  font-size: 4 rem;
  color: black;
`;
SLogo.displayName = 'SLogo';
