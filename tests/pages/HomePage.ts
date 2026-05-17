import { type Page, type Locator } from '@playwright/test';

export class HomePage {
  readonly heading: Locator;
  readonly searchInput: Locator;
  readonly projectsGrid: Locator;
  readonly projectCards: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Мої проєкти' });
    this.searchInput = page.locator('.search-input');
    this.projectsGrid = page.locator('.projects-grid');
    this.projectCards = page.locator('.projects-grid .project-card'); 
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async searchForProject(query: string): Promise<void> {
    await this.searchInput.fill(query);
  }
}