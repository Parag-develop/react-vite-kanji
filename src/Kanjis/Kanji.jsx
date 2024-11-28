import React, { useCallback, useContext, useEffect, useMemo, useState,Suspense, lazy } from 'react'
import axios from 'axios'
import { Chip, Divider, Grid2, IconButton, Stack, Typography } from '@mui/material';

import Box from '@mui/material/Box';
import { Backdrop, CircularProgress, Skeleton,  } from '@mui/material';
import { FavoritesContext } from '../Context/FavoritesProvider';
import { KanjiContext } from '../Context/KanjiProvider';
import CardsRender from './CardsRender';


const Kanji = () => {
    const { kanji, loadingSkeleton } = useContext(KanjiContext); // Use context for kanji data
    const [characterData, setCharacterData] = useState(null);
    const [exampleData, setExampleData] = useState(null);
    const [openModal, setOpenModal] = useState(false); // State to control modal visibility
    const [loading, setLoading] = useState(false); // State to control loading indicator
    
    const { favorites } = useContext(FavoritesContext)
    const ModalCard = lazy(() => import('./ModalCard'));
    
    
    const apiUrl = "https://kanji-backend-3fvs.vercel.app/";
    // const BASE_URL = 'http://localhost:5000';
    
    const handleCardClick = useCallback(async (char) => {
        setLoading(true);
        try {
            const [charResponse, exampleResponse] = await Promise.all([
                axios.get(`${apiUrl}/${char}`),
                axios.get(`${apiUrl}/example/${char}`)
            ]);

            setCharacterData(charResponse.data);
            setExampleData(exampleResponse.data);
            setOpenModal(true);
        } catch (error) {
            console.error('Error fetching character data:', error);
        } finally {
            setLoading(false);
        }
    }, [setLoading, setCharacterData, setExampleData, setOpenModal]);


    const handleCloseModal = () => {
        setOpenModal(false); // Close the modal
    };

    const filteredKanji = useMemo(() => {
        console.log("from filtered kanji", kanji);
        const result = kanji.filter(char => !favorites.includes(char)); // Only show non-favorite kanjis

        return result;
    }, [kanji, favorites]); // Recompute when kanji or favorites change 

    const renderSkeletons = () => (
        <Stack sx={{ justifyContent: "center" }} spacing={2}>
            {[...Array(3)].map((_, index) => (
                <Skeleton key={index} variant="rectangular" width={300} height={200} />
            ))}
        </Stack>
    );


    return (
        <>
            {/* Backdrop for loading indication */}
            <Backdrop open={loading} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }} marginTop={9} marginBottom={12} >
                <Divider sx={{ marginBottom: "11px" }}>
                    {loadingSkeleton ? (

                        <Chip sx={{ padding: 1.5 }} label={"..."} size="medium" />
                    ) : (

                        <Chip sx={{ padding: 1.5 }} label={filteredKanji.length} size="medium" />
                    )
                    }
                </Divider>
                
                {loadingSkeleton ? renderSkeletons() :  <CardsRender filteredKanji={filteredKanji} handleCardClick={handleCardClick}/>
                }

                

                {/* Modal for displaying character details */}
                {/* <Modal open={openModal} onClose={handleCloseModal}

                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    keepMounted >
                    <Card sx={{
                        margin: 4,
                        padding: 2,
                        border: "none"
                        //             maxWidth: '90%', // Set a max width for smaller screens
                        // width: '400px', // Optional fixed width for larger screens
                    }}>
                        {characterData ? renderCharacterDetails() : (
                            <Typography variant='body1'>Loading...</Typography>
                        )}
                    </Card>
                </Modal> */}
                {openModal && (
                <Suspense fallback={<div>Loading Modal...</div>}>
                    <ModalCard openModal={openModal} 
                    handleCloseModal={handleCloseModal}
                    exampleData={exampleData} 
                    characterData={characterData}/>
                </Suspense>
            )}


            </Box>
        </>
    )
}

export default Kanji