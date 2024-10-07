import {
	FormErrorMessage,
	FormLabel,
	Radio,
	RadioGroup,
	Stack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { CustomFormControl } from '@/components';

type RadioInputProps = {
	label?: string;
	errorMsg?: string;
	value: string;
	handleChange: (key: string, value: string) => void;
	isRequired?: boolean;
	submitted?: boolean;
	disabled?: boolean;
};

const RadioInput: FC<RadioInputProps> = ({
	label,
	errorMsg,
	value,
	handleChange,
	isRequired = false,
	submitted = false,
	disabled,
}) => {
	const isError = isRequired && submitted && value === '';
	return (
		<CustomFormControl isRequired={true}>
			<FormLabel>{label}</FormLabel>
			<RadioGroup
				value={value}
				onChange={genderValue => handleChange('gender', genderValue)}
			>
				<Stack direction='row'>
					<Radio isDisabled={disabled} value='male'>
						Male
					</Radio>
					<Radio isDisabled={disabled} value='female'>
						Female
					</Radio>
				</Stack>
			</RadioGroup>
			{isError && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
		</CustomFormControl>
	);
};

export default RadioInput;
