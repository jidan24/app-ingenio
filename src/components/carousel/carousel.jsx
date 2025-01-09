'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'heroicons-react';

function Carousel() {
	const images = [
		'/images/cewe1.png',
		'/images/cewe2.png',
		'/images/cowo.png',
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const nextImage = useCallback(() => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1,
		);
	}, [images.length]);

	const prevImage = useCallback(() => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1,
		);
	}, [images.length]);

	useEffect(() => {
		const interval = setInterval(nextImage, 5000);

		return () => clearInterval(interval);
	}, [nextImage]);

	return (
		<div className='relative z-10 mt-28 w-full'>
			<div className='overflow-hidden'>
				<Image
					src={images[currentIndex]}
					alt={`Image ${currentIndex + 1}`}
					width={1200}
					height={600}
					className='h-auto w-full object-cover transition-transform duration-500 ease-in-out'
					priority
				/>
			</div>
			<button
				onClick={prevImage}
				className='absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white shadow-lg transition hover:bg-black/70'
			>
				<ChevronLeft className='h-6 w-6' />
			</button>
			<button
				onClick={nextImage}
				className='absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white shadow-lg transition hover:bg-black/70'
			>
				<ChevronRight className='h-6 w-6' />
			</button>
		</div>
	);
}

export { Carousel };
