/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import Timer from './Timer';

type OtpFieldProps = {
	label?: string;
	type: string;
	errorMsg?: string;
	value: any;
	placeholder?: string;
	handleChange: (key: string, value: string) => void;
	handleResend: () => void;
	isRequired?: boolean;
	submitted?: boolean;
	fieldKey: string;
	handleTimeExpired: () => void;
	timeExpired: boolean;
};

const OtpField: FC<OtpFieldProps> = ({
	label,
	type,
	value,
	placeholder,
	handleChange,
	handleResend,
	handleTimeExpired,
	isRequired = false,
	fieldKey,
	timeExpired,
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
				variant='flushed'
				_placeholder={{ fontSize: '.85rem' }}
			/>
			{/* {isError && <FormErrorMessage>{errorMsg}</FormErrorMessage>} */}
			<Flex mt='10px' textAlign='left' alignItems='center'>
				<Timer onTimeExpired={handleTimeExpired} />
				{timeExpired && (
					<Text
						onClick={handleResend}
						cursor='pointer'
						ml='20px'
						color='green'
						fontSize='.85rem'
					>
						Resend
					</Text>
				)}
			</Flex>
		</FormControl>
	);
};

export default OtpField;
