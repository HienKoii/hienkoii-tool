"use client";
import { Box, Container, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container maxW="container.lg" flex="1" py={2}>
      <Box p={4} boxShadow="sm">
        <Text fontSize="sm" textAlign={"center"}>
          © {new Date().getFullYear()} HienKoii. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
}
