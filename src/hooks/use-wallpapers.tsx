import { useContext } from 'react';
import WallpaperContext from '../context/wallpaper-context';
import { Wallpaper } from '../types';

type UseWallpapersReturn = {
  wallpapers: Wallpaper[];
  removeWallpaper: (id: number) => void;
};

export default function useWallpapers(): UseWallpapersReturn {
  const { wallpapers, removeWallpaper } = useContext(WallpaperContext);

  return { wallpapers, removeWallpaper };
}
