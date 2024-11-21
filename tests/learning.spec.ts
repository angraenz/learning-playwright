import { test, expect } from '@playwright/test';

test('Open Visual Studio Website', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Cari').click();
  await page.getByLabel('Cari').fill('visual studio');
  await page.goto('https://www.google.com/search?q=visual+studio&sca_esv=21c38533450dea46&source=hp&ei=6L87Z_H5JeeN4-EPjOT8uA8&iflsig=AL9hbdgAAAAAZzvN-J7pIO3BqTwvSmmQHW6h7_gbdp_C&ved=0ahUKEwjxja2o9-aJAxXnxjgGHQwyH_cQ4dUDCA0&uact=5&oq=visual+studio&gs_lp=Egdnd3Mtd2l6Ig12aXN1YWwgc3R1ZGlvMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjaHFD4B1j3GXABeACQAQCYAXugAYgGqgEEMTIuMbgBA8gBAPgBAZgCDqAC0waoAgrCAhAQABgDGOUCGOoCGIwDGI8BwgIQEC4YAxjlAhjqAhiMAxiPAcICBRAuGIAEmAMKkgcEMTIuMqAH8UM&sclient=gws-wiz');
  await page.getByRole('link', { name: 'Visual Studio Code - Code' }).click();
  // await page.getByRole('heading', { name: 'Code faster with AI' }).click();
  await expect(page.getByRole('heading', { name: 'Code faster with AI' })).toBeVisible();
});