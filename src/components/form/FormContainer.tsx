import { Stack, StackProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type FormContainerProps = StackProps & {
	children: ReactNode;
};
const FormContainer: FC<FormContainerProps> = ({ children, ...props }) => {
	return (
		<Stack
			w={{ base: '100%', md: '620px' }}
			h='100%'
			justifyContent='center'
			alignItems='center'
			p='24px'
			mx='auto'
			borderRadius='8px'
			{...props}
		>
			{children}
		</Stack>
	);
};
export default FormContainer;
