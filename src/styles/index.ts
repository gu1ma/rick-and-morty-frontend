import { createStitches } from "@stitches/react";


export const {
    config,
    styled, 
    globalCss, 
    keyframes,
    getCssText,
    theme,
    createTheme,
    css
} = createStitches({
    theme: {
        colors: {
            primary: '#2D3748',
            primaryDark: '#1A202C',
            secondary: '#6DAB6C',
            secondaryDark: '#1b6f20',
        }
    }
})