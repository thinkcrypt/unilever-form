import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const FormLogo = () => {
	return (
		<Flex justifyContent='center' mb='18px' h='100px' width='full'>
			<Image w='auto' h='100px' src='/logo/TRESEMME.png' />
		</Flex>
	);
};

export default FormLogo;
