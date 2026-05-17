import { type Page, type Locator } from '@playwright/test';

export class HomePage {
  readonly heading: Locator;
  readonly searchInput: Locator;
  readonly projectsGrid: Locator;
  readonly projectCards: Locator;

  constructor(private readonly page: Page) {
    // Використовуємо getByRole, бо він перевіряє не лише функціональність, а й доступність [cite: 50]
    this.heading = page.getByRole('heading', { name: 'Мої проєкти' });
    this.searchInput = page.locator('.search-input');
    this.projectsGrid = page.locator('.projects-grid');
    this.projectCards = page.locator('.projects-grid .project-card'); // Або інший селектор твоєї картки
  }

  // Метод для навігації 
  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  // Допоміжний метод для взаємодії зі сторінкою (пошук) 
  async searchForProject(query: string): Promise<void> {
    await this.searchInput.fill(query);
  }
}