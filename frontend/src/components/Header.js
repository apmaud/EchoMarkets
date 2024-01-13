"use client"
import { AppBar, Toolbar, Typography, useTheme } from '@mui/material'
import InsightsIcon from '@mui/icons-material/Insights';
import React from 'react'

const Header = () => {
  const { palette } = useTheme();
  return (
    <AppBar
    position="fixed"
    sx={{ zIndex: 2000}}
    >
      <Toolbar sx={{backgroundColor: palette.background.light}}>
        <InsightsIcon sx={{mr: 2, color: palette.grey[200]}}/>
        <Typography variant='h6' noWrap component="div" color={palette.grey[200]}>
          EchoMarkets
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header