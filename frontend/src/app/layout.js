import { AppBar, Box, CssBaseline, ThemeProvider, Toolbar, Typography } from '@mui/material'
import InsightsIcon from '@mui/icons-material/Insights';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ThemeRegistry from '@/utils/ThemeRegistry';


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          <Sidebar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
