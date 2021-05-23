import styled from 'styled-components';

interface StyledWrapperElementProps
  extends React.ComponentPropsWithoutRef<'div'> {
  color: string;
}

export const StyledWrapperElement = styled.div<StyledWrapperElementProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ color }) => color || 'none'};
  border: 1px solid black;
  font-size: 1 rem;
  color: red;
`;
StyledWrapperElement.displayName = 'StyledWrapperElement';

export const StyledLogo = styled.p`
  font-size: 4 rem;
  color: black;
`;
StyledLogo.displayName = 'StyledLogo';
