import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter/';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';
import Home from './page';


 const inter = Inter({ subsets: ['latin'] })

 export default function RootLayout({ children }) {
   return (
     <html lang="en">
       <body>
          <AppRouterCacheProvider options={{ enableCssLayer: true}}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box
              component="main"
              >
                {children}
              </Box>
            </ThemeProvider>
          </AppRouterCacheProvider>
       </body>
     </html>
   );
 }



