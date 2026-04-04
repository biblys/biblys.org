import { expect, type Page, test } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Biblys · Le logiciel libre pour créer des boutiques de livre en ligne.');
});

test('tarifs', async ({ page }) => {
  await page.goto('/');

  await openMobileMenu(page);
  await page.click('text=Tarifs');

  await expect(page).toHaveTitle('Tarifs · Biblys');
});

test('faq', async ({ page }) => {
  await page.goto('/');

  await openMobileMenu(page);
  await page.click('text=FAQ');

  await expect(page).toHaveTitle('Questions fréquentes · Biblys');
});

test('blog', async ({ page }) => {
  await page.goto('/');

  await openMobileMenu(page);
  await page.click('text=Blog');

  await expect(page).toHaveTitle('Blog · Biblys');
});

test('contact', async ({ page }) => {
  await page.goto('/');

  await openMobileMenu(page);
  await page.click('text=Contact');

  await expect(page).toHaveTitle('Contact · Biblys');
});

test('commencer', async ({ page }) => {
  await page.goto('/');

  await openMobileMenu(page);
  await page.click('text=Commencer');

  await expect(page).toHaveTitle('Commencer · Biblys');
});

function isMobile(page: Page) {
  return page.viewportSize()!.width < 768;
}

async function openMobileMenu(page: Page) {
  if (isMobile(page)) {
    await page.getByRole('button', { name: 'Toggle Menu' }).click();
  }
}
