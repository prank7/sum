const sum = require('./sum');
const axios = require('axios');

var testsReport = [];

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  console.log('report', expect(sum(1, 2)).toBe(3));
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  console.log("report 2", expect(sum(1, 2)).toBe(3));
});

afterAll(async () => {
  var res = await axios.get('http://localhost:3000/api/v1/test?test=passed');
  console.log(res.data, 'res');
});