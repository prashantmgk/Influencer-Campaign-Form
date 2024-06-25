"use client";
import { Stack, Text, Image, Box, Heading, Card, CardHeader, CardBody, HStack, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Input, Checkbox, Textarea, Button } from '@chakra-ui/react';

import InstagramLogo from '../images/instagram.png';
import TiktokLogo from '../images/tiktok.png';
import TwitterLogo from '../images/twitter.png';
import YoutubeLogo from '../images/youtube.png';

import { InfluencerCampaignForm } from '../../../lib/api';

import { useForm } from 'react-hook-form'
import {
   FormErrorMessage,
   FormLabel,
   FormControl,

} from '@chakra-ui/react'

import HeroSection from './FormUI/HeroSection';
import HeaderBrandSection from './FormUI/HeaderBrandSection';


interface FormValues {
   [key: string]: string;
}


const InfluencerForm = ({ campaignForm }: { campaignForm: InfluencerCampaignForm }) => {
   const { control, handleSubmit, formState: { errors }, register, } = useForm();

   const onSubmit = (values: FormValues) => {
      console.log('FORM SUBMITTED:', values);
   };
   return (
      <Box as='main' alignItems="center" mx={{ lg: '18vw', base: "6vw" }}>

         <HeaderBrandSection />

         <HeroSection />

         <Stack as='section' my={20} mx={{ lg: '12', base: '0' }}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate >
               <Card boxShadow="0 0 8px 4px rgba(0, 0, 0, 0.08)" fontFamily='montserrat' textColor='purple.900' borderRadius={16} p={3}>
                  <CardHeader>
                     <Heading fontFamily='montserrat' size='md' fontWeight="semibold">Apply Now</Heading>
                  </CardHeader>

                  <CardBody>
                     {campaignForm && campaignForm.default_fields.map((field, index) => ( // Not good practice to use index as key, but response didn't have unique id
                        <FormControl key={index} isInvalid={!!errors[field]} mb={8}>
                           <FormLabel htmlFor={field} textTransform='capitalize'>{field}</FormLabel>
                           <Input
                              id={field}
                              placeholder={`Your ${field}`}
                              {...register(field, {
                                 required: `The ${field} field is required`,
                                 minLength: { value: 4, message: `Minimum length should be 4` },
                              })}
                              sx={{
                                 "&::placeholder": {
                                    fontWeight: "normal", // font weight normal for the placeholder
                                 },
                                 "&:not(:placeholder-shown)": {
                                    fontWeight: "semibold", // font weight semibold for text value in the input value as per design
                                 },
                              }}
                              py={6}
                           />
                           <FormErrorMessage>
                              {errors[field]?.message?.toString() || ''}
                           </FormErrorMessage>
                        </FormControl>
                     ))}

                     <Text fontFamily='montserrat' fontWeight='medium' fontSize='lh' mb={3}>Your Socials</Text>
                     {campaignForm && campaignForm.socials.map((social, index) => (
                        <FormControl key={index} isInvalid={!!errors[social]} mb={8}>
                           <HStack>
                              <Image mr={2} src={social === 'instagram' ? InstagramLogo.src : social === 'tiktok' ? TiktokLogo.src : social === 'twitter' ? TwitterLogo.src : YoutubeLogo.src} alt={social} />
                              <InputGroup alignItems='center'>
                                 <InputLeftElement
                                    className="InputLeft"
                                    pointerEvents="none"
                                 >
                                    <Text fontWeight='bold' fontSize='xl'>@</Text>
                                 </InputLeftElement>
                                 <Input
                                    id={social}
                                    // Capitalize first letter of social
                                    placeholder={
                                       `${social.charAt(0).toUpperCase()
                                       + social.slice(1)} username`
                                    }
                                    {...register(social, {
                                       required: `The ${social} field is required`,
                                       minLength: { value: 4, message: `Minimum length should be 4` },
                                    })}
                                    sx={{
                                       "&::placeholder": {
                                          fontWeight: "normal", // font weight normal for the placeholder
                                       },
                                       "&:not(:placeholder-shown)": {
                                          fontWeight: "semibold", // font weight semibold for text value in the input value as per design
                                       },
                                    }}
                                    py={6}
                                 />
                              </InputGroup>
                           </HStack>
                           <FormErrorMessage>
                              {errors[social]?.message?.toString() || ''}
                           </FormErrorMessage>
                        </FormControl>
                     ))}

                     {campaignForm && campaignForm.custom_fields.map((customField, index) => (
                        <FormControl key={index} isInvalid={!!errors[customField.name]} mb={8}>
                           <FormLabel htmlFor={customField.name} textTransform='capitalize'>{customField.question}</FormLabel>
                           {customField.type === 'longtext' ? (
                              <Textarea
                                 id={customField.name}
                                 placeholder="Your Answer"
                                 {...register(customField.name, {
                                    required: customField.is_required ? 'Answer to the question above is required' : false,
                                 })}
                                 rows={1}
                                 sx={{
                                    "&::placeholder": {
                                       fontWeight: "normal", // font weight normal for the placeholder
                                    },
                                    "&:not(:placeholder-shown)": {
                                       fontWeight: "semibold", // font weight semibold for text value in the input value as per design
                                    },
                                 }}
                              />
                           ) : customField.type === 'boolean' ? (
                              <Checkbox
                                 id={customField.name} // Warning!If the required field is true, you can only submit form after checking the box
                                 {...register(customField.name, {
                                    required: customField.is_required ? 'Answer to the question above is required' : false,
                                 })}
                                 size='lg'
                              >
                                 <Text textColor='gray.500' fontSize='md' ml={2}>Your Answer</Text>
                              </Checkbox>
                           ) : (
                              <Input
                                 id={customField.name}
                                 placeholder="Your Answer"
                                 {...register(customField.name, {
                                    required: customField.is_required ? 'Answer to the question above is required' : false,
                                 })}
                                 sx={{
                                    "&::placeholder": {
                                       fontWeight: "normal", // font weight normal for the placeholder
                                    },
                                    "&:not(:placeholder-shown)": {
                                       fontWeight: "semibold", // font weight semibold for text value in the input value as per design
                                    },
                                 }}
                              />
                           )}
                           <FormErrorMessage>
                              {errors[customField.name]?.message?.toString() || ''}
                           </FormErrorMessage>
                        </FormControl>
                     ))}
                  </CardBody>
               </Card>

               <Box as='div' mt={8} textAlign='right'>
                  <Button py={8} px={12} borderRadius='xl' colorScheme='teal' type='submit' bg='purple.500' _hover={{ bg: 'purple.600' }}>
                     Submit
                  </Button>
               </Box>
            </form>

         </Stack>
      </Box >
   )
}

export default InfluencerForm