'use client';
import {
	CheckboxField,
	FormButton,
	FormContainer,
	OtpField,
	RadioInput,
	TextInput,
} from '@/components';
import { useAppDispatch } from '@/components/library/useReduxHooks';
import { formFields, genderField } from '@/lib/data';
import { useGetotpMutation } from '@/store/services/getOtp';
import { login } from '@/store/slices/authSlice';
import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Home = () => {
	const [trigger, result] = useGetotpMutation();
	const dispatch = useAppDispatch();

	const [formData, setFormData] = useState({
		name: '',
		contact: '',
		gender: '',
		age: null,
		brand: '',
		checkbox: false,
		otp: '',
	});

	// For show and hide code number input field
	const [codeField, setCodeField] = useState<boolean>(false);
	const [timeExpired, setTimeExpired] = useState(false);

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

	const handleTimeExpired = () => {
		setTimeExpired(true);
	};
	const handleResend = () => {};

	// Get Code Button Logic
	const handleSubmit = (e: any) => {
		e.preventDefault();
		setCodeField(true);
	};
	// api result
	const { isSuccess, isError, isLoading, error } = result;
	// is register is successful
	useEffect(() => {
		if (result.isSuccess) {
			dispatch(login(result.data));
		}
	}, [dispatch, result.isSuccess, result.data]);

	return (
		<Box py='80px' w='full' h='full'>
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

					{/* Checkbox Field */}
					<CheckboxField
						handleChange={() =>
							handleInputChange('checkbox', !formData.checkbox)
						}
						isChecked={formData.checkbox}
						isRequired={true}
					/>

					{!codeField && (
						<Flex justifyContent='flex-end' mb='12px' w='full'>
							<FormButton>Get OTP</FormButton>
						</Flex>
					)}

					{codeField && (
						<OtpField
							value={formData.otp}
							fieldKey={formData.otp}
							handleChange={(key: string, value: string) =>
								handleInputChange('otp', value)
							}
							type='number'
							label='Enter OTP'
							placeholder='123456'
							handleTimeExpired={handleTimeExpired}
							timeExpired={timeExpired}
							handleResend={handleResend}
						/>
					)}

					{codeField && (
						<Flex justifyContent='flex-end' w='full'>
							<FormButton disabled={formData?.otp == ''}>Submit</FormButton>
						</Flex>
					)}
				</FormContainer>
			</form>
		</Box>
	);
};

export default Home;
