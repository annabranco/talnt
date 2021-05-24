import styled from 'styled-components';

interface SSearchWrapperProps extends React.ComponentPropsWithoutRef<'aside'> {
  color: string;
}

export const SSearchWrapper = styled.aside<SSearchWrapperProps>`
  background: ${({ color }) => color || 'none'};
  border: 1px solid black;
  font-size: 1 rem;
  color: red;
`;
SSearchWrapper.displayName = 'SSearchWrapper';

export const SSearchInput = styled.input`
  font-size: 1 rem;
  color: black;
`;
SSearchInput.displayName = 'SSearchInput';

export const SSearchLabel = styled.label`
  font-size: 1 rem;
  color: black;
`;
SSearchLabel.displayName = 'SSearchLabel';

export const SSearchTitle = styled.h3`
  font-size: 1 rem;
  color: black;
`;
SSearchTitle.displayName = 'SSearchTitle';
