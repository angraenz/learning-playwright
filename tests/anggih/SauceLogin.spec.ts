import { test, expect } from '@playwright/test';

test('Sauce Demo Login Test', async ({ page }) => {
    const sauceUsername = 'problem_user';
    const saucePassword = 'secret_sauce';
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').fill(sauceUsername);
  await page.locator('[data-test="password"]').fill(saucePassword);
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.getByText('Products', { exact: true })).toBeVisible();
  await page.close();
});