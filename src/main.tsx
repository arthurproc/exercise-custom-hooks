import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import WallpaperProvider from './context/wallpaper-provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WallpaperProvider>
    <App />
  </WallpaperProvider>
);
