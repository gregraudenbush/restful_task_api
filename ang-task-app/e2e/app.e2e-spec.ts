import { AngTaskAppPage } from './app.po';

describe('ang-task-app App', () => {
  let page: AngTaskAppPage;

  beforeEach(() => {
    page = new AngTaskAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
