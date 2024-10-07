/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
	CheckboxField,
	FormButton,
	FormContainer,
	FormLogo,
	OtpField,
	RadioInput,
	TextInput,
} from '@/components';
import { checkboxText, formFields, genderField } from '@/lib/data';
import {
	useGetotpMutation,
	useSubmitFormMutation,
} from '@/store/services/getOtp';
import { Alert, AlertIcon, Box, Flex, Text } from '@chakra-ui/react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
type ErrorResponse = {
	message?: string; // Optional in case message isn't always present
	[key: string]: any; // To allow other fields you might not account for
};
const Home = () => {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [fromErrorMessage, setFormErrorMessage] = useState<string | null>(null);
	const [trigger, result] = useGetotpMutation();
	const [submitFormTrigger, formResult] = useSubmitFormMutation();

	useEffect(() => {
		// Error handling logic
		if (result?.error) {
			if ('status' in result.error) {
				const fetchBaseQueryError = result.error as FetchBaseQueryError;
				// Check if data exists and has a 'message' property
				const errorData = fetchBaseQueryError?.data as ErrorResponse; // Cast data to ErrorResponse
				if (errorData?.message) {
					setErrorMessage(errorData.message);
				}
			}
		}
	}, [result?.error]);
	// formData error
	useEffect(() => {
		// Error handling logic
		if (formResult?.error) {
			if ('status' in formResult.error) {
				const fetchBaseQueryError = formResult?.error as FetchBaseQueryError;
				// Check if data exists and has a 'message' property
				const errorData = fetchBaseQueryError?.data as ErrorResponse; // Cast data to ErrorResponse
				if (errorData?.message) {
					setFormErrorMessage(errorData?.message);
				}
			}
		}
	}, [formResult?.error]);

	const [formData, setFormData] = useState({
		name: '',
		phone: '',
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
		if (key === 'phone' || key === 'otp') {
			setErrorMessage(null);
			setFormErrorMessage(null);
		}
		setFormData(prev => ({
			...prev,
			[key]: value,
		}));
	};

	const handleTimeExpired = () => {
		setTimeExpired(true);
	};
	const handleResend = () => {
		trigger({ brand: formData?.brand.toLowerCase(), phone: formData?.phone });
	};

	// Get Code Button Logic
	const handleSubmit = (e: any) => {
		e.preventDefault();
		setErrorMessage(null);
		setFormErrorMessage(null);
		trigger({ brand: 'petromax', phone: formData?.phone });
		// console.log('logged:', { brand: formData.brand, phone: formData.contact });
	};

	// form all data
	const handleSubmitAllData = () => {
		setErrorMessage(null);
		setFormErrorMessage(null);

		submitFormTrigger({
			brand: 'petromax',
			formData: {
				name: formData?.name,
				phone: formData?.phone,
				gender: formData?.gender,
				age: formData?.age,
				otp: formData?.otp,
			},
		});
	};

	const router = useRouter();
	useEffect(() => {
		if (formResult?.isSuccess && !formResult?.isLoading) {
			router.push('/petromax/success');
			router.push('/petromax/success');
		}
	}, [formResult?.isSuccess, formResult?.isLoading, router]);

	// is register is successful
	useEffect(() => {
		if (result?.isSuccess && !result?.isLoading) {
			setCodeField(true);
		}
	}, [result?.isSuccess, result?.isLoading]);

	return (
		<Box py='80px' w='full' h='full'>
			<FormLogo imgSrc='/logo/petromax.png' />
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
					>
						{checkboxText?.petromax}
					</CheckboxField>

					{/* {!codeField && (
						<Flex justifyContent='flex-end' mb='12px' w='full'>
							<FormButton type='submit' isLoading={result?.isLoading}>
								Get OTP
							</FormButton>
						</Flex>
					)} */}

					{!codeField && (
						<Flex
							flexDir='column'
							alignItems='flex-end'
							gap='1rem'
							mb='12px'
							w='full'
						>
							{errorMessage && (
								<Alert status='error'>
									<AlertIcon />
									{errorMessage}
								</Alert>
							)}
							{fromErrorMessage && (
								<Alert status='error'>
									<AlertIcon />
									{fromErrorMessage}
								</Alert>
							)}
							<FormButton type='submit' isLoading={result?.isLoading}>
								Get OTP
							</FormButton>
						</Flex>
					)}

					<Flex w='100%' flexDirection='column'>
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
							<Flex flexDir='column' alignItems='flex-end' gap='1rem' w='full'>
								{errorMessage && (
									<Alert status='error'>
										<AlertIcon />
										{errorMessage}
									</Alert>
								)}
								{fromErrorMessage && (
									<Alert status='error'>
										<AlertIcon />
										{fromErrorMessage}
									</Alert>
								)}
								<FormButton
									onClick={handleSubmitAllData}
									disabled={formData?.otp == ''}
									isLoading={formResult?.isLoading}
								>
									Submit
								</FormButton>
							</Flex>
						)}
					</Flex>
				</FormContainer>
			</form>
		</Box>
	);
};

export default Home;
