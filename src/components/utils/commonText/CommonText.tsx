import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

type HeadingTextProps = TextProps & {
  children: string;
};
const CommonText: FC<HeadingTextProps> = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="inter"
      fontSize="1rem"
      fontWeight="600"
      textTransform="uppercase"
      {...props}
    >
      {children}
    </Text>
  );
};

export default CommonText;
