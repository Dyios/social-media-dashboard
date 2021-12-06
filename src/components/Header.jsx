import React, { useMemo } from 'react'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledFormControlLabel = styled(FormControlLabel)(
    ({ theme }) => `
    & .MuiFormControlLabel-label{
        font-size:${theme.typography.subtitle2.fontSize};
        font-weight: bold;
    }
    &:hover{
        color: ${theme.palette.mode === 'dark' && theme.palette.text.primary};
    }
    @media (max-width: ${theme.breakpoints.values.sm}px){
        & {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
`
)
const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 40,
    height: 22,
    padding: 0,
    marginLeft: '11px',
    marginRight: '11px',
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(18px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                background: '#aeb2cc',
                opacity: 1,
                border: 0,
            },
            '&:hover + .MuiSwitch-track': {
                background: 'linear-gradient(to right,hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
            }
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.primary.main,
        boxSizing: 'border-box',
        width: 16,
        height: 16,
        marginLeft: '1px',
        marginTop: '1px',
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        background: 'linear-gradient(to right,hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
        opacity: 1,
    },
}));

function Header({ checked, handleChange, totalFollowers }) {
    const followsers = useMemo(() => {
        let formattedFollowers = totalFollowers.toString();
        formattedFollowers = formattedFollowers.split(/(?=(?:...)*$)/).join(',');
        return formattedFollowers;
    }, [totalFollowers])

    return (
        <Stack component="header"
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "start", sm: "center" }}
            spacing={{ xs: 3, sm: 0 }}
        >
            <Box>
                <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }} >
                    Social Media Dashboard
                </Typography>
                <Typography variant="subtitle2" component="p"
                    sx={{ color: 'text.secondary', fontWeight: 'bold' }}
                >
                    Total Followers: {followsers}
                </Typography>
            </Box>
            {useMediaQuery('(max-width: 600px)') && <Divider flexItem />}
            <StyledFormControlLabel
                control={<IOSSwitch checked={checked} onChange={handleChange} />}
                label="Dark Mode" labelPlacement="start" sx={{ color: 'text.secondary', ml: 0 }}
            />
        </Stack>
    )
}

export default Header
