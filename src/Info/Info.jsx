import { Box, Card, Divider, Grid2, Typography } from '@mui/material'
import React from 'react'
import { FaCertificate } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <Box sx={{ width: '100%' }} marginTop={10} marginBottom={12}>
      <Grid2 container spacing={3} justifyContent={'center'} overflow={'hidden'}>
        <Grid2 size={10}>

          <Card sx={{
            // height: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} elevation={0}>
            <FaCertificate />
            <Typography variant='overline' padding={1}>
              This app supports 1,006 Kyōiku Kanjis

            </Typography>
          </Card>

          <Card sx={{
            marginTop: 2,
            // height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }} elevation={0}>
            <Typography variant='h5' padding={2}>
              Kyōiku Kanji
            </Typography>
            <Divider />
            <Typography variant='subtitle1' padding={2}>
              The kyōiku kanji (教育漢字, literally "education kanji"), sometimes called the gakushū kanji (学習漢字, literally "learning kanji"), are those kanji listed on the Gakunenbetsu kanji haitō hyō (学年別漢字配当表, literally "list of kanji by school year"), a list of 1,026 kanji and associated readings developed and maintained by the Japanese Ministry of Education that prescribes which kanji, and which readings of kanji, Japanese students should learn from first grade to the sixth grade of elementary school.
            </Typography>
            <Typography variant='subtitle1' padding={2}>
              Although the list is designed for Japanese students, it can also be used as a sequence of learning characters by non-native speakers as a means of focusing on the most commonly used kanji.

              Kyōiku kanji are a subset (1,026) of the 2,136 characters of jōyō kanji.
            </Typography>


          </Card>

          <Card sx={{
            marginTop: 2,
            // height: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} elevation={0}>

            <Typography variant='overline' padding={1}>
              Make with love by Parag Palkar
            </Typography>
          </Card>
          <Divider />
          <Card sx={{
            padding: 2,
            // height: 100,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }} elevation={0}>
            <Link to='https://www.linkedin.com/in/parag-palkar-453675193/' target="_blank" rel="noopener noreferrer">
            <FaLinkedin fontSize={20} />
            </Link>
            <Link to='mailto:paragpalkar97@gmail.com' target="_blank" rel="noopener noreferrer">
            <SiGmail fontSize={20} />
            </Link>
            <Link to='https://wa.me/917738054437?text=Hello%20Parag' target="_blank" rel="noopener noreferrer">
    <IoLogoWhatsapp fontSize={20} />
</Link>

          </Card>
          

        </Grid2>
      </Grid2>



    </Box>

  )
}

export default Info