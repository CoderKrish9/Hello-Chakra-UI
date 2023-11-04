import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Center,
  Square,
  Circle,
  Box,
  HStack,
  Radio,
  RadioGroup,
  VStack,
  StackDivider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const Test = () => {
  return (
    <div>
      <VStack
        spacing={32}
        divider={<StackDivider borderColor="" />}
        align="center"
      >
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend">Favorite Naruto Character</FormLabel>
          <RadioGroup defaultValue="Itachi">
            <HStack spacing="24px">
              <Radio value="Sasuke">Sasuke</Radio>
              <Radio value="Nagato">Nagato</Radio>
              <Radio value="Itachi">Itachi</Radio>
              <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>Select only if you're a fan.</FormHelperText>
        </FormControl>

        <Button colorScheme="blue">Click Me 😁 </Button>
      </VStack>
    </div>
  );
};

export default Test;
