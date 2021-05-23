import axios from 'axios';
import { IApiData, IApiResponse, IAppState } from '../types/interfaces';
import {
  REGIONS_ENDPOINT,
  COMPANIES_ENDPOINT,
  TAGS_ENDPOINT,
  MOVES_ENDPOINT,
  TAXONOMIES_ENDPOINT
} from './endpoints';

const dbPaths = [COMPANIES_ENDPOINT, MOVES_ENDPOINT, REGIONS_ENDPOINT];

export const fetchData = (URL: string): Promise<IApiData> =>
  axios
    .get(URL)
    .then(({ data }: { data: IApiResponse }) => {
      if (data.status?.code === 200) {
        return data.success;
      }
      throw new Error('Received unknown status when fetching data');
    })
    .catch(error =>
      console.error(`Failed to get data from ${URL}. ${error}.`)
    ) as Promise<IApiData>;

export const getAllDataFromServer = (): Promise<IAppState> =>
  axios
    .all(dbPaths.map(path => fetchData(path)))
    .then(
      axios.spread((companies, moves, regions, tags, taxonomies) => ({
        companies,
        moves,
        regions
      }))
    )
    .catch(error =>
      console.error(`Failed to get database. ${error}.`)
    ) as Promise<IAppState>;

export const searchData = (query: string): Promise<IApiData> =>
  fetchData(`${TAGS_ENDPOINT}${query}`);
