import { Stack, StackProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type FormContainerProps = StackProps & {
  children: ReactNode;
};
const FormContainer: FC<FormContainerProps> = ({ children, ...props }) => {
  return (
    <Stack
      w="620px"
      h="100%"
      justifyContent="center"
      alignItems="center"
      p="24px"
      mx="auto"
      borderRadius="8px"
      border="1px solid #ababab"
      {...props}
    >
      {children}
    </Stack>
  );
};
export default FormContainer;
