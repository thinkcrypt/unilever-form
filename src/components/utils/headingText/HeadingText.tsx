import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

type HeadingTextProps = TextProps & {
  children: string;
};
const HeadingText: FC<HeadingTextProps> = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="marcellus"
      fontSize="2.4rem"
      fontWeight="600"
      textTransform="uppercase"
      {...props}
    >
      {children}
    </Text>
  );
};

export default HeadingText;
