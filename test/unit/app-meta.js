import meta from '../../src/app-meta';

// ../setup/node.js sets these values for the Node spec runner
// In the browser, the document itself has these values.
describe('meta', () => {
  it('should have the version number', () => {
    expect(meta.VERSION).to.equal('2.0.0');
  });

  it('should have the env', () => {
    expect(meta.ENV).to.equal('development');
  });

  it('should return undefined for sha', () => {
    expect(meta.SHA).to.be.an('undefined');
  });
});
