// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_ENDPOINT_RANDOM_IMAGE = 'https://api.thecatapi.com/v1/images'
test('Cats random facts', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  // const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  // const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  // console.log('textContent: ', textContent)
  console.log('Image: ', imageSrc)
  // await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_ENDPOINT_RANDOM_IMAGE)).toBeTruthy()
})
