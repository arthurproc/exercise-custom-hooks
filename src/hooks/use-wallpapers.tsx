import { Wallpaper } from '../types';

type UseWallpapersReturn = {
  wallpapers: Wallpaper[];
  removeWallpaper: (id: number) => void;
};

export default function useWallpapers(): UseWallpapersReturn {}
