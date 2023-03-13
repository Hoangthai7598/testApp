const {default: Movies} = require('../app/utils/apiTest');

it('Api test case', async function () {
  const response = await Movies.all();
  expect(response.json().data.movies.length).toEqual(20);
});
