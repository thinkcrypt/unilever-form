'use client';
import {
	BrandSelect,
	CheckboxField,
	FormContainer,
	HeadingText,
	RadioInput,
	TextInput,
} from '@/components';
import { useAppDispatch } from '@/components/library/useReduxHooks';
import { formFields, genderField } from '@/lib/data';
import { useRegisterMutation } from '@/store/services/authApi';
import { login } from '@/store/slices/authSlice';
import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Home = () => {
	const [trigger, result] = useRegisterMutation();
	const dispatch = useAppDispatch();

	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		contact: '',
		gender: '',
		age: null,
		area: '',
		currentUsingBrand: '',
		checkbox: false,
	});
	//
	// For show and hide code number input field
	const [codeField, setCodeField] = useState<boolean>(false);

	// For taking the code number from user
	const [codeNumber, setCodeNumber] = useState<string>();

	// For show and Hide Code number Input Field
	const handleCodeField = (value: boolean) => {
		setCodeField(value);
	};

	const handleCodeNumber = (value: string) => {
		setCodeNumber(value);
		// trigger({...formData,otp:value})
		console.log('pin and form data:', { ...formData, otp: value });
	};

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
	const handleGetCodeInput = () => {
		console.log('only form data:', formData);
		// trigger(formData);
		setSubmitted(true);
		// Check if all required fields are filled
		if (
			!formData.name ||
			!formData.contact ||
			!formData.gender ||
			!formData.area ||
			!formData.currentUsingBrand ||
			!formData.checkbox
		) {
			return;
		}

		handleCodeField(true);
	};
	// api result
	const { isSuccess, isError, isLoading, error } = result;
	// is register is successful
	useEffect(() => {
		if (result.isSuccess) {
			dispatch(login(result.data));
		}
	}, [dispatch, result.isSuccess, result.data]);

	// Form Verification Logic
	const handleVerify = () => {
		alert(
			`Your Provided Information is: name: ${formData.name} , contact: ${formData.contact}, gender: ${formData.gender} age: ${formData.age} area: ${formData.area} currentUsingBrand: ${formData.currentUsingBrand} CODE: ${codeNumber}`
		);
		setSubmitted(false);
		setCodeField(false);
		setCodeNumber('');
		setFormData({
			name: '',
			contact: '',
			gender: '',
			age: null,
			area: '',
			currentUsingBrand: '',
			checkbox: false,
		});
	};

	return (
		<Box py='80px' w='full' h='full'>
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
						isRequired={field.isRequired}
						submitted={submitted}
						fieldKey={field.fieldKey}
						borderTop={i === 0 ? '8px solid #A78C61' : undefined}
					/>
				))}

				{/* Gender Field */}
				<RadioInput
					label='Gender'
					isRequired={genderField.isRequired}
					submitted={submitted}
					value={formData.gender}
					errorMsg='Gender is required'
					handleChange={(key, value) => handleInputChange('gender', value)}
				/>

				{/* Brand Field */}
				<BrandSelect
					label='Current Using Brand'
					isRequired={true}
					submitted={submitted}
					value={formData.currentUsingBrand}
					errorMsg='Brand selection is required'
					handleChange={(key, value) =>
						handleInputChange('currentUsingBrand', value)
					}
				/>

				{/* Checkbox Field */}
				<CheckboxField
					handleChange={() => handleInputChange('checkbox', !formData.checkbox)}
					isChecked={formData.checkbox}
					submitted={submitted}
				/>

				<Flex mb='12px' w='full'>
					<Button
						onClick={handleGetCodeInput}
						mr='4'
						textTransform='uppercase'
						colorScheme='blue'
					>
						Get Code
					</Button>
					{codeField && (
						<Input
							type='number'
							onChange={e => handleCodeNumber(e.target.value)}
							maxWidth='100px'
							border='1px solid #ababab'
							maxLength={6}
						/>
					)}
				</Flex>
				{codeNumber?.length === 6 && (
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
				)}
			</FormContainer>
		</Box>
	);
};

export default Home;
