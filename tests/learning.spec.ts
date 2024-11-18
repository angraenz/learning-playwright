import { test, expect } from '@playwright/test';

test('Chat GPT', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.goto('https://playwright.dev/docs/writing-tests');
});