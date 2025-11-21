import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    extensions: ['.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Your shadcn/ui + other pinned versions
      '@': path.resolve(__dirname, './src'),
      'vaul': 'vaul',
      'sonner': 'sonner',
      'recharts': 'recharts',
      'react-resizable-panels': 'react-resizable-panels',
      'react-hook-form': 'react-hook-form',
      'react-day-picker': 'react-day-picker',
      'next-themes': 'next-themes',
      'lucide-react': 'lucide-react',
      'input-otp': 'input-otp',
      'embla-carousel-react': 'embla-carousel-react',
      'cmdk': 'cmdk',
      'class-variance-authority': 'class-variance-authority',
      // Radix primitives (you can keep the versioned ones if you really needed)
      '@radix-ui/react-tooltip': '@radix-ui/react-tooltip',
      '@radix-ui/react-toggle': '@radix-ui/react-toggle',
      // ... keep the rest exactly as you have them
    },
  },

  build: {
    target: 'esnext',
    outDir: 'dist',               // ← THIS IS THE FIX (Vercel expects "dist")
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // adjust if you use router
          ui: ['framer-motion', 'lucide-react', 'sonner', 'vaul'], // big UI libs
        },
      },
    },
    chunkSizeWarningLimit: 600,    // removes the scary 500kB warning for now
  },

  server: {
    port: 3000,
    open: true,
  },
});