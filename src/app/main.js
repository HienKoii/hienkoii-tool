"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Box, Container, Flex } from "@chakra-ui/react";

export default function MainLayout({ children }) {
  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Header />
      <Box as={"main"} minH={"100vh"} mt={20}>
        <Container
          maxW="container.lg"
          flex="1" //
          py={4}
          pt={0}
        >
          <Flex gap={4}>
            <Sidebar />
            <Box flex={1}>{children}</Box>
          </Flex>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
