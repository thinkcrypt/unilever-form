import { CommonText, FormButton } from '@/components';
import { Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const page = () => {
	return (
		<Flex
			px='24px'
			w='full'
			h='100vh'
			justifyContent='center'
			alignItems='center'
		>
			<Stack
				bg='#fff'
				w={{ base: '100%', md: '500px' }}
				h={{ base: 'auto', md: '500px' }}
				justifyContent='center'
				alignItems='center'
				boxShadow='0px 0px 5px #ddd'
				padding='24px'
				py={{ base: '3rem', md: '24px' }}
				borderRadius='8px'
			>
				<Flex
					width='150px'
					h='150px'
					borderRadius='50%'
					bg='#F8FAF5'
					justifyContent='center'
					alignItems='center'
					mb='1.5rem'
				>
					<GiCheckMark color='#9ABC66' fontSize='3rem' />
				</Flex>
				<Stack alignItems='center'>
					<CommonText
						color='#9ABC66'
						fontSize='2rem'
						textTransform='none'
						fontWeight='700'
						textAlign='center'
					>
						Success
					</CommonText>
					<CommonText textAlign='center' textTransform='none'>
						Information Successfully Submitted
					</CommonText>
					<Link href='/'>
						<FormButton bg='#9ABC66' _hover={{ backgroundColor: '#6f8d42' }}>
							Go Home
						</FormButton>
					</Link>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default page;
