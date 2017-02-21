import { GithubClientPage } from './app.po';

describe('github-client App', () => {
  let page: GithubClientPage;

  beforeEach(() => {
    page = new GithubClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
