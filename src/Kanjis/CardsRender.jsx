import { Card, Grid2, IconButton } from '@mui/material'
import React, { useContext } from 'react'
import KanjiCard from './KanjiCard'
import { handleAddToFavorites } from '../Utils/favoriteUtils'
import { GoHeart } from "react-icons/go";
import { FavoritesContext } from '../Context/FavoritesProvider';

const CardsRender = ({ filteredKanji, handleCardClick }) => {
    const { setFavorites } = useContext(FavoritesContext); 
    return (
        <Grid2 container spacing={3} justifyContent={'center'} overflow={'hidden'}>
            {filteredKanji.map((char) => (
                <Grid2 item size={10} key={char}>
                    <KanjiCard char={char} onClick={() => handleCardClick(char)} />
                    <Card elevation={0}>
                        <IconButton onClick={() => handleAddToFavorites(char, setFavorites)}>
                            <GoHeart style={{ padding: '15px', fontSize: '25px', color: '#656565' }} />
                        </IconButton>
                    </Card>
                </Grid2>
            ))}
        </Grid2>
    )
}

export default CardsRender