'use client';
import {
	CheckboxField,
	FormContainer,
	FormLogo,
	OtpField,
	RadioInput,
	TextInput,
	Timer,
} from '@/components';
import { useAppDispatch } from '@/components/library/useReduxHooks';
import { formFields, genderField } from '@/lib/data';
import { useGetotpMutation } from '@/store/services/getOtp';
import { login } from '@/store/slices/authSlice';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Home = () => {
	const [trigger, result] = useGetotpMutation();
	const dispatch = useAppDispatch();

	const [formData, setFormData] = useState({
		name: '',
		contact: '',
		gender: '',
		age: null,
		parlorCode: '',
		brand: '',
		checkbox: false,
		otp: '',
	});

	// For show and hide code number input field
	const [codeField, setCodeField] = useState<boolean>(false);

	// Handle Input Change Event
	const handleInputChange = (
		key: keyof typeof formData,
		value: string | boolean
	) => {
		setFormData(prev => ({
			...prev,
			[key]: value,
		}));
	};

	// Get Code Button Logic
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log('form datafdsg:', formData);

		trigger({ phone: formData.contact, brand: formData.brand });

		// Check if all required fields are filled
		if (
			!formData.name ||
			!formData.contact ||
			!formData.gender ||
			!formData.parlorCode ||
			!formData.brand ||
			!formData.checkbox
		) {
			return;
		}

		setCodeField(true);
	};
	// api result
	const { isSuccess, isError, isLoading, error } = result;
	console.log('datta:', result?.data);
	console.log('datta res:', result);
	console.log('isSuccess:', isSuccess);
	// is register is successful
	useEffect(() => {
		if (result.isSuccess) {
			dispatch(login(result.data));
		}
	}, [dispatch, result.isSuccess, result.data]);
	

	return (
		<Box py='80px' w='full' h='full'>
			<FormLogo />
			<form onSubmit={handleSubmit}>
				<FormContainer>
					{formFields?.map((field, i) => (
						<TextInput
							key={i}
							label={field.label}
							placeholder={field.placeholder}
							value={formData[field.fieldKey as keyof typeof formData] || ''} // Access value dynamically with the correct type
							errorMsg={field.errorMsg}
							type={field.type}
							handleChange={(key, value) =>
								handleInputChange(key as keyof typeof formData, value)
							} // Pass key and value to handleInputChange
							isRequired={true}
							fieldKey={field.fieldKey}
							borderTop={i === 0 ? '8px solid #A78C61' : undefined}
						/>
					))}
					{/* Gender Field */}
					<RadioInput
						label='Gender'
						isRequired={genderField.isRequired}
						value={formData.gender}
						errorMsg='Gender is required'
						handleChange={(key, value) => handleInputChange('gender', value)}
					/>
					Checkbox Field
					{/* <OtpField
						value={formData.otp}
						fieldKey={formData.otp}
						handleChange={(key: any, value: any) =>
							handleInputChange('otp', value)
						}
						type='number'
						label='Enter Your OTP'
						placeholder='123456'
					/> */}
					{/* checkbox field */}
					{/* <CheckboxField
						handleChange={() =>
							handleInputChange('checkbox', !formData.checkbox)
						}
						isChecked={formData.checkbox}
					/> */}
					<Flex justifyContent='flex-end' mb='12px' w='full'>
						<Button
							mr='4'
							textTransform='uppercase'
							colorScheme='blue'
							type='submit'
						>
							Get Otp
						</Button>
					</Flex>
					<Timer />
					{/* {codeNumber?.length === 6 && (
					<Flex>
						<Button
							onClick={handleVerify}
							textTransform='uppercase'
							colorScheme='green'
							width='150px'
						>
							Verify
						</Button>
					</Flex>
				)} */}
				</FormContainer>
			</form>
		</Box>
	);
};

export default Home;
