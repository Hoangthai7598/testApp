import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import {
  ActivityIndicator, FlatList, SafeAreaView,
  Text, TouchableOpacity, View
} from 'react-native';
import FastImage from 'react-native-fast-image';
import AppHeader from '../../components/Header';
import {
  IMovieItem
} from '../../service/Network/model/Movie.Model';
import { HomeStackParamList } from '../../stacks/HomeStack/HomeStack.model';
import { useListMovie } from './HomeScreen.Controller';
import styles from './styles';

type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

function HomeScreen({navigation}: HomeProps) {
  const {isLoading, listMovie} = useListMovie();

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

  if (isLoading)
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator color="blue" size="large" />
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listMovie}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={<AppHeader title={'WOOKIE MOVIES'} />}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
