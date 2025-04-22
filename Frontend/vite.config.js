import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // ✅ Add React support
    tailwindcss(),
  ],
  base: './', // ✅ Fixes path issues on Vercel
});
