import { type Page, type Locator } from '@playwright/test';

export class Header {
  readonly themeBtn: Locator;
  readonly homeLink: Locator;
  readonly contactsLink: Locator;

  constructor(private readonly page: Page) {
    this.themeBtn = page.locator('.theme-btn');
    this.homeLink = page.getByRole('link', { name: 'Головна' });
    this.contactsLink = page.getByRole('link', { name: 'Контакти' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async toggleTheme(): Promise<void> {
    await this.themeBtn.click();
  }
}