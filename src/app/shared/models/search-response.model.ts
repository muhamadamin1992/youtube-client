import { ICard } from './card.model';

export interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo: { totalResults: number, resultsPerPage: number };
  items: ICard[];
}
