import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.titivillus.desafio',
  appName: 'El Desafío de Titivillus',
  webDir: 'dist',
  backgroundColor: '#f4e4bc',
  plugins: {
    SystemBars: {
      hidden: true
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
