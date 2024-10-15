/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
	FormButton,
	FormContainer,
	FormLogo,
	OtpField,
	TextInput,
} from '@/components';
import { colors } from '@/lib/config/colors';
import Breadcrumbs from '@/components/breadcrumb/BreadCrumb';
import { formFields } from '@/lib/data';
import {
	useGetotpMutation,
	useSubmitFormMutation,
} from '@/store/services/getOtp';
import { Alert, AlertIcon, Box, Flex } from '@chakra-ui/react';
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
	const router = useRouter();

	const [formData, setFormData] = useState({
		bpCode: '',
		name: '',
		phone: '',
		age: '',
		currentUsingBrand: '',
		area: '',
		address: '',
		tentativePurchaseDate: '',
		otp: '',
	});

	// For show and hide code number input field
	const [codeField, setCodeField] = useState<boolean>(false);
	const [timeExpired, setTimeExpired] = useState(false);
	const [formFieldDisabled, setFormFieldDisabled] = useState(false);

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
		setErrorMessage(null);
		setFormErrorMessage(null);
		trigger({ brand: 'petromax', phone: formData?.phone });
		setTimeExpired(false);
	};

	// Get Code Button Logic
	const handleSubmit = (e: any) => {
		e.preventDefault();
		setFormFieldDisabled(true);
		setErrorMessage(null);
		setFormErrorMessage(null);
		trigger({ brand: 'petromax', phone: formData?.phone });
	};

	// form all data
	const handleSubmitAllData = () => {
		setErrorMessage(null);
		setFormErrorMessage(null);

		submitFormTrigger({
			brand: 'petromax',
			formData: {
				bpCode: formData?.bpCode,
				name: formData?.name,
				phone: formData?.phone,
				age: formData?.age,
				currentUsingBrand: formData?.currentUsingBrand,
				area: formData?.area,
				address: formData?.address,
				tentativePurchaseDate: formData?.tentativePurchaseDate,
				otp: formData?.otp,
			},
		});
	};

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

	useEffect(() => {
		if (result?.isSuccess) {
			setCodeField(true);
		}
	}, [result?.isSuccess]);

	useEffect(() => {
		if (formResult?.isSuccess && !formResult?.isLoading) {
			router.push('/petromax/success');
			router.push('/petromax/success');
		}
	}, [formResult?.isSuccess, formResult?.isLoading, router]);

	const isFormValid =
		formData.bpCode &&
		formData.name &&
		formData.phone &&
		formData.currentUsingBrand &&
		formData.area &&
		formData.address &&
		formData.tentativePurchaseDate &&
		formData.age !== null;

	return (
		<Box py='80px' w='full' h='full'>
			<Breadcrumbs />
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
							borderTop={i === 0 ? `8px solid ${colors.petroColor}` : undefined}
							disabled={field.fieldKey === 'phone' ? formFieldDisabled : false}
						/>
					))}

					{/* Otp Field */}
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

					{/* Error Messages Handling Before Getting Code */}
					{!codeField && (
						<>
							{errorMessage && (
								<Alert mb='16px' status='error'>
									<AlertIcon />
									{errorMessage}
								</Alert>
							)}
							{fromErrorMessage && (
								<Alert mb='16px' status='error'>
									<AlertIcon />
									{fromErrorMessage}
								</Alert>
							)}
						</>
					)}

					{!codeField && (
						<Flex
							alignItems='flex-end'
							gap='1rem'
							mb='12px'
							w='full'
							justifyContent='space-between'
						>
							<FormButton
								bg={colors.lightBlack}
								_hover={{ backgroundColor: colors.darkBlack }}
								onClick={() => window.location.reload()}
							>
								Reset
							</FormButton>
							<FormButton
								bg={colors.petroColor}
								_hover={{ backgroundColor: colors.petroHoverColor }}
								type='submit'
								isLoading={result?.isLoading}
								disabled={!isFormValid}
							>
								Get OTP
							</FormButton>
						</Flex>
					)}

					{/* Error Messages Handling After Getting Code */}
					{codeField && (
						<>
							{errorMessage && (
								<Alert mb='16px' status='error'>
									<AlertIcon />
									{errorMessage}
								</Alert>
							)}
							{fromErrorMessage && (
								<Alert mb='16px' status='error'>
									<AlertIcon />
									{fromErrorMessage}
								</Alert>
							)}
						</>
					)}

					{codeField && (
						<Flex
							justifyContent='space-between'
							alignItems='flex-end'
							gap='1rem'
							w='full'
						>
							<FormButton
								bg={colors.lightBlack}
								_hover={{ backgroundColor: colors.darkBlack }}
								onClick={() => window.location.reload()}
							>
								Reset
							</FormButton>
							<FormButton
								onClick={handleSubmitAllData}
								disabled={formData?.otp == ''}
								isLoading={formResult?.isLoading}
								bg={colors.petroColor}
								_hover={{ backgroundColor: colors.petroHoverColor }}
							>
								Submit
							</FormButton>
						</Flex>
					)}
				</FormContainer>
			</form>
		</Box>
	);
};

export default Home;
