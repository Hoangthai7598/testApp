class Movies {
  static all() {
    return fetch('https://wookie.codesubmit.io/movies', {
      headers: {Authentication: 'Bearer Wookie2019'},
    }).then(response => response.json());
  }
}
export default Movies;
