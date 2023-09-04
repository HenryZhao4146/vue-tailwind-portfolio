import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { spawn } from 'child_process';


console.log("Configuring server...");
const child = spawn('node', ['./src/server.js'], {
  stdio: ['ignore', 'inherit', 'inherit'],
  shell: true
});

process.on('error', (error) => {
  console.error(`Express process error: ${error}`);
});

process.on('exit', () => {
  child.kill();
});

process.on('SIGINT', () => {
  child.kill();
  process.exit();
});

process.on('SIGTERM', () => {
  child.kill();
  process.exit();
});

export default defineConfig({
  plugins: [vue()],
})