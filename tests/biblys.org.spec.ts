import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Biblys · Le logiciel libre pour créer des boutiques de livre en ligne.');
});
