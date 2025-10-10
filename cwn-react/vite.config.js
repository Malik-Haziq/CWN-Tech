import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { gzipSync, brotliCompressSync, constants } from 'zlib';

// Lightweight compression plugin for build artifacts (gzip + brotli)
function compressPlugin({
  include = [
    /\.js$/i,
    /\.css$/i,
    /\.html$/i,
    /\.svg$/i,
    /\.json$/i,
    /\.xml$/i,
    /\.txt$/i,
    /\.wasm$/i,
  ],
  threshold = 1024, // only compress files >= 1KB
} = {}) {
  const shouldInclude = (fileName) => include.some((r) => r.test(fileName));

  return {
    name: 'compress-assets',
    generateBundle(_options, bundle) {
      for (const fileName of Object.keys(bundle)) {
        if (!shouldInclude(fileName) || /\.(gz|br)$/i.test(fileName)) continue;

        const chunk = bundle[fileName];
        const raw = chunk.type === 'asset' ? chunk.source : chunk.code;
        const buf = Buffer.isBuffer(raw) ? raw : Buffer.from(raw);
        if (buf.length < threshold) continue;

        // gzip (.gz)
        const gz = gzipSync(buf, { level: 9 });
        this.emitFile({
          type: 'asset',
          fileName: `${fileName}.gz`,
          source: gz,
        });

        // brotli (.br)
        const br = brotliCompressSync(buf, {
          params: { [constants.BROTLI_PARAM_QUALITY]: 11 },
        });
        this.emitFile({
          type: 'asset',
          fileName: `${fileName}.br`,
          source: br,
        });
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), compressPlugin()],
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
