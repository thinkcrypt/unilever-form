'use client';
import { Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

type TimerProps = {
	onTimeExpired: () => void; // Callback function to execute when time is up
};

const Timer: React.FC<TimerProps> = ({ onTimeExpired }) => {
	const [seconds, setSeconds] = useState(180); // 3 minutes in seconds

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prev => {
				if (prev <= 1) {
					clearInterval(interval);
					onTimeExpired(); // Call the callback function
					return 0; // Ensure the state doesn't go negative
				}
				return prev - 1; // Decrease seconds
			});
		}, 1000);

		return () => clearInterval(interval); // Cleanup the interval on component unmount
	}, [onTimeExpired]);

	const formatTime = (sec: number) => {
		const minutes = Math.floor(sec / 60);
		const remainingSeconds = sec % 60;
		return `${minutes < 10 ? '0' : ''}${minutes}:${
			remainingSeconds < 10 ? '0' : ''
		}${remainingSeconds}`;
	};

	return (
		<Flex justifyContent='flex-start' alignItems='center'>
			<Text fontSize='.85rem'>{formatTime(seconds)}</Text>
		</Flex>
	);
};

export default Timer;
