import {sum, diff} from '../src/index.js';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtract 7 - 3 to equal 4', () => {
    expect(diff(7, 3)).toBe(4);
});