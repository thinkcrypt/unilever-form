import { FormControl, FormControlProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type CustomFormControlProps = FormControlProps & {
	children: ReactNode;
	isRequired?: boolean;
};

const CustomFormControl: FC<CustomFormControlProps> = ({
	children,
	isRequired,
	...props
}) => {
	return (
		<FormControl
			w='full'
			h='auto'
			p='24px'
			mb='12px'
			borderRadius='8px'
			fontFamily='inter'
			border='1px solid #ddd'
			isRequired={isRequired}
			bg='#ffffff'
			{...props}
		>
			{children}
		</FormControl>
	);
};

export default CustomFormControl;
