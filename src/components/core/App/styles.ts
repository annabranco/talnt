import styled from 'styled-components';

interface SWrapperElementProps
  extends React.ComponentPropsWithoutRef<'div'> {
  color: string;
}

export const SWrapperElement = styled.div<SWrapperElementProps>`
  background: ${({ color }) => color || 'none'};
  border: 1px solid black;
  font-size: 1 rem;
`;
SWrapperElement.displayName = 'SWrapperElement';

export const SAppContainer = styled(SWrapperElement)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
SAppContainer.displayName = 'SAppContainer';

export const SMainArea = styled(SWrapperElement)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
SMainArea.displayName = 'SMainArea';
