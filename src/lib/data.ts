export const formFields = [
	{
		label: 'BP Code',
		type: 'text',
		placeholder: 'Enter BP Code',
		isRequired: true,
		errorMsg: 'BP Code is required',
		fieldKey: 'bpCode', // This key must match a key in formData
	},
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
		fieldKey: 'phone', // This key must match a key in formData
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
		label: 'Current Using Brand',
		type: 'string',
		placeholder: 'Brand Name',
		fieldKey: 'currentUsingBrand', // This key must match a key in formData
	},
	{
		label: 'Area',
		type: 'text',
		placeholder: 'Your Answer',
		isRequired: true,
		errorMsg: 'Area is required',
		fieldKey: 'area', // This key must match a key in formData
	},
	{
		label: 'Address',
		type: 'text',
		placeholder: 'Your Address',
		isRequired: true,
		errorMsg: 'Address is required',
		fieldKey: 'address', // This key must match a key in formData
	},
	{
		label: 'Tentative Purchase Date',
		type: 'date',
		placeholder: 'Your Purchase Date',
		isRequired: true,
		errorMsg: 'Purchase Date is required',
		fieldKey: 'tentativePurchaseDate', // This key must match a key in formData
	},
];
//`
export const genderField = {
	label: 'Gender',
	isRequired: true,
	errorMsg: 'Number is required',
	fieldKey: 'gender', // This key must match a key in formData
};

export const tresemmeFormFields = [
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
		fieldKey: 'phone', // This key must match a key in formData
	},
	{
		label: 'Age',
		type: 'number',
		placeholder: 'Your Age',
		isRequired: true,
		errorMsg: 'Age is required',
		fieldKey: 'age', // This key must match a key in formData
	},

	{
		label: 'Parlor Code',
		type: 'text',
		placeholder: 'Parlor Code',
		isRequired: true,
		errorMsg: 'Parlor Code is required',
		fieldKey: 'parlorCode', // This key must match a key in formData
	},
	{
		label: 'Purchase Quantity',
		type: 'number',
		placeholder: 'Type Quantity',
		isRequired: true,
		errorMsg: 'Purchase Quantity is required',
		fieldKey: 'purchaseQuantity', // This key must match a key in formData
	},
];

export const checkboxText = {
	tresemme:
		'আমি সম্মতি দিচ্ছি যে আমার বয়স ১৮ বছরের উর্দ্ধে। আমি ইউনিলিভার বাংলাদেশ লিমিটেড এবং তার সাথে সম্পর্কিত তৃতীয় পক্ষকে আমার ব্যক্তিগত তথ্য ব্যবহার, সংরক্ষণ, প্রক্রিয়াকরণ এবং আমার সাথে যোগাযোগ করার অনুমতি দিচ্ছি।',
	petromax:
		'আমি সম্মতি দিচ্ছি যে আমার বয়স ১৮ বছরের উর্দ্ধে। আমি ইউনিলিভার বাংলাদেশ লিমিটেড এবং তার সাথে সম্পর্কিত তৃতীয় পক্ষকে আমার ব্যক্তিগত তথ্য ব্যবহার, সংরক্ষণ, প্রক্রিয়াকরণ এবং আমার সাথে যোগাযোগ করার অনুমতি দিচ্ছি।',
};

export const brandData = [
	{
		brandName: 'Tresemme',
		logo: '/logo/TRESEMME.png',
		link: '/tresemme',
	},
	{
		brandName: 'Petromax',
		logo: '/logo/petromax.png',
		link: '/petromax',
	},
];
