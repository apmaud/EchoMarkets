"use client"
import { Divider, Drawer, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
    const { palette } = useTheme();
  return (
    <Drawer
    sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        top: ['48px', '56px', '64px'],
        height: 'auto',
        bottom: 0,
        backgroundColor: palette.background.light
        },

    }}
    variant="permanent"
    anchor="left"
    >
    <Divider />
    <List>
        <ListItem disablePadding>
            <ListItemButton component={Link} href='/register'>
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary="Hello" sx={{color: palette.grey[200]}}/>
            </ListItemButton>
        </ListItem>
    </List>
    <Divider sx={{ mt: 'auto' }} />
    <List>
        <ListItem disablePadding>
            <ListItemButton component={Link} href='/login'>
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary="Hello2" sx={{color: palette.grey[200]}}/>
            </ListItemButton>
        </ListItem>
    </List>
    </Drawer>
  )
}

export default Sidebar