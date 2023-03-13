import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  movieTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  imgHeader: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width * 0.5,
  },
  imgContainerRelative: {
    height: Dimensions.get('screen').width * 0.15,
    zIndex: 1024,
  },
  imgPreviewContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    zIndex: 1024,
    paddingHorizontal: 20,
    left: 0,
  },
  itemFull: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imgPreview: {
    width: Dimensions.get('screen').width * 0.2,
    height: Dimensions.get('screen').width * 0.3,
  },
  describe: {
    fontSize: 14,
    color: '#000',
  },
  movieDetailRating: {
    marginLeft: 10,
  },
  movieImageTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  movieDetail: {
    padding: 20,
  },
  movieDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieCast: {
    marginVertical: 10,
  },
});
export default styles;
