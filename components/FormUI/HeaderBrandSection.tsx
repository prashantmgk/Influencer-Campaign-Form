import { Box, Image, Stack, Text } from "@chakra-ui/react"

import BreakAwayLogo from '../../images/breakaway_logo.png';
import MifuLogo from '../../images/mifu_logo.png';

const HeaderBrandSection = () => {
   return (
      <Stack as='header' my={8} mx={{ lg: '8', base: '0' }} direction='row' justify="center" alignItems='center' spacing={4}>
         <Image src={BreakAwayLogo.src} height={{ lg: "50px", base: "32px" }} alt='Breakaway Logo' />
         <Text fontSize='3xl' fontWeight='semibold'>x</Text>
         <Box as='div' style={{ position: 'relative' }} width="200px" height={{ lg: "50px", base: "32px" }}>
            <Image src={MifuLogo.src} height="100%" minWidth='80px' alt='Mifu Logo' style={{ position: 'absolute' }} />
            <Image src={MifuLogo.src} height="100%" minWidth='80px' alt='Mifu Logo' opacity={0.3} style={{ position: 'absolute', top: '6px' }} />
         </Box>
      </Stack>
   )
}

export default HeaderBrandSection