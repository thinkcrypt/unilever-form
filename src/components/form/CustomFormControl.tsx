import { FormControl, FormControlProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type CustomFormControlProps = FormControlProps & {
	children: ReactNode;
	isError?: boolean;
};

const CustomFormControl: FC<CustomFormControlProps> = ({
	children,
	isError,
	...props
}) => {
	return (
		<FormControl
			p='24px'
			mb='12px'
			borderRadius='8px'
			fontFamily='inter'
			border='1px solid #ddd'
			isInvalid={isError}
			{...props}
		>
			{children}
		</FormControl>
	);
};

export default CustomFormControl;
