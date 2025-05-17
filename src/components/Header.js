"use client";

import Logo from "./Logo";
import Link from "next/link";
import { Box, Link as ChakraLink, Flex, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, useColorModeValue, Container } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import ToggleDarkMode from "./ToggleDarkMode";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  return (
    <Flex
      align="center"
      boxShadow="sm" //
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={bg}
      color={color} //
      w="100%"
    >
      <Container
        maxW="container.lg"
        flex="1"
        p={0} //
      >
        {/* Nút mở sidebar trên mobile */}
        <Box display={{ base: "block", md: "none" }} mr={2}>
          <IconButton
            icon={<FiMenu />} //
            aria-label="Mở menu sidebar"
            variant="ghost"
            colorScheme="teal"
            onClick={onOpen}
            size={"lg"}
          />
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent maxW="220px">
              <DrawerBody p={0}>
                <Sidebar isMobile />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        <Flex align="center" p={4} w={"100%"}>
          <ChakraLink as={Link} href="/" _hover={{ textDecoration: "none" }}>
            <Logo />
          </ChakraLink>
          <Box ml="auto">
            <ToggleDarkMode />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
