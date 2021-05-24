import { ReactElement } from 'react';
import { arrayOf, string } from 'prop-types';
import Article from '../../elements/Article';
import { SWrapperElement } from './styles';
import { IGenericData } from '../../../types/interfaces';
import { PGenericData } from '../../../types/propTypes';
import {
  NOT_FOUND_TEXT,
  NOT_FOUND_TITLE,
  THANKS,
  WELCOME
} from '../../../constants';

export interface IMainProps {
  searchResults: IGenericData[];
  searchString: string;
}

export const defaultArticle = {
  reference: WELCOME,
  name: THANKS
};

export const articleNotFound = {
  reference: NOT_FOUND_TITLE,
  name: NOT_FOUND_TEXT
};

const Main = ({ searchResults, searchString }: IMainProps): ReactElement => {
  return (
    <SWrapperElement color="orange">
      {searchResults.length === 0 ? (
        <Article data={searchString ? articleNotFound : defaultArticle} />
      ) : (
        <>
          {searchResults.map(item => (
            <Article data={item} key={JSON.stringify(item)} />
          ))}
        </>
      )}
    </SWrapperElement>
  );
};

Main.propTypes = {
  searchResults: arrayOf(PGenericData).isRequired,
  searchString: string.isRequired
};

export default Main;
