'use client';

import { CommonText } from '@/components';
import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

const Home = () => {
	return (
		<Box w='full' h='100vh'>
			<Flex
				gap='30px'
				w='full'
				h='full'
				justifyContent='center'
				alignItems='center'
			>
				<Link href='/tresemme'>
					<CommonText
						transition='.3s'
						_hover={{ backgroundColor: '#A78C61' }}
						p='10px 20px'
						border='1px solid #A78C61'
					>
						Tresemme
					</CommonText>
				</Link>
				<Link href='/petromax'>
					<CommonText
						transition='.3s'
						_hover={{ backgroundColor: '#A78C61' }}
						p='10px 20px'
						border='1px solid #A78C61'
					>
						Petromax
					</CommonText>
				</Link>
			</Flex>
		</Box>
	);
};

export default Home;
