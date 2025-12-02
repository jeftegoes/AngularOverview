import { compute } from './compute';

describe('compute', () => { // we use it to define a speck or a test
  it('should return 0 if input is negative', function () { // Suite  We use describe to define a suite, which is a group of related tests.
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should increment the input if it is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
