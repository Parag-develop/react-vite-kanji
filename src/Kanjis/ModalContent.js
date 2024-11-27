// ModalContent.js
import React from 'react';
import { Card, Typography } from '@mui/material';

const ModalContent = ({ characterData }) => {
    return (
        <Card sx={{ margin: 4, padding: 2 }}>
            {characterData ? (
                <>
                    <Typography variant='h1'>{characterData.kanji}</Typography>
                    <Typography variant='h5'>{characterData.heisig_en}</Typography>
                    <Typography variant='h5'>Kun: {characterData.kun_readings}</Typography>
                    <Typography variant='h5'>On: {characterData.on_readings}</Typography>
                </>
            ) : (
                <Typography variant='body1'>Loading...</Typography>
            )}
        </Card>
    );
};

export default ModalContent;