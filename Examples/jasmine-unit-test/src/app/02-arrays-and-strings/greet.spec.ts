import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    const message = greet('Jefté');
    expect(message).toContain('Jefté');
  });
});
