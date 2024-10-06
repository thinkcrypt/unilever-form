import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { FC } from 'react';

type OtpFieldProps = {
	label?: string;
	type: string;
	errorMsg?: string;
	value: any;
	placeholder?: string;
	handleChange: (key: string, value: string) => void;
	isRequired?: boolean;
	submitted?: boolean;
	fieldKey: string;
};

const OtpField: FC<OtpFieldProps> = ({
	label,
	type,
	value,
	placeholder,
	handleChange,
	isRequired = false,
	fieldKey,
	...props
}) => {
	return (
		<FormControl
			w='full'
			h='auto'
			border='1px solid #ddd'
			p='24px'
			mb='12px'
			// isInvalid={isError}
			borderRadius='8px'
			fontFamily='inter'
			isRequired={isRequired}
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
				_placeholder={{ fontSize: '.85rem' }}
			/>
			{/* {isError && <FormErrorMessage>{errorMsg}</FormErrorMessage>} */}
		</FormControl>
	);
};

export default OtpField;
