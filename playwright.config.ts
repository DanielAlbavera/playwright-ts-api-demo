import { defineConfig } from '@playwright/test';
import { BASE_URL, API_TOKEN } from './business/fixtures/base.fixture';

export default defineConfig({
  use: {
    // All requests we send go to this API endpoint.
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
  }
});