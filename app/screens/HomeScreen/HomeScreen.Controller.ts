import React, {useState, useEffect} from 'react';
import {requestGetListMovies} from '../../service/API/movieAPI';
import {ResponseType} from '../../service/Network/model/ApiResponse';
import {
  IMovieItem,
  IMovieListResponse,
} from '../../service/Network/model/Movie.Model';

export const useListMovie = () => {
  const [isLoading, setLoading] = useState(true);
  const [listMovie, setListMovie] = useState<Array<IMovieItem>>([]);

  const getListMovie = async () => {
    setLoading(true);
    try {
      const movieResponse: ResponseType<IMovieListResponse> =
        await requestGetListMovies();
      setListMovie(movieResponse.data.movies);
      setLoading(false);
    } catch (error) {
      console.log('Eror get list movie', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getListMovie();
  }, []);

  return {
    isLoading,
    listMovie,
  };
};
