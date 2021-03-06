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
import { FcMenu, FcHome, FcAbout, FcKey } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
// Challenge: To create seperate Menus for Mobile and desktop devices

const Navbar = () => (
  <Flex
    p="2"
    borderBottom="1px"
    borderColor="gray.100"
    position="fixed"
    top="0"
    left="0"
    right="0"
    bg="white"
    zIndex="999"
    maxWidth="1200px"
    marginInline="auto"
  >
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
          variant="outline"
          color="red.400"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FcKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);
export default Navbar;
