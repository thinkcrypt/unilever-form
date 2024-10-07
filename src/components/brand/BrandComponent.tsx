import useCustomStyles from '@/lib/hooks/useCustomStyles';
import { Flex, Image, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { CommonText } from '@/components';

type BrandComponentProps = {
	brandName: string;
	logo: string;
	link: string;
};

const BrandComponent: FC<BrandComponentProps> = ({ brandName, logo, link }) => {
	const { colors } = useCustomStyles();
	return (
		<Link href={link} style={{ marginBottom: '24px' }}>
			<Stack
				p='16px'
				border='1px solid '
				justifyContent='center'
				alignItems='center'
				borderColor={colors.borderColor}
				borderRadius='8px'
				width='300px'
				h='200px'
				transition='.2s'
				_hover={{
					border: '1px solid',
					borderColor: colors.hoverBorderColor, // No extra braces here
				}}
			>
				<Flex mb='16px'>
					<Image src={logo} alt='Logo Image' />
				</Flex>
				<CommonText>{brandName}</CommonText>
			</Stack>
		</Link>
	);
};

export default BrandComponent;
