import React from 'react'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import OverviewCard from './OverviewCard'

const StyledTypography = styled(Typography)`
    color: ${({ theme }) => theme.palette.mode === 'light' ? theme.palette.text.secondary : theme.palette.text.primary};
`

function Overview({ socialsData, socialsList, socialsIcons }) {

    return (
        <Stack>
            <StyledTypography variant="h5" component="h2" fontWeight='bold' pb={2}>
                Overview - Today
            </StyledTypography>
            <Grid container spacing={4} columns={{ xs: 1, sm: 2, md: 4 }}>
                {
                    socialsList.map((social, index) => {
                        // weird code to have the same display order as the prototype
                        const views = (
                            <OverviewCard socialName={social}
                                title={socialsData[social].overViewTitle}
                                logo={socialsIcons[index]}
                                value={socialsData[social].dailyOverview.views.value}
                                percent={socialsData[social].dailyOverview.views.percent}
                            />
                        );
                        const likes = (
                            <OverviewCard socialName={social}
                                title='Likes'
                                logo={socialsIcons[index]}
                                value={socialsData[social].dailyOverview.likes.value}
                                percent={socialsData[social].dailyOverview.likes.percent}
                            />
                        )
                        return (
                            <React.Fragment key={social}>
                                {index % 2 !== 0 ? likes : views}
                                {index % 2 === 0 ? likes : views}
                            </React.Fragment>
                        )
                    })
                }
            </Grid>
        </Stack>
    )
}

export default Overview
