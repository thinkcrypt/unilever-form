import React from 'react';
import { usePathname } from 'next/navigation';
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from '@chakra-ui/react';

import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
const BreadCrumb = () => {
	const endpoint = usePathname();
	console.log('endpoint:', endpoint.slice());
	return (
		<Box ml='3rem'>
			<Breadcrumb
				separator={<MdKeyboardArrowRight size={20} color='gray.500' />}
			>
				<BreadcrumbItem>
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
