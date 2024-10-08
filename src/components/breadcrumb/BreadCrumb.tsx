import React from 'react';
import { usePathname } from 'next/navigation';
import { Box, Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';

import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import { colors } from '@/lib/config/colors';
const BreadCrumb = () => {
	const endpoint = usePathname();
	console.log('endpoint:', endpoint.slice());
	return (
		<Box px='24px' mb='16px' maxW='620px' mx='auto'>
			<Breadcrumb
				separator={<MdKeyboardArrowRight size={20} color='gray.500' />}
			>
				<BreadcrumbItem color={colors.success}>
					<Link href='/'> Home</Link>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<Link href='#'> {endpoint.slice(1)}</Link>
				</BreadcrumbItem>
			</Breadcrumb>
		</Box>
	);
};

export default BreadCrumb;
