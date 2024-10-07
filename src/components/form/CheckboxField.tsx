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
				<Text fontSize='0.9rem' mt='-2px'>
					{children ||
						'আমি সম্মতি দিচ্ছি যে আমার বয়স ১৮ বছরের উর্দ্ধে। আমি ইউনিলিভার বাংলাদেশ লিমিটেড এবং তার সাথে সম্পর্কিত তৃতীয় পক্ষকে আমার ব্যক্তিগত তথ্য ব্যবহার, সংরক্ষণ, প্রক্রিয়াকরণ এবং আমার সাথে যোগাযোগ করার অনুমতি দিচ্ছি।'}
				</Text>
			</Checkbox>
		</CustomFormControl>
	);
};

export default CheckboxField;
