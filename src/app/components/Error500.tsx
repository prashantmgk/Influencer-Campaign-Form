'use client'
import { Heading, Stack } from "@chakra-ui/react"
import { useRouter } from 'next/navigation'

const Error500 = () => {
   const router = useRouter()

   return (
      <Stack direction='column' className="error-wrapper" bg='red.400' textColor='white' spacing={8}>
         <Heading fontFamily='montserrat' textAlign='center'>Error Code : 500 <br />Internal Server Error!</Heading>
         <p>Oops! Something went wrong on our end :(</p>
      </Stack>
   )
}

export default Error500