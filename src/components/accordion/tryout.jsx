'use client';
import { useState } from 'react';
import Link from 'next/link';
import { accordionData2 } from '@/utils/constants';
import { ChevronDownIcon } from '@radix-ui/react-icons';

function Tryout() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<>
			{accordionData2.map((item, index) => (
				<div key={index}>
					<div
						className={`flex cursor-pointer items-center justify-between rounded-sm p-2 px-5 py-4 transition-all duration-200 ease-in-out ${
							openIndex === index
								? 'bg-[#e7f1ff] text-blue-500'
								: 'bg-[#f8ca2b] hover:bg-[#f1b924]'
						}`}
						onClick={() => toggleAccordion(index)}
					>
						<span>{item.title}</span>
						<ChevronDownIcon
							className={`h-5 w-5 transition-transform ${
								openIndex === index
									? 'rotate-180 transform'
									: ''
							}`}
						/>
					</div>
					{openIndex === index && (
						<div className='rounded-md bg-white p-2'>
							{item.content.map((content, contentIndex) => (
								<div
									key={contentIndex}
									className='mb-4 rounded-md bg-[#f8ca2b] p-4 shadow-md hover:bg-[#f1b924]'
								>
									<Link
										target='_blank'
										rel='noopener noreferrer'
										href={content.link}
										className='text-black hover:underline'
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

export { Tryout };
