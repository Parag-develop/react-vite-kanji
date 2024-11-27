import { Card, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'; // Importing PropTypes for prop 

const KanjiCard = ({ char, onClick }) => {
    return (
        <Card onClick={onClick} sx={{
            paddingTop: 6,
            height: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        }} elevation={0}>
            <Typography align='center' variant='h1'>{char}</Typography>
        </Card>
    )
}

// PropTypes validation
KanjiCard.propTypes = {
    char: PropTypes.string.isRequired, // char is required and must be a string
};

export default KanjiCard