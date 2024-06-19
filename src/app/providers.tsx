'use client'
import {
   Montserrat
} from "next/font/google";

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient, Query } from '@tanstack/react-query'
import { useState } from 'react'

const montserrat = Montserrat({ subsets: ['cyrillic'] })
const theme = extendTheme({
   fonts: {
      montserrat: montserrat.style.fontFamily,
   },
})


export function Providers({ children }: { children: React.ReactNode }) {
   const [queryClient] = useState(() => new QueryClient())

   return (
      <QueryClientProvider client={queryClient}>
         <ChakraProvider theme={theme}>
            {children}
         </ChakraProvider>
      </QueryClientProvider>
   )

}