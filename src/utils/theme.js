import { useState, useMemo } from 'react';
import createTheme from '@mui/material/styles/ThemeProvider';

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: '#f0f3fa',
                    topPage: '#f8f9fe',
                    bottomPage: '#ffffff',
                },
                hover: '#e1e3f0',
                text: {
                    primary: 'hsl(230, 17%, 14%)',
                    secondary: 'hsl(228, 12%, 44%)',
                }
            }
            : {
                // palette values for dark mode
                primary: {
                    main: '#252b43',
                    topPage: '#20222f',
                    bottomPage: '#1d2029',
                },
                hover: '#333a56',
                text: {
                    primary: 'hsl(0, 0%, 100%)',
                    secondary: 'hsl(228, 34%, 66%)',
                }
            }),
        upGreen: 'hsl(163, 72%, 41%)',
        downRed: 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        instagram: 'linear-gradient(to right,hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
        youtube: 'hsl(348, 97%, 39%)',
    },
    typography: {
        fontFamily: [
            'Inter',
            'sans-serif'
        ]
    }
});

export default function useTheme() {
    const [mode, setMode] = useState('dark');
    const colorMode = useMemo(
        () => (() => {
            // The dark mode switch would invoke this method
            setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
            );
        }),
        [],
    );

    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return { theme, colorMode };
}