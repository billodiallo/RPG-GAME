import Model from './test_files/Model';

describe('Model', () => {
  it('Should set userName ', () => {
    Model.userName = 'Billo';
    expect(Model.userName).toBe('Billo');
  });

  it('Should throw an error if different username ', () => {
    Model.userName = 'Billo';
    expect(Model.userName).not.toBe('Vzdrizni');
  });

  it('Should set the user\'s score ', () => {
    Model.score = '400';
    expect(Model.score).toBe('400');
  });

  it('Should throw an error if wrong user score  ', () => {
    Model.score = '';
    expect(Model.score).not.toBe('200');
  });
});