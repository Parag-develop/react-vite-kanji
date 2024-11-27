import React from 'react'
import { Card, Typography } from '@mui/material';

const KanjiDetail = ({characterData }) => {
    if (!characterData) return null;

  return (
    <>
    <Card sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h4">{characterData.kanji}</Typography>
      <Typography variant="body1">Meaning: {characterData.meanings}</Typography>
      {/* Add more details as needed */}
      <pre>{JSON.stringify(characterData, null, 2)}</pre> {/* For debugging purposes */}
    </Card>
    </>
  )
}

export default KanjiDetail