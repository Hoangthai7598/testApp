import * as React from 'react';
import {SafeAreaView, Text, ScrollView, View} from 'react-native';
import styles from './styles';
import {HomeStackParamList} from '../../stacks/HomeStack/HomeStack.model';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
import {Rating} from 'react-native-ratings';
import moment from 'moment';

type DetailProps = NativeStackScreenProps<HomeStackParamList, 'Detail'>;

function DetailScreen({route}: DetailProps) {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <FastImage
            style={styles.imgHeader}
            source={{
              uri: item.backdrop,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View style={styles.imgContainerRelative}>
          <View style={styles.imgPreviewContainer}>
            <FastImage
              style={styles.imgPreview}
              source={{
                uri: item.poster,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.movieDetailRating}>
              <View style={styles.itemFull}>
                <Text style={styles.movieImageTitle}>
                  {item.title}
                  {' (' + item.imdb_rating + ') '}
                </Text>
              </View>
              <View style={styles.itemFull}>
                <Rating ratingCount={5} imageSize={24} startingValue={4} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.movieDetail}>
          <View style={styles.movieDescription}>
            <Text style={styles.describe}>
              {moment(item.released_on).format('YYYY')} |
            </Text>
            <Text style={styles.describe}> {item.length} |</Text>
            <Text style={styles.describe}> {item.director}</Text>
          </View>
          <View style={styles.movieCast}>
            <Text style={styles.describe}>
              cast:
              {item.cast.map((castItem: string, index: number) => {
                if (index < item.cast.length - 1)
                  return (
                    <Text key={index.toString()} style={styles.describe}>
                      {castItem} ,
                    </Text>
                  );
                return (
                  <Text key={index.toString()} style={styles.describe}>
                    {castItem}
                  </Text>
                );
              })}
            </Text>
          </View>
          <Text style={styles.describe}>{item.overview}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailScreen;
