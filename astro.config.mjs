import { defineConfig } from 'astro/config';

// 纯静态输出：构建产物可直接部署到任何静态托管
export default defineConfig({
  output: 'static',
});
