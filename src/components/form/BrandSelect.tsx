import { FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import { FC } from 'react';
import { CustomFormControl } from '@/components';

type BrandSelectProps = {
	label?: string;
	errorMsg?: string;
	value: string;
	handleChange: (key: string, value: string) => void;
	isRequired?: boolean;
	submitted?: boolean;
};

const BrandSelect: FC<BrandSelectProps> = ({
	label,
	errorMsg,
	value,
	handleChange,
	isRequired = false,
	submitted = false,
}) => {
	const isError = isRequired && submitted && value === '';
	return (
		<CustomFormControl isRequired={true}>
			<FormLabel>{label}</FormLabel>
			<Select
				placeholder='Select brand'
				value={value}
				onChange={e => handleChange('currentUsingBrand', e.target.value)}
				border='1px solid #ababab'
			>
				<option value='tresemme'>TRESEMME</option>
				<option value='petromax'>PETROMAX</option>
			</Select>
			{isError && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
		</CustomFormControl>
	);
};

export default BrandSelect;
