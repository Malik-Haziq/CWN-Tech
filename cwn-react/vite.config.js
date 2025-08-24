import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { gzipSync } from 'zlib';

function gzipPlugin() {
  return {
    name: 'gzip-plugin',
    generateBundle(_options, bundle) {
      for (const file of Object.keys(bundle)) {
        const chunk = bundle[file];
        const source = chunk.type === 'asset' ? chunk.source : chunk.code;
        const compressed = gzipSync(Buffer.from(source));
        this.emitFile({
          type: 'asset',
          fileName: `${file}.gz`,
          source: compressed,
        });
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), gzipPlugin()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@styles': '/src/css',
      '@images': '/src/assets/images',
      '@icons': '/src/assets/icons',
      '@pages': '/src/pages',
    },
  },
});
