import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
    const fakeEmail = faker.internet.email();    
    
    await page.goto('https://example.cypress.io/commands/actions');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(fakeEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('123');
    await page.getByPlaceholder('Enter your name').click();
    await page.getByPlaceholder('Enter your name').fill('test');
    await page.getByLabel('Describe:').click();
    await page.getByLabel('Describe:').fill('this is a test');
    await page.getByLabel('Coupon Code').click();
    await page.getByLabel('Coupon Code').fill('a123');
});