import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import React from "react";

function Navbar() {
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Realtor
        </Link>
      </Box>

      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outlined"
            color="red.400"
          ></MenuButton>
          <MenuList href="/">
            <Link href="/">
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search">
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale">
              <MenuItem icon={<FcAbout />}>Buy property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent">
              <MenuItem icon={<FiKey />}>Rent property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

export default Navbar;
