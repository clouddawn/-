import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: "0.0.0.0",
      port: 3000, // 端口号
      open: false, // 是否自动打开浏览器
      proxy: {
        "/api": {
          // 我们需要告诉devserver帮我们解决那个地址的跨域
          //这是我们想要访问的地址
          // target: "http://userwj.dev.dimingwenhua.cn/",
          // target: "http://devzhangju.dimingwenhua.cn",
          target: "http://usercenter.dimingwenhua.cn",
          // target: "http://usercr.dev.dimingwenhua.cn",
          rewrite: (path: any) => path.replace(/^\/api/, "/api"),
          changeOrigin: true
        }
      }
    }
  }
);
