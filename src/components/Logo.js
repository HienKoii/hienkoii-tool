import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export default function Logo() {
  // Tự động đổi màu theo theme
  const hienColor = useColorModeValue("teal.600", "white");
  const hienShadow = useColorModeValue("0 1px 8px #bee3f8", "0 1px 8px #222");
  const koiiColor = useColorModeValue("blue.500", "blue.200");
  const koiiShadow = useColorModeValue("0 1px 8px #bee3f8", "0 1px 8px #222");

  return (
    <Flex
      align="center"
      fontWeight="extrabold" //
      fontSize={{ base: "lg", md: "xl" }}
      letterSpacing="wide"
    >
      <Text color={hienColor} textShadow={hienShadow}>
        Hien
      </Text>
      <Text color={koiiColor} ml={1} textShadow={koiiShadow}>
        Koii
      </Text>
    </Flex>
  );
}
