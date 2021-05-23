export interface IGenericData {
  reference: string;
  name: string;
  meta: {
    page: number;
    rows_per_page: number;
    total: number;
    total_pages: number;
  }
}

export interface IRegions {
  acronym: string;
  description: string;
}

export interface IAppState {
  companies: IGenericData[] | never[];
  moves: IGenericData[] | never[];
  regions: IRegions[] | never[];
  tags: IGenericData[] | never[];
  taxonomies: IGenericData[] | never[];
}

export type IApiData = IGenericData[] | IRegions[];

export interface IApiResponse {
  status: {
    code: number;
  };
  success?: IApiData;
}
