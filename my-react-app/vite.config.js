// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use the name of your GitHub repository as the base path
const repoName = 'ReactCI-CDTest'; 

export default defineConfig({
  plugins: [react()],
  
  // 💥 ADD OR UPDATE THIS LINE 💥
  base: `/${repoName}/`, 
  // or simply base: '/ReactCI-CDTest/',
});