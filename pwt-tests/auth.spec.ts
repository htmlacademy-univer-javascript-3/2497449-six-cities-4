import { test, expect } from '@playwright/test';

test('Авторизация валидна/невалидна', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await page.fill('input[name="email"]', 'smnv@mail.ru');
  await page.fill('input[name="password"]', '123');

  await page.click('button[type="submit"]');

  await page.isVisible(
  "text='В пароле должны быть по крайней мере одна английская буква и одна цифра без пробелов.'"
  );

  expect(page.url()).toBe('http://localhost:5173/login');
  await page.goto('http://localhost:5173/login');

  await page.fill('input[name="email"]', 'smnv@mail.ru');
  await page.fill('input[name="password"]', 'smnv123');

  await Promise.all([
  page.waitForURL('http://localhost:5173'),
  page.click('button[type="submit"]'),
  ]);
});
