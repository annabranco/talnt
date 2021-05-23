import { ReactElement } from 'react';
import { arrayOf } from 'prop-types';
import Article from '../../elements/Article';
import { StyledWrapperElement } from './styles';
import { IGenericData } from '../../../types/interfaces';
import { PGenericData } from '../../../types/propTypes';
import { THANKS, WELCOME } from '../../../constants';

export interface IMainProps {
  searchResults: IGenericData[];
}

export const defaultArticle = {
  reference: WELCOME,
  name: THANKS
};

const Main = ({ searchResults }: IMainProps): ReactElement => {
  return (
    <StyledWrapperElement color="orange">
      {searchResults.length === 0 ? (
        <Article data={defaultArticle} />
      ) : (
        <>
          {searchResults.map(item => (
            <Article data={defaultArticle} key={JSON.stringify(item)} />
          ))}
        </>
      )}
    </StyledWrapperElement>
  );
};

Main.propTypes = {
  searchResults: arrayOf(PGenericData).isRequired
};

export default Main;
