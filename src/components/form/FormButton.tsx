import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type FormButtonProps = ButtonProps & {
	children: string;
};
const FormButton: FC<FormButtonProps> = ({ children, ...props }) => {
	return (
		<Button
			mr='4'
			textTransform='uppercase'
			colorScheme='blue'
			bg='#A78C61'
			transition='.4s'
			_hover={{ backgroundColor: '#8a7048' }}
			{...props}
		>
			{children}
		</Button>
	);
};

export default FormButton;
