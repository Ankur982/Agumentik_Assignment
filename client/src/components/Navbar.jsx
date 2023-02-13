import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import React from "react";
import logo from "../assets/logo.jpg"

export const Navbar = () => {
  return (
    <Box>
      <Box bg={"#0d0c22"} color={"#fff"}>
        <Text textAlign={"center"} fontSize={"13px"} padding={"15px 50px"} lineHeight={"1.3"}>
          📚 Want to check out Dribbble’s 16 week Product Design course before
          enrolling? <Text as="span" color={"#ea4c89"}>Sign up to our free info session</Text> happening Feb 16! <Text as="span"> <SmallCloseIcon /> </Text>
        </Text>
        
      </Box>

      <Box>
      <Flex
        p="1.5rem 3rem 1.5rem 10px"
        borderBottom="1px solid #E2E8F0"
        justifyContent="space-between"
      >
        <Flex gap="1.5rem" alignItems='center'>
        <Image h="40px" src={logo} />
        <Text fontWeight={500} color='gray.500'>Inspiration</Text>
        <Text fontWeight={500} color='gray.500'>Find Work</Text>
        <Text fontWeight={500} color='gray.500'>Learn Design</Text>
        <Text fontWeight={500} color='gray.500'>Go Pro</Text>
        <Text fontWeight={500} color='gray.500'>Hire Designers</Text>

        </Flex>
        <Flex color={'gray.500'} gap='12px' alignItems={'center'}>
          <SearchIcon boxSize={5}/>
          <Button fontSize={'lg'} bg='none'>Sign in</Button>
          <Button borderRadius={'10px'} fontSize={"lg"} color={'white'} bg={'#ea4c89'} pb={'2px'}>Sign up</Button>
        </Flex>
      </Flex>
      </Box>
    </Box>
  );
};
