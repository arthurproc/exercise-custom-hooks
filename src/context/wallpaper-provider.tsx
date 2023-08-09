import { useMemo, useState } from 'react';
import WallpaperContext from './wallpaper-context';
import wallpapersData from '../data/wallpapers';

type UserProviderProps = {
  children: React.ReactNode;
};

function WallpaperProvider({ children }: UserProviderProps) {
  const [wallpapers, setWallpapers] = useState([...wallpapersData]);

  const removeWallpaper = (id: number) => {
    const filteredWallpapers = wallpapers.filter(
      (wallpaper) => wallpaper.id !== id
    );

    setWallpapers(filteredWallpapers);
  };

  const contextValue = useMemo(
    () => ({
      wallpapers,
      removeWallpaper,
    }),
    [wallpapers]
  );

  return (
    <WallpaperContext.Provider value={contextValue}>
      {children}
    </WallpaperContext.Provider>
  );
}

export default WallpaperProvider;
