import styled from 'styled-components';

interface SArticleWrapperProps
  extends React.ComponentPropsWithoutRef<'article'> {
  color: string;
}

export const SArticleWrapper = styled.article<SArticleWrapperProps>`
  background: ${({ color }) => color || 'none'};
  border: 1px solid gray;
  border-radius: 10px;
  margin: 2px 0;
  padding: 0 50px;
  font-size: 1 rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;
SArticleWrapper.displayName = 'SArticleWrapper';

export const SArticleTitle = styled.h2`
  margin-right: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;
SArticleTitle.displayName = 'SArticleTitle';

export const SArticleText = styled.p`
  color: black;
`;
SArticleText.displayName = 'SArticleText';

export const SReadMoreButton = styled.button`
  font-size: 0.7rem;
  color: black;
  margin-right: -40px;
  border-radius: 5px;
  line-height: 0.8;
  padding: 2px;
`;
SReadMoreButton.displayName = 'SReadMoreButton';
