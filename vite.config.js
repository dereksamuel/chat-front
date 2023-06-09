import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [sveltekit(), svelte()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: "jsdom"
	}
});
