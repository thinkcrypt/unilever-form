import { breakpoints } from "@/lib/constants";
import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors.theme";

const theme = extendTheme({
  colors: colors,
  breakpoints: breakpoints,
});

export default theme;
