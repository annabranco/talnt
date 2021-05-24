import { ReactElement, useState, useEffect, ChangeEvent, useRef } from 'react';
import { func, string } from 'prop-types';
import {
  SSearchInput,
  SSearchLabel,
  SSearchWrapper,
  SSearchTitle
} from './styles';
import { MIN_CHARS, SEARCH, SEARCH_HERE } from '../../../constants';

export interface ISearchProps {
  onSearch: (query: string) => void;
  searchString: string;
}

const Search = ({ onSearch, searchString }: ISearchProps): ReactElement => {
  const [showLabel, toggleLabel] = useState('');
  const waitForDebouceTimer = useRef(
    null as null | ReturnType<typeof setTimeout>
  );

  const onFocusInput = () => {
    if (searchString.length < 2) {
      toggleLabel(MIN_CHARS);
    } else {
      toggleLabel(SEARCH_HERE);
    }
  };

  const onBlurInput = () => {
    if (!searchString) {
      toggleLabel('');
    }
  };

  const onChange = (event: ChangeEvent) => {
    if (!waitForDebouceTimer.current) {
      waitForDebouceTimer.current = setTimeout(() => {
        waitForDebouceTimer.current = null;
        onSearch((event.target as HTMLInputElement).value);
      }, 500);
    }
  };

  useEffect(() => {
    if (searchString) {
      if (searchString.length < 2) {
        toggleLabel(MIN_CHARS);
      } else {
        toggleLabel(SEARCH_HERE);
      }
    } else {
      toggleLabel('');
    }
  }, [searchString]);

  return (
    <SSearchWrapper data-test-id="search-wrapper">
      <SSearchTitle data-test-id="search-title">{SEARCH}</SSearchTitle>
      {showLabel && (
        <SSearchLabel
          data-test-id="search-label"
          htmlFor="search"
          text={showLabel}
        >
          {showLabel}
        </SSearchLabel>
      )}
      <SSearchInput
        data-test-id="search-input"
        id="search"
        name="search"
        onBlur={onBlurInput}
        onChange={onChange}
        onFocus={onFocusInput}
        placeholder={SEARCH_HERE}
        type="text"
      />
    </SSearchWrapper>
  );
};

Search.propTypes = {
  onSearch: func.isRequired,
  searchString: string.isRequired
};

export default Search;
