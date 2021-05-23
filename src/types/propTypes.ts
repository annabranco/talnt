import { arrayOf, number, oneOfType, shape, string } from 'prop-types';

export const PGenericData = shape({
  reference: string.isRequired,
  name: string.isRequired,
  meta: shape({
    page: number.isRequired,
    rows_per_page: number.isRequired,
    total: number.isRequired,
    total_pages: number.isRequired
  })
});

export const PRegions = shape({
  acronym: string.isRequired,
  description: string.isRequired
});

export const PAppState = shape({
  companies: arrayOf(PGenericData).isRequired,
  moves: arrayOf(PGenericData).isRequired,
  regions: arrayOf(PRegions).isRequired,
  tags: arrayOf(PGenericData).isRequired,
  taxonomies: arrayOf(PGenericData).isRequired
});

export const PApiData = oneOfType([arrayOf(PGenericData), arrayOf(PRegions)]);

export const PApiResponse = shape({
  status: shape({
    code: number.isRequired
  }),
  success: PApiData
});
