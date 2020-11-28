import React from "react";
import { Box, Grid, Container } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import "./App.css";
import Img1 from './assets/images/1.jpg';
import Img2 from './assets/images/2.jpg';
import Img3 from './assets/images/3.jpg';

const blueGreyColor = blueGrey.A100;
const greyColor = grey.A600;
const dataList = [
  {
    img: Img1,
    city: 'Kasauli',
    drive_time: '2-hour',
  },
  {
    img: Img2,
    city: 'Manali',
    drive_time: '5.5-hour',
  },
  {
    img: Img3,
    city: 'Mussoorie',
    drive_time: '5-hour',
  },
  {
    img: Img1,
    city: 'Chandigarh',
    drive_time: '5-hour',
  },
  {
    img: Img2,
    city: 'Dalhosie',
    drive_time: '4.5-hour',
  },
  {
    img: Img3,
    city: 'Shimla',
    drive_time: '3-hour',
  },
  {
    img: Img1,
    city: 'Dehradun',
    drive_time: '4-hour',
  },
  {
    img: Img2,
    city: 'Ludhiana',
    drive_time: '15-minute',
  }
];

function App() {
  return (
    <Container>
      <Box component={Grid} container mt={10} borderColor={`${blueGreyColor} !important`} borderRight={2} py={5}>
        {dataList.length > 0 && dataList.map(({ img, city, drive_time }, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box display="flex" alignItems="center" mb={2}>
              <Box borderRadius={10} overflow="hidden" lineHeight={0} marginRight={1.8}>
                <img src={img} alt={`img-${index}`} width="80" height="80" />
              </Box>
              <Box display="flex">
                <Box>
                  <Box fontWeight="fontWeightMedium">{city}</Box>
                  <Box color={greyColor}>{drive_time} drive</Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Box>
    </Container >
  );
}

export default App;
