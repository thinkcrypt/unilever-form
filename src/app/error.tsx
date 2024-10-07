'use client';
import { CommonText, FormButton } from '@/components';
import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from '@chakra-ui/react';
import { GiCheckMark } from 'react-icons/gi';
import { useRouter } from 'next/navigation';

const Error = () => {
	const router = useRouter();

	const handleReload = () => {
		router.push('/'); // Navigate to the homepage
		window.location.reload(); // Reload the page after navigation
	};

	return (
		<Flex w='full' h='100vh' justifyContent='center' alignItems='center'>
			<Stack
				bg='#fff'
				w={{ base: 'auto', md: '500px' }}
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
					bg='#ffc3a8'
					justifyContent='center'
					alignItems='center'
					mb='1.5rem'
				>
					<GiCheckMark color='#d34300' fontSize='3rem' />
				</Flex>
				<Stack alignItems='center'>
					<CommonText
						color='#d34300'
						fontSize='2rem'
						textTransform='none'
						fontWeight='700'
						textAlign='center'
					>
						Error
					</CommonText>
					<CommonText mb={4} textAlign='center' textTransform='none'>
						Something went wrong! please reload and try again
					</CommonText>
					<Link href='/'>
						<FormButton onClick={handleReload} bg='#9ABC66'>
							Reload
						</FormButton>
					</Link>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Error;
