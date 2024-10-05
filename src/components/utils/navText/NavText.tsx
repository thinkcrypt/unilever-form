import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

type NavTextProps = BoxProps & {
  children: string;
};
const NavText: FC<NavTextProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default NavText;
