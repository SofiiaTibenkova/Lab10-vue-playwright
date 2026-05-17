import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { Header } from './pages/Header';

test.describe('Адаптивне Портфоліо E2E Тести', () => {

  test('Має правильний заголовок (title) сторінки', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    await expect(page).toHaveTitle('Лабораторна 9 - Адаптивне Портфоліо');
  });

  test('Відображає секцію з проєктами та поле пошуку', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    await expect(homePage.heading).toBeVisible();
    await expect(homePage.searchInput).toBeVisible();
    await expect(homePage.projectsGrid).toBeVisible();
  });

  test('Кнопка зміни теми має правильний текст', async ({ page }) => {
    const header = new Header(page);
    await header.goto();

    await expect(header.themeBtn).toContainText('Змінити тему');
  });
});