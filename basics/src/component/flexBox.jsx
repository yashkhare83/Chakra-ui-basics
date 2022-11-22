import React from 'react';
import { background, Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function () {
    return (
        <>
            {/* Heading styles  */}
            <Heading as='h1' size='2xl' textAlign='center' fontWeight='bold' mt={8} mb={8} color='primary.100'>
                Introducing Chakra-ui Basics
            </Heading>
            {/* box and flexBox with wrap  */}
            <box>
                <Heading as='h2' size='xl' mb={8} fontWeight='bold' textAlign='center' mt={8} colorScheme='primary.100'>
                    flexBox usage
                </Heading>
                <Box maxW={800} mx='auto' mb={8} display="flex" alignItems="center" justifyContent="space-between" flexWrap='wrap'>
                    <Box w={{ base: '100%', sm: '50%', md: '25%' }} h={200} bg='green'></Box>
                    <Box w={{ base: '100%', sm: '50%', md: '25%' }} h={200} bg='red'></Box>
                    <Box w={{ base: '100%', sm: '50%', md: '25%' }} h={200} bg='yellow'></Box>
                </Box>
            </box>
            {/* styling Text components  */}
            <box>
                <Text fontSize='lg' textAlign='center' color='primary.100'>Checkout this Text by Inspect element</Text>
            </box>
          
        </>
    )
}
