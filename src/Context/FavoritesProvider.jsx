import React, { createContext, useState } from 'react'
import useLocalStorage from '../CustomHook/useLocalStorage';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {

  const [favorites, setFavorites] = useLocalStorage('kanji-favorites', []);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesProvider };