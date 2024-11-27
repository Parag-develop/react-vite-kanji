// favoritesUtils.js
export const handleAddToFavorites = (char, setFavorites) => {
    setFavorites((prevFavorites) => {
        if (prevFavorites.includes(char)) {
            return prevFavorites.filter(fav => fav !== char); // Remove from favorites
        } else {
            return [...prevFavorites, char]; // Add to favorites
        }
    });
};
