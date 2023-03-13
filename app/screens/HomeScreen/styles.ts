import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  movieContainer: {
    padding: 10,
    marginBottom: 20,
  },
  movieTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  imgRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieImg: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
});
export default styles;
