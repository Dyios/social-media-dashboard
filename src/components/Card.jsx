import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import upIcon from '../assets/icons/icon-up.svg'
import downIcon from '../assets/icons/icon-down.svg'

import formatBigNumber from '../utils/formatBigNumber'

const StyledStack = styled(Stack)`
    background: ${({ theme }) => (theme.palette.primary.main)};
    padding-bottom: 22px;
    border-radius: 5px;

    &:hover {
        background:${({ theme }) => (theme.palette.hover)};
        cursor: pointer;
    }
`
const StyledTop = styled("div")`
    background: ${({ $topBorderColor }) => $topBorderColor};
    height: 4px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
    margin-bottom: 22px;
`

function Card({ icon, account, followers, dailyIncrease, topBorderColor, type }) {
    const theme = useTheme()
    const color = dailyIncrease > 0 ? theme.palette.upGreen : theme.palette.downRed;
    const increaseIcon = dailyIncrease > 0 ? upIcon : downIcon;

    return (
        <Grid item component="article" key={type} xs={4} sm={8 / 2} md={3}>
            <StyledStack $topBorderColor={topBorderColor} alignItems="center">
                <StyledTop $topBorderColor={topBorderColor} />
                <Box display="flex" alignItems="center" marginBottom="20px" component="header" >
                    <img src={icon} alt={`${type} logo`} />
                    <Typography variant="subtitle2" component="p"
                        sx={{ color: 'text.secondary' }} paddingLeft="10px"
                    >
                        {account}
                    </Typography>
                </Box>
                <Box marginBottom="20px" alignItems="center" display="flex" flexDirection="column">
                    <Typography variant="h3" component="p" fontWeight="bold">
                        {formatBigNumber(followers)}
                    </Typography>
                    <Typography variant="subtitle2" component="p"
                        letterSpacing="4px"
                        sx={{ color: 'text.secondary' }}
                    >
                        {type === "youtube" ? 'SUBSCRIBERS' : 'FOLLOWERS'}
                    </Typography>
                </Box>
                <Stack color={color} direction="row" alignItems="center">
                    <img src={increaseIcon} alt={increaseIcon} />
                    <Typography variant="subtitle2" component="p"
                        fontWeight="bold" pl="5px"
                    >
                        {Math.abs(dailyIncrease) + " Today"}
                    </Typography>
                </Stack>
            </StyledStack>
        </Grid>
    )
}

export default Card
