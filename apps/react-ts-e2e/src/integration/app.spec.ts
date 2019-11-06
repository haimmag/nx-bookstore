import { getGreeting } from '../support/app.po';

describe('react-ts', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to react-ts!');
  });
});
