import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/footerLogo.jpg"
import {TfiWorld} from "react-icons/tfi";
import {FaTwitter} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {BsPinterest} from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
    <Flex
      gap="5rem"
      my="5rem"
      p='4rem'
      w="100%"
      borderTop={"1px solid #D9D0CD"}
      borderBottom={"1px solid #D9D0CD"}
    >

      <Box w="20%">
      <Image ml='-3px' mb='1rem' h="40px" src={logo} alt="Logo" />
        <Text>
          Dribbble is the world’s leading community for creatives to share,
          grow, and get hired.
        </Text>
        <Flex my='2rem' gap='1.5rem'>
            <Link to={"#"}><TfiWorld/></Link>
            <Link to={"#"}><FaTwitter/></Link>
            <Link to={"#"}><FaFacebookSquare/></Link>
            <Link to={"#"}><FiInstagram/></Link>
            <Link to={"#"}><BsPinterest/></Link>
        </Flex>
      </Box>

      <Box lineHeight={'2.5rem'} fontSize='17px'>
        <Text fontWeight={700}>
          For designers
        </Text>
        <Text >Go Pro!</Text>
        <Text >Explore design work</Text>
        <Text >Design blog</Text>
        <Text >Overtime podcast</Text>
        <Text >Playoffs</Text>
        <Text >Weekly Warm-UP</Text>
        <Text >Refer a Friend</Text>
        <Text >Code of conduct</Text>
      </Box>

      <Box lineHeight={'2.5rem'} fontSize='17px'>
        <Text fontWeight={700} >
          Hire designers
        </Text>
        <Text >Post a job opening</Text>
        <Text >Post a freelance project</Text>
        <Text >Search for designers</Text>
        <Text fontWeight={700}>Brands</Text>
        <Text >Advertise with us</Text>
      </Box>

      <Box lineHeight={'2.5rem'} fontSize='17px'>
        <Text fontWeight={700} >
          Company
        </Text>
        <Text >About</Text>
        <Text >Careers</Text>
        <Text >Support</Text>
        <Text >Media kit</Text>
        <Text >Testimonials</Text>
        <Text >API</Text>
        <Text >Privacy policy</Text>
        <Text >Cookie policy</Text>
      </Box>

      <Box lineHeight={'2.5rem'} fontSize='17px'>
        <Text fontWeight={700}>
          Directories
        </Text>
        <Text >Design jobs</Text>
        <Text >Designers for hire</Text>
        <Text >Freelance designers for hire</Text>
        <Text >Tags</Text>
        <Text >Places</Text>
        <Text >Design assets</Text>
        <Text >Dribble Marketplace</Text>
        <Text >Creative Market</Text>
        <Text >Fontspring</Text>
        <Text >Font Squirrel</Text>
      </Box>

      <Box lineHeight={'2.5rem'} fontSize='17px'>
        <Text fontWeight={700}>
          Design Resources
        </Text>
        <Text>Freelancing</Text>
        <Text>Design Hiring</Text>
        <Text >Design Portfolio</Text>
        <Text >Design Education</Text>
        <Text >Creative Process</Text>
        <Text >Design Industry Trends</Text>
      </Box>
    </Flex>
    <Flex  w='90%' m='auto'  mb='3rem' justifyContent={'space-between'}>
        <Box>© 2023 Dribbble. All rights reserved.</Box>
        <Box display={"flex"} gap={"10px"}>20,633,835 shots dribbbled <Image w={"10%"} src={"https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg"} alt={"logo"} /> </Box>
    </Flex>
    </div>
  );
};

