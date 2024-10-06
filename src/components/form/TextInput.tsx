import {
	FormControl,
	FormControlProps,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import { FC } from 'react';

type TextInputProps = FormControlProps & {
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
	...props
}) => {
	// Check for errors if the field is required and if the form was submitted
	const isError = isRequired && submitted && value === '';

	return (
		<FormControl
			border='1px solid #ddd'
			p='24px'
			mb='12px'
			isInvalid={isError}
			borderRadius='8px'
			fontFamily='inter'
			{...props}
		>
			{label && (
				<FormLabel fontFamily='inter' fontSize='.9rem'>
					{label}
				</FormLabel>
			)}
			<Input
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={e => handleChange(fieldKey, e.target.value)}
				fontFamily='inter'
				variant='flushed'
				_placeholder={{ fontSize: '.85rem' }}
			/>
			{isError && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
		</FormControl>
	);
};

export default TextInput;
