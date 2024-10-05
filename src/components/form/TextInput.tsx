import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FC } from "react";

type TextInputProps = {
  label?: string;
  type: string;
  errorMsg?: string;
  value: string;
  placeholder?: string;
  handleChange: (key: string, value: string) => void;
  isRequired?: boolean;
  submitted?: boolean;
  fieldKey: string;
};

const TextInput: FC<TextInputProps> = ({
  label,
  type,
  errorMsg,
  value,
  placeholder,
  handleChange,
  isRequired = false,
  submitted = false,
  fieldKey,
}) => {
  // Check for errors if the field is required and if the form was submitted
  const isError = isRequired && submitted && value === "";

  return (
    <FormControl mb="12px" isInvalid={isError}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e: any) => handleChange(fieldKey, e.target.value)}
        border="1px solid #ababab"
      />
      {isError && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
    </FormControl>
  );
};

export default TextInput;
