import { LanguageIsFunRepoPage } from './app.po';

describe('language-is-fun-repo App', () => {
  let page: LanguageIsFunRepoPage;

  beforeEach(() => {
    page = new LanguageIsFunRepoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
