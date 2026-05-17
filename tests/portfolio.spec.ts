import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { Header } from './pages/Header';

test.describe('Адаптивне Портфоліо E2E Тести', () => {
  
  // Тест 1: Перевірка правильності заголовку сторінки [cite: 12]
  test('Має правильний заголовок (title) сторінки', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    
    // Перевіряємо title з твого index.html [cite: 309]
    await expect(page).toHaveTitle('Лабораторна 9 - Адаптивне Портфоліо');
  });

  // Тест 2: Перевірка наявності ключових елементів [cite: 13]
  test('Відображає секцію з проєктами та поле пошуку', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    
    // Перевіряємо, що елементи видимі (toBeVisible) [cite: 43]
    await expect(homePage.heading).toBeVisible();
    await expect(homePage.searchInput).toBeVisible();
    await expect(homePage.projectsGrid).toBeVisible();
  });

  // Тест 3: Коректність тексту конкретного елемента [cite: 14]
  test('Кнопка зміни теми має правильний текст', async ({ page }) => {
    const header = new Header(page);
    await header.goto();
    
    // Перевіряємо, чи елемент містить текст (toContainText) [cite: 44, 45]
    await expect(header.themeBtn).toContainText('Змінити тему');
  });
});