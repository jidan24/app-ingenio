'use client';
import { useState } from 'react';
import Link from 'next/link';
import { RegionalAccordionData } from '@/utils/constants';
import { ChevronDownIcon } from '@radix-ui/react-icons';

function Regional() {
	const [openIndexes, setOpenIndexes] = useState([]);

	const toggleAccordion = (index) => {
		setOpenIndexes((prevIndexes) =>
			prevIndexes.includes(index)
				? prevIndexes.filter((i) => i !== index)
				: [...prevIndexes, index],
		);
	};

	return (
		<>
			{RegionalAccordionData.map((item, index) => (
				<div key={index} className='mb-4'>
					<div
						className={`flex cursor-pointer items-center justify-between rounded-sm bg-[#0d6efd] p-2 px-5 py-4 text-white transition-all duration-200 ease-in-out hover:bg-[#1b65d4]`}
						onClick={() => toggleAccordion(index)}
					>
						<span>{item.title}</span>
						<ChevronDownIcon
							className={`h-5 w-5 transition-transform ${openIndexes.includes(index) ? 'rotate-180 transform' : ''}`}
						/>
					</div>
					{openIndexes.includes(index) && (
						<div className='rounded-md bg-white p-2'>
							{item.content.map((content, contentIndex) => (
								<div
									key={contentIndex}
									className='mb-4 rounded-md bg-white p-4 shadow-lg hover:bg-[#e9ecef]'
								>
									<Link
										href={content.link}
										className='text-black hover:underline'
										target='_blank'
										rel='noopener noreferrer'
									>
										{content.text}
									</Link>
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</>
	);
}

export { Regional };
