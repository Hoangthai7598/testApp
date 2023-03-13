import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  IMovieItem,
  IMovieListResponse,
} from '../../service/Network/model/Movie.Model';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {ResponseType} from '../../service/Network/model/ApiResponse';
import {
  requestGetListMovies,
  requestSearchListMovies,
} from '../../service/API/movieAPI';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SearchStackParamList} from '../../stacks/SearchStack/SearchStack.model';

type SearchProps = NativeStackScreenProps<SearchStackParamList, 'Search'>;

function SearchScreen({navigation}: SearchProps) {
  const [input, setInput] = useState('');
  const [isSearch, setSearch] = useState(false);
  const [listMovie, setListMovie] = useState<Array<IMovieItem>>([]);
  const [searchTimer, setSearchTimer] = useState<any>(null);

  const onChangeText = (text: string) => {
    if (searchTimer) {
      clearTimeout(searchTimer);
    }
    setInput(text);
    setSearchTimer(
      setTimeout(() => {
        searchListMovie(text);
      }, 1000),
    );
  };

  const searchListMovie = async (searchKeyword: string) => {
    setSearch(true);
    try {
      const movieResponse: ResponseType<IMovieListResponse> =
        await requestSearchListMovies(searchKeyword);
      setListMovie(movieResponse.data.movies);
      setSearch(false);
    } catch (error) {
      console.log('Eror search movie', error);
      setSearch(false);
    }
  };

  const goToDetail = (item: IMovieItem) => {
    navigation.navigate('Detail', {item});
  };

  const renderItem = useCallback(({item}: {item: IMovieItem}) => {
    return (
      <TouchableOpacity
        style={styles.movieContainer}
        onPress={() => goToDetail(item)}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <View style={styles.imgRow}>
          <FastImage
            style={styles.movieImg}
            source={{
              uri: item.poster,
            }}
            resizeMode={FastImage.resizeMode.stretch}
          />
          <FastImage
            style={styles.movieImg}
            source={{
              uri: item.backdrop,
            }}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={input}
      />
      {isSearch ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <FlatList
          data={listMovie}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
}

export default SearchScreen;
