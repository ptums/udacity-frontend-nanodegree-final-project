import 'core-js/stable';
import 'regenerator-runtime/runtime';
import getLocation from '../client/js/getLocation';

describe('getLocation function', () => {
  test('it should return an object', () => {
    const response = getLocation();
    expect(typeof response).toBe('object');
  });
});
