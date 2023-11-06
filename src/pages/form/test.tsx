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
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  InputLeftElement,
} from "@chakra-ui/react";

const Test = () => {
  return (
    <div>
      <Center>
        {" "}
        <Stack
          spacing={8}
          divider={<StackDivider borderColor="black" />}
          align="center"
        >
          {" "}
          <FormControl>
            <FormLabel marginBlockStart={10}>Email address</FormLabel>
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
                <Radio value="Sage of the six Paths">
                  Sage of the six Paths
                </Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>Select only if you're a fan.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Birth Date: </FormLabel>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
            />
          </FormControl>
          <FormControl>
            <FormLabel>
              <Stack spacing={3}>
                <Input placeholder="default placeholder" />
                <Input
                  placeholder="custom placeholder"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <Input
                  color="teal"
                  placeholder="custom placeholder"
                  _placeholder={{ color: "inherit" }}
                />
                <Input
                  color="tomato"
                  placeholder="custom placeholder"
                  _placeholder={{ opacity: 0.7, color: "inherit" }}
                />
              </Stack>
            </FormLabel>
          </FormControl>
          <FormControl>
            <Stack spacing={3}>
              <Input variant="outline" placeholder="Outline" />
              <Input variant="filled" placeholder="Filled" />
              <Input variant="flushed" placeholder="Flushed" />
              <Input variant="unstyled" placeholder="Unstyled" />
            </Stack>
          </FormControl>
          <FormControl>
            <Stack spacing={5}>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input type="tel" placeholder="mobile number" />
              </InputGroup>

              {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
              <InputGroup size="sm">
                <InputLeftAddon children="https://" />
                <Input placeholder="mysite" />
                <InputRightAddon children=".com" />
              </InputGroup>
              <InputGroup>
                <FormLabel>Vaishnava's:</FormLabel>
                <Input type="text" placeholder="Initiated name" />
                <InputRightAddon children="Das" />
              </InputGroup>
              <InputGroup>
                <FormLabel>Vaishnavi's:</FormLabel>
                <Input type="text" placeholder="Initiated name" />
                <InputRightAddon children="Devi Dasi" />
              </InputGroup>
            </Stack>
          </FormControl>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.300" />
            </InputLeftElement>
            <Input pr="4.5rem" type={"password"} placeholder="Enter password" />
          </InputGroup>
          <FormControl></FormControl>
          <Button colorScheme="blue" marginBlockEnd={24}>
            Click Me 😁{" "}
          </Button>
        </Stack>
      </Center>
    </div>
  );
};

export default Test;
