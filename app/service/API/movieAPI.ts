import {ApiClient} from '../Network/ApiService';

export const requestGetListMovies = () => ApiClient.get('/movies', {});

export const requestSearchListMovies = (search: string) =>
  ApiClient.get('/movies?q=' + search, {});
