// Options.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Options = ({onClose}) => {
  return (
    <Box sx={{ marginTop:20, padding: 2, backgroundColor: '#f0f0f0', borderRadius: '4px', boxShadow: 2 }}>
      <Typography variant="h6">Options</Typography>
      <Typography variant="body1">Option 1</Typography>
      <Typography variant="body1">Option 2</Typography>
      <Typography variant="body1">Option 3</Typography>

      <Button variant="contained" onClick={onClose} sx={{ marginTop: 2 }}>
        Back
      </Button>
    </Box>
  );
};

export default Options;