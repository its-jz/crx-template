import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './src/main.tsx', // Your entry file
      output: {
        dir: '../dist', // Directory for the output files
        entryFileNames: 'content.js', // Naming pattern for entry chunks
        // You can add more output options here as needed
      },
    },
    // Additional build configurations can go here
  },
  // Other Vite configurations can be added here
});