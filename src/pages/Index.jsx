import { Container, Text, VStack, Box, Heading, Button, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Our Store</Heading>
        <Text fontSize="lg" textAlign="center">Discover our exclusive collection of products. Shop now and enjoy great deals!</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/storefront.jpg" alt="Storefront" />
        </Box>
        <Button colorScheme="teal" size="lg" mt={6}>Start Shopping</Button>
      </VStack>
    </Container>
  );
};

export default Index;