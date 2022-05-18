import React from "react";
import { Link as ReLink } from "react-router-dom";
import {
  Link,
  Box,
  Flex,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"}>
          <Box pb={4}>
            <HStack spacing={4}>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                as={ReLink}
                to={"/about"}
              >
                About
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                as={ReLink}
                to={"/xp"}
              >
                XP Calculator
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                as={ReLink}
                to={"/perks"}
              >
                Perk Planner
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
