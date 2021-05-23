import styled from 'styled-components';

interface StyledWrapperElementProps
  extends React.ComponentPropsWithoutRef<'div'> {
  color: string;
}

export const StyledWrapperElement = styled.div<StyledWrapperElementProps>`
  background: ${({ color }) => color || 'none'};
  border: 1px solid black;
  font-size: 1 rem;
  color: red;
`;
StyledWrapperElement.displayName = 'StyledWrapperElement';
