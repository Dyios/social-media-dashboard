import { useState, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from '../utils/theme';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Header from '../components/Header';
import Card from '../components/Card';
import Overview from '../components/Overview';

import data from '../data/data'
import facebookIcon from '../assets/icons/icon-facebook.svg';
import twitterIcon from '../assets/icons/icon-twitter.svg';
import instagramIcon from '../assets/icons/icon-instagram.svg';
import youtubeIcon from '../assets/icons/icon-youtube.svg';

const StyledBox = styled(Box)`
  min-height: 100vh;
  padding: 0px 10px;
  padding-bottom: 30px;
  background: linear-gradient(
    ${({ theme }) => theme.palette.primary.topPage} 220px,
    ${({ theme }) => theme.palette.primary.bottomPage} 220px);
`

const StyledContainer = styled(Container)`
  & > * {
    padding-top: 33px;
  }
`

// Swap the elements at the given indexes to have the weird order of the prototype
function swapArrayElements(arr, indexA, indexB) {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
  return arr;
};

function SocialMediaDashboard() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || 'light');
  const socialsList = ["facebook", "twitter", "instagram", "youtube"];
  const socialsIcons = [facebookIcon, twitterIcon, instagramIcon, youtubeIcon];
  const colorMode = useMemo(
    () => (() => {
      // The dark mode switch would invoke this method
      setMode((prevMode) => {
        const newMode = prevMode === 'light' ? 'dark' : 'light';
        localStorage.setItem("mode", newMode)
        return newMode;
      });
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <StyledBox component="main">
        <StyledContainer component="section" maxWidth={false} sx={{ maxWidth: 1050 }}>
          <CssBaseline />
          <Header checked={mode === 'light'} handleChange={colorMode} totalFollowers={data.totalFollowers} />
          <Grid component="section" container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} >
            {
              socialsList.map((social, index) => {
                const { account, followers, dailyIncrease } = data[social];
                const icon = socialsIcons[index];
                return (
                  <Card key={social}
                    type={social}
                    topBorderColor={theme.palette[social]}
                    icon={icon}
                    account={account}
                    followers={followers}
                    dailyIncrease={dailyIncrease} />
                )
              })
            }
          </Grid>
          <Overview socialsData={data}
            socialsList={swapArrayElements(socialsList, 1, 2)}
            socialsIcons={swapArrayElements(socialsIcons, 1, 2)}
          />
        </StyledContainer>
      </StyledBox>
    </ThemeProvider>
  );
}

export default SocialMediaDashboard;
