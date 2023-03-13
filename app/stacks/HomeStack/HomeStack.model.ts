import {IMovieItem} from '../../service/Network/model/Movie.Model';

export type HomeStackParamList = {
  Home: undefined;
  Detail: {item: IMovieItem};
};
