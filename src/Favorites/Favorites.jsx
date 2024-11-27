import { Box, Card, Chip, Divider, Grid2, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { FavoritesContext } from '../Context/FavoritesProvider'
import { GoHeartFill } from "react-icons/go";
import { handleAddToFavorites } from '../Utils/favoriteUtils';


const Favorites = () => {
    const { favorites, setFavorites } = useContext(FavoritesContext)
    console.log(favorites);




    return (
        <>

            <Box sx={{ width: '100%' }} marginTop={10} marginBottom={12}>
                <Divider sx={{ marginBottom: "11px" }}>
                    <Chip sx={{ padding: 1.5 }} icon={<GoHeartFill />} label={favorites.length} />
                </Divider>

                {/* Conditional rendering based on favorites length */}
                {favorites.length === 0 ? (
                    <Typography align='center' variant='h5'>
                        Nothing added yet...
                    </Typography>
                ) : (
                    <Grid2 container spacing={3} justifyContent={'center'} overflow={'hidden'}>
                        {favorites.map((char, index) => (
                            <Grid2 size={10} key={index}>
                                <Card sx={{
                                    paddingTop: 6,
                                    height: 100,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }} elevation={0}>
                                    <Typography align='center' variant='h1'>
                                        {char}
                                    </Typography>
                                </Card>
                                <Card elevation={0}>
                                    <IconButton onClick={() => handleAddToFavorites(char, setFavorites)}>
                                        <GoHeartFill style={{ padding: '15px', fontSize: '25px', color: '#656565' }} />
                                    </IconButton>
                                </Card>
                            </Grid2>
                        ))}
                    </Grid2>
                )}
            </Box>


        </>
    )
}

export default Favorites