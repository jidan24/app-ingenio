'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { accordionData9 } from '@/utils/constants';

function Kebidanan() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<>
			{accordionData9.map((item, index) => (
				<div key={index}>
					<div
						className={`flex cursor-pointer items-center justify-between rounded-sm p-2 px-5 py-4 text-white transition-all duration-200 ease-in-out ${openIndex === index ? 'bg-[#0d6efd] text-black hover:bg-[#0a58ca]' : 'bg-[#0d6efd] hover:bg-[#1b65d4]'}`}
						onClick={() => toggleAccordion(index)}
					>
						<span>{item.title}</span>
						<ChevronDownIcon
							className={`h-5 w-5 transition-transform ${openIndex === index ? 'rotate-180 transform' : ''}`}
						/>
					</div>
					{openIndex === index && (
						<div className='rounded-md bg-white p-2'>
							{item.content.map((content, contentIndex) => (
								<div
									key={contentIndex}
									className='mb-4 rounded-md bg-white p-4 shadow-md hover:bg-[#e9ecef]'
								>
									<Link
										href={content.link}
										className='text-[#1e2125]'
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

export { Kebidanan };
