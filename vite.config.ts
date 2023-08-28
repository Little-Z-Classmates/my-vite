import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import requireTransform from 'vite-plugin-require-transform'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'

const pathResolve = (dir: string) => resolve(__dirname, dir)

export default defineConfig({
  server: {
    port: 8080,
    open: true
  },
  plugins: [
    vue(),
    requireTransform({
      fileRegex: /.ts$|.vue$/
    }),
    eslintPlugin({
      include: [
        'src/**/*.js',
        'src/*.js',
        'src/**/*.ts',
        'src/**/*.d.ts',
        'src/**/*.tsx',
        'src/*.ts',
        '.eslintrc.cjs',
        'vite.config.ts',
        'src/**/*.vue',
        'src/*.vue'
      ]
    }),
    legacy({
      targets: [
        '> 1%',
        'not ie 11',
        'not op_mini all',
        'chrome >= 78',
        'edge >= 78',
        'firefox >= 72',
        'safari >= 13',
        'opera >= 67'
      ]
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  }
})
