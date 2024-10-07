import { Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type FormLogoProps = {
	imgSrc: string;
};

const FormLogo: FC<FormLogoProps> = ({ imgSrc }) => {
	return (
		<Flex justifyContent='center' mb='18px' h='100px' width='full'>
			<Image w='auto' h='100px' src={imgSrc} alt='Logo Image' />
		</Flex>
	);
};

export default FormLogo;
