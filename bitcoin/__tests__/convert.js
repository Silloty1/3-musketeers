'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning a Number', () => {
  //convert(2, 'BTC', 'BTC');
  expect(typeof convert(2, 'BTC', 'BTC')).toBe("number");
  //throw new Error('test not yet defined... write your test here');
});

test('should return a Number', () => {
  //convert(2, 'BTC', 'BTC', 'Number');
  expect(typeof convert(2, 'BTC', 'BTC')).toBe("number");
  //throw new Error('test not yet defined... write your test here');
});

test('should return a Big number', () => {
  //convert(2, 'BTC', 'BTC', 'Big');
  expect(typeof convert(2, 'BTC', 'BTC', 'Big')).toBe(typeof new Big(12));
  //throw new Error('test not yet defined... write your test here');
});

test('should return a String', () => {
  //convert(2100, 'mBTC', 'BTC', 'String');
  expect(typeof convert(2100, 'mBTC', 'BTC', 'String')).toBe(typeof "i am a string");
  //throw new Error('test not yet defined... write your test here');
});

test('should convert an integer', () => {
  //convert(123456789012345, 'Satoshi', 'BTC', 'Number');
  expect(typeof convert(123456789012345, 'Satoshi', 'BTC', 'Number')).toBe('number');
  //throw new Error('test not yet defined... write your test here');
});

test('should convert a number', () => {
  //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
  expect(typeof convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).toBe('number');
  //throw new Error('test not yet defined... write your test here');
});

test('should convert a string', () => {
  //convert('2', 'BTC', 'BTC', 'Number');
  expect(typeof convert('2', 'BTC', 'BTC', 'Number')).toBe('number');
  //throw new Error('test not yet defined... write your test here');
});

test('should convert a Big number', () => {
  //convert(new Big(2), 'BTC', 'BTC', 'Number');
  expect(typeof convert(new Big(2), 'BTC', 'BTC', 'Number')).toBe('number');
  //throw new Error('test not yet defined... write your test here');
});

test('should convert a NaN to a Number', () => {
  //convert(NaN, 'BTC', 'BTC', 'Number');
  expect(typeof convert(NaN, 'BTC', 'BTC', 'Number')).toBe('number');
  //convert(NaN, 'BTC', 'mBTC', 'Number');
  expect(typeof convert(NaN, 'BTC', 'mBTC', 'Number')).toBe('number');
  //throw new Error('test not yet defined... write your test here');
});

test('should convert a NaN to a String', () => {
  //convert(NaN, 'BTC', 'BTC', 'String');
  expect(typeof convert(NaN, 'BTC', 'BTC', 'String')).toBe(typeof "i am a string");
  //convert(NaN, 'BTC', 'mBTC', 'String');
  expect(typeof convert(NaN, 'BTC', 'mBTC', 'String')).toBe(typeof "i am a string");
  //throw new Error('test not yet defined... write your test here');
});

test('should not convert a NaN to a Big', () => {
  //convert(NaN, 'BTC', 'BTC', 'Big');
  //throw new Error('test not yet defined... write your test here');
});

test('should handle rounding errors', () => {
  //convert(4.6, 'Satoshi', 'BTC', 'Number');
  expect(() => {convert(4.6, 'Satoshi', 'BTC', 'Number')}).toThrow();
  //convert(0.000000046, 'BTC', 'Satoshi', 'Number');
  expect(() => {convert(0.000000046, 'BTC', 'Satoshi', 'Number')}).toThrow();
  //throw new Error('test not yet defined... write your test here');
});

test('should throw when untest is undefined', () => {
  //convert(new Big(2), 'x', 'BTC', 'Number');
  expect(() => {convert(new Big(2), 'x', 'BTC', 'Number')}).toThrow();
  //convert(new Big(2), 'BTC', 'x', 'Number');
  expect(() => {convert(new Big(2), 'BTC', 'x', 'Number')}).toThrow();
  //convert(NaN, 'x', 'BTC', 'Number');
  expect(() => {convert(NaN, 'x', 'BTC', 'Number')}).toThrow();
  //convert(NaN, 'BTC', 'x', 'Number');
  expect(() => {convert(NaN, 'BTC', 'x', 'Number')}).toThrow();
  //throw new Error('test not yet defined... write your test here');
});

test('should throw when representaion is undefined', () => {
  //convert(2, 'BTC', 'mBTC', 'x');
  expect(() => {convert(2, 'BTC', 'mBTC', 'x')}).toThrow();
  //convert(NaN, 'BTC', 'mBTC', 'x');
  expect(() => {convert(NaN, 'BTC', 'mBTC', 'x')}).toThrow();
  //throw new Error('test not yet defined... write your test here');
});

test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'btest');
  //throw new Error('test not yet defined... write your test here');
});
