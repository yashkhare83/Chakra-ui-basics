import React from 'react';
import { background, Box, Flex, Heading, Text, Button, ButtonGroup } from "@chakra-ui/react";

export default function () {
    return (
        <>
         {/* Styling Buttons  */}
            <box>
                <Heading as='h2' size='xl' mb={8} fontWeight='bold' textAlign='center' mt={8} color='secondary.100'>
                    Styling Buttons
                </Heading>
                <Box display='flex' w='100%' minH='100%' mx='auto' flexWrap='wrap' justifyContent='center'  >
                <Button colorScheme='red' px={24} py={8} size='lg' variant='solid'>Button Solid</Button>
                <Button colorScheme='green' px={24} py={8} size='lg' variant='outline'>Button Outline</Button>
                <Button colorScheme='blue' px={24} py={8} size='lg' variant='ghost'>Button Ghost</Button>
                <Button colorScheme='yellow' px={24} py={8} size='lg' variant='link'>Button Link</Button>
                </Box>
            </box>
        </>
    )
}
