import styled from 'styled-components';

interface StyledWrapperElementProps
  extends React.ComponentPropsWithoutRef<'div'> {
  color: string;
}

export const StyledWrapperElement = styled.div<StyledWrapperElementProps>`
  background: ${({ color }) => color || 'none'};
  border: 1px solid black;
  font-size: 1 rem;
`;
StyledWrapperElement.displayName = 'StyledWrapperElement';

export const SAppContainer = styled(StyledWrapperElement)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
SAppContainer.displayName = 'SAppContainer';

export const SMainArea = styled(StyledWrapperElement)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
SMainArea.displayName = 'SMainArea';
