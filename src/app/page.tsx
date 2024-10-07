'use client';

import { BrandComponent } from '@/components';
import { brandData } from '@/lib/data';
import { Stack } from '@chakra-ui/react';

const Home = () => {
	return (
		<Stack gap='16px' w='full' h='100vh' p='16px'>
			<Stack alignItems='center' justifyContent='center' w='full' h='full'>
				{brandData.map((item, i) => (
					<BrandComponent
						brandName={item.brandName}
						logo={item.logo}
						link={item.link}
						key={i}
					/>
				))}
			</Stack>
		</Stack>
	);
};

export default Home;
