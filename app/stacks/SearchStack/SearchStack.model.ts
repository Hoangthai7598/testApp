import {IMovieItem} from '../../service/Network/model/Movie.Model';

export type SearchStackParamList = {
  Search: undefined;
  Detail: {item: IMovieItem};
};
