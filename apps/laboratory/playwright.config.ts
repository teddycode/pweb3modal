import { defineConfig, devices } from '@playwright/test'
import { BASE_URL } from './tests/shared/constants'

import { config } from 'dotenv'
import type { ModalFixture } from './tests/shared/fixtures/w3m-fixture'
config({ path: './.env' })

export default defineConfig<ModalFixture>({
  testDir: './tests',

  fullyParallel: true,
  retries: 0,
  workers: 1,
  reporter: [['list'], ['html']],

  expect: {
    timeout: (process.env['CI'] ? 60 : 15) * 1000
  },
  timeout: 60 * 1000,

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    video: 'retain-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium/wagmi',
      use: { ...devices['Desktop Chrome'], library: 'wagmi' }
    },

    {
      name: 'firefox/wagmi',
      use: { ...devices['Desktop Firefox'], library: 'wagmi' }
    },

    {
      name: 'chromium/ethers',
      use: { ...devices['Desktop Chrome'], library: 'ethers' }
    },

    {
      name: 'firefox/ethers',
      use: { ...devices['Desktop Firefox'], library: 'ethers' }
    },

    {
      name: 'webkit/ethers',
      use: { ...devices['Desktop Safari'], library: 'ethers' }
    },

    {
      name: 'webkit/ethers',
      use: { ...devices['Desktop Safari'], library: 'ethers' }
    }
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run playwright:start',
    url: BASE_URL,
    reuseExistingServer: !process.env['CI'] || Boolean(process.env['SKIP_PLAYWRIGHT_WEBSERVER'])
  }
})
