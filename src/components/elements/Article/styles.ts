import styled from 'styled-components';

interface SArticleWrapperProps
  extends React.ComponentPropsWithoutRef<'article'> {
  color: string;
}

export const SArticleWrapper = styled.article<SArticleWrapperProps>`
  background: ${({ color }) => color || 'none'};
  border: 1px solid black;
  font-size: 1 rem;
  color: red;
`;
SArticleWrapper.displayName = 'SArticleWrapper';

export const SArticleTitle = styled.h2`
  font-size: 1 rem;
  color: black;
`;
SArticleTitle.displayName = 'SArticleTitle';

export const SArticleText = styled.p`
  font-size: 1 rem;
  color: black;
`;
SArticleText.displayName = 'SArticleText';

export const SReadMoreButton = styled.button`
  font-size: 1 rem;
  color: black;
`;
SReadMoreButton.displayName = 'SReadMoreButton';
