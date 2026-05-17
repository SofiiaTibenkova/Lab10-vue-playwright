import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Вказує, де шукати файли тестів [cite: 220]
  fullyParallel: true, // Запускає тестові файли паралельно [cite: 221]
  forbidOnly: !!process.env.CI, // У CI забороняє test.only [cite: 223]
  retries: process.env.CI ? 2 : 0, // У CI тест повторюється до 2 разів при падінні [cite: 222]
  workers: process.env.CI ? 1 : undefined, // У CI використовується 1 воркер для стабільності [cite: 224]
  reporter: 'html', // Генерує детальний HTML-звіт [cite: 225]
  use: {
    baseURL: 'http://localhost:5173', // Стандартний порт для Vite-проєктів (Vue)
    trace: 'on-first-retry', // Зберігає trace-файл при першому retry [cite: 227]
  },
  webServer: {
    command: 'npm run dev', // Команда запуску твого Vue сервера
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI, // Локально повторно використовувати вже запущений сервер [cite: 231]
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});