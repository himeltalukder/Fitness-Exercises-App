import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SerchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SerchExercises />
      <Exercises />
    </Box>
  )
}

export default Home