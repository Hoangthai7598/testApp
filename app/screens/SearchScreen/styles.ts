import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
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
