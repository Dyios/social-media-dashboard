import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { useTheme, styled } from '@mui/material/styles'

import upIcon from '../assets/icons/icon-up.svg'
import downIcon from '../assets/icons/icon-down.svg'

import formatBigNumber from '../utils/formatBigNumber'

const StyledGrid = styled(Grid)`
    &:hover {
        background-color: ${({ theme }) => (theme.palette.hover)};
        cursor: pointer;
    }
`

function OverviewCard({ socialName, title, logo, value, percent }) {
    const theme = useTheme()
    const increaseIcon = percent > 0 ? upIcon : downIcon;
    const viewsPercentIncreaseColor = percent > 0 ? theme.palette.upGreen : theme.palette.downRed

    return (
        <Grid key={`${socialName}-${title}`} item xs={1} sm={1} md={1}>
            <StyledGrid container columns={3} p={2.5} sx={{ bgcolor: 'primary.main', borderRadius: 1.25 }}>
                <Grid item xs={2}>
                    <Typography variant='subtitle2' component="p"
                        color='text.secondary'
                        fontWeight="bold"
                        pb="10px"
                    >
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={1} display="flex" justifyContent="flex-end">
                    <img src={logo} alt={socialName} height="20px" />
                </Grid>
                <Grid item xs={2} >
                    <Typography variant="h4" component='p' fontWeight='bold' >
                        {formatBigNumber(value)}
                    </Typography>
                </Grid>
                <Grid item xs={1} display="flex" alignItems="end" justifyContent="flex-end" >
                    <Box display="flex" alignItems="center" mb="4px">
                        <img src={increaseIcon} alt={increaseIcon} />
                        <Typography variant='subtitle2' component="p"
                            pl="5px"
                            sx={{ color: viewsPercentIncreaseColor }}
                        >
                            {`${Math.abs(percent)}%`}
                        </Typography>
                    </Box>
                </Grid>
            </StyledGrid>
        </Grid>
    )
}

export default OverviewCard
