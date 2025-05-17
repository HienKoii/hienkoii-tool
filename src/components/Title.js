import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function Title({ text, size = "lg" }) {
  return (
    <Box>
      <Heading size={size}>{text}</Heading>
    </Box>
  );
}
