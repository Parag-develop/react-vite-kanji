import { Card, Chip, Divider, Modal, Typography } from '@mui/material'
import React from 'react'

const ModalCard = ({openModal,handleCloseModal, characterData, exampleData}) => {
    
    const data = characterData.meanings;

    const renderCharacterDetails = () => (
        <>
            <Typography variant='h1'>{characterData.kanji}</Typography>
            <Typography variant='h5'>
                {characterData.meanings.map((item, i) => (
                    <Chip key={i} variant='outlined' sx={{ padding: 1, marginRight: 0.5, marginTop: 0.5 }} label={item} size="medium" />
                ))}
            </Typography>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <Typography variant='h5'>
                Kun{characterData.kun_readings.map((item, i) => (
                    <Chip key={i} sx={{ fontWeight: "bold", fontSize: "large", padding: 2, marginLeft: 0.5, marginBottom: 0.5 }} label={item} size="medium" />
                ))}
            </Typography>
            <Typography variant='h5'>
                On{characterData.on_readings.map((item, i) => (
                    <Chip key={i} sx={{ fontWeight: "bold", fontSize: "large", padding: 2, marginLeft: 0.5, marginBottom: 0.5 }} label={item} size="medium" />
                ))}
            </Typography>
            {/* Example Section */}
                <React.Fragment >
                    <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                    <Typography variant='overline'>Example</Typography>
                    <Typography variant='h5' marginTop={1}>{exampleData[0].meanings[0]?.glosses}</Typography>
                    <Typography variant='h6' marginTop={1}>{exampleData[0].variants[0]?.pronounced}</Typography>
                    <Typography variant='h4' marginTop={1}>{exampleData[0].variants[0]?.written}</Typography>
                </React.Fragment>
            
        </>
    );
  return (
    <Modal open={openModal} onClose={handleCloseModal}

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
                </Modal>
  )
}

export default ModalCard