'use client'
import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

const ThemeRegistry = ({children}) => {
  return (
    <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default ThemeRegistry