'use client';
import {
	BrandSelect,
	FormContainer,
	HeadingText,
	RadioInput,
	TextInput,
} from '@/components';
import { formFields, genderField } from '@/lib/data';
import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

const Home = () => {
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		contact: '',
		gender: '',
		age: null,
		area: '',
		currentUsingBrand: '',
	});

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
	};

	// Handle Input Change Event
	const handleInputChange = (key: keyof typeof formData, value: string) => {
		setFormData(prev => ({
			...prev,
			[key]: value,
		}));
	};

	// Get Code Button Logic
	const handleGetCodeInput = () => {
		setSubmitted(true);
		// Check if all required fields are filled
		if (
			!formData.name ||
			!formData.contact ||
			!formData.gender ||
			!formData.area ||
			!formData.currentUsingBrand
		) {
			return;
		}

		handleCodeField(true);
	};

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
		});
	};

	return (
		<Box py='80px' w='full' h='full'>
			<HeadingText textAlign='center'>Unilever</HeadingText>
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
