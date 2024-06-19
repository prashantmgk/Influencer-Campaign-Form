import { Heading, Text } from "@chakra-ui/react"

const HeroSections = () => {
   return (
      <section>
         <Heading mt={24} fontFamily='montserrat' size={{ lg: '3xl', base: "2xl" }} as="h1" textAlign='center' lineHeight='110%' fontWeight='bold'>Become an Infuencer for <br /> Breakaway x Mifu</Heading>
         <Text mt={8} fontFamily='montserrat' fontWeight="semibold" textColor='gray.600' fontSize={{ lg: 'xl', base: "lg" }} textAlign='center'>Whether you&apos;re the person with the most likes or followers on campus, or a hard-worker
            looking to build your network and gain marketing experience, we want to HEAR from you.
         </Text>

         <Text mt={8} fontFamily='montserrat' fontWeight="semibold" textColor='gray.600' fontSize={{ lg: 'xl', base: "lg" }} textAlign='center'>Becoming a part of the Breakaway Influencer and Ambassador team is pretty simple. Just
            apply by selecting your preferred market below. Complete your application and attach your
            Instagram handle for a chance to be considered!
         </Text>
      </section >
   )
}

export default HeroSections