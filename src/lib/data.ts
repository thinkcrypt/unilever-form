export const formFields = [
	{
		label: 'Please Enter your name',
		type: 'text',
		placeholder: 'Your Answer',
		isRequired: true,
		errorMsg: 'Name is required',
		fieldKey: 'name', // This key must match a key in formData
	},
	{
		label: 'Phone Number',
		type: 'number',
		placeholder: '01xxxxxxxxxx',
		isRequired: true,
		errorMsg: 'Number is required',
		fieldKey: 'contact', // This key must match a key in formData
	},
	{
		label: 'Age',
		type: 'number',
		placeholder: 'Your Answer',
		isRequired: true,
		errorMsg: 'Age is required',
		fieldKey: 'age', // This key must match a key in formData
	},
	{
		label: 'Parlor Code',
		type: 'text',
		placeholder: 'Your Answer',
		isRequired: true,
		errorMsg: 'Area is required',
		fieldKey: 'parlorCode', // This key must match a key in formData
	},
];

export const genderField = {
	label: 'Gender',
	isRequired: true,
	errorMsg: 'Number is required',
	fieldKey: 'gender', // This key must match a key in formData
};
