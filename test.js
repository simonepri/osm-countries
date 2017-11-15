import test from 'ava';
import m from '.';

test('should return the id for a valid country code', t => {
  t.is(typeof m.get('ITA'), 'string');
  t.true(m.get('ITA').length > 0);
});

test('should return the map of all ids', t => {
  t.is(typeof m.map(), 'object');
});

test('should return an error for an invalid country code', t => {
  let error;

  error = t.throws(() => {
    m.get('XXX');
  }, TypeError);
  t.is(error.message, 'The alpha-3 code provided was not found: XXX');

  error = t.throws(() => {
    m.get();
  }, TypeError);
  t.is(error.message, 'The alpha-3 code provided was not found: undefined');

  error = t.throws(() => {
    m.get(null);
  }, TypeError);
  t.is(error.message, 'The alpha-3 code provided was not found: null');
});
