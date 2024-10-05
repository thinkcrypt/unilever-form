import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box w="full" h="100vh">
      <Flex
        justifyContent="center"
        alignContent="center"
        flexDirection="column"
        w="full"
        h="100%"
      >
        <Text
          fontSize="100px"
          fontWeight="600"
          w="full"
          h="full"
          textAlign="center"
          fontFamily="marcellus"
        >
          Hello BD
        </Text>
      </Flex>
    </Box>
  );
}
