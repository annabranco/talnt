import { ReactElement, useEffect, useState } from 'react';
import {
  SArticleTitle,
  SArticleText,
  SArticleWrapper,
  SReadMoreButton
} from './styles';
import { IGenericData } from '../../../types/interfaces';
import { PGenericData } from '../../../types/propTypes';
import { READ_MORE } from '../../../constants';

export interface IArticleProps {
  data: IGenericData;
}

const Article = ({ data }: IArticleProps): ReactElement => {
  const [isCuttingText, toggleIsCuttingText] = useState(false);

  const formatLargeText = (text: string): string =>
    isCuttingText ? `${text.slice(0, 97)}...` : text;

  useEffect(() => {
    toggleIsCuttingText(data.name.length > 100);
  }, [data]);

  return (
    <SArticleWrapper color="pink">
      <SArticleTitle>{data.reference}</SArticleTitle>
      <SArticleText>{formatLargeText(data.name)}</SArticleText>
      {data.name.length > 100 && isCuttingText && (
        <SReadMoreButton onClick={() => toggleIsCuttingText(false)}>
          {READ_MORE}
        </SReadMoreButton>
      )}
    </SArticleWrapper>
  );
};

Article.propTypes = {
  data: PGenericData.isRequired
};

export default Article;
