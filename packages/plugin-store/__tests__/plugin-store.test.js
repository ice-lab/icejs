function sum(a, b) {
  return a + b;
}

describe('plugin-store', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
