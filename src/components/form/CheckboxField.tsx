import { Checkbox, CheckboxProps, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CustomFormControl } from '@/components';

type CheckboxFieldProps = CheckboxProps & {
	children?: string;
	isChecked: boolean;
	isRequired?: boolean;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Updated type for handleChange
};

const CheckboxField: FC<CheckboxFieldProps> = ({
	children,
	isChecked,
	isRequired,
	handleChange,
	...props
}) => {
	return (
		<CustomFormControl isRequired={isRequired}>
			<Checkbox
				isChecked={isChecked}
				onChange={handleChange}
				alignItems='flex-start'
				spacing='18px'
				{...props}
				iconColor='white' // Checkmark color inside checkbox
				borderColor='#A78C61' // Border color for the checkbox
				sx={{
					'.chakra-checkbox__control': {
						borderColor: '#A78C61', // Initial border color
					},
					'.chakra-checkbox__control[data-checked]': {
						bgColor: '#A78C61', // Fill color when checked
						borderColor: '#A78C61', // Border color when checked
						color: 'white', // Checkmark color
					},
				}}
				size='md'
			>
				{children}
			</Checkbox>
		</CustomFormControl>
	);
};

export default CheckboxField;
