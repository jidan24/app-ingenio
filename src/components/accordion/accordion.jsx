'use client';
import { useState } from 'react';
import Link from 'next/link';
import { accordionData } from '@/utils/constants';
import { ChevronDownIcon } from '@radix-ui/react-icons';

function Accordion() {
	const [openIndex, setOpenIndex] = useState(null);
	const [openSubIndexes, setOpenSubIndexes] = useState({});
	const [openSubSubIndexes, setOpenSubSubIndexes] = useState({});

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
		setOpenSubIndexes({});
		setOpenSubSubIndexes({});
	};

	const toggleSubAccordion = (index, subIndex) => {
		setOpenSubIndexes((prevIndexes) => ({
			...prevIndexes,
			[index]: {
				...prevIndexes[index],
				[subIndex]: !prevIndexes[index]?.[subIndex],
			},
		}));
		setOpenSubSubIndexes((prev) => ({
			...prev,
			[index]: {},
		}));
	};

	const toggleSubSubAccordion = (index, subIndex, subSubIndex) => {
		setOpenSubSubIndexes((prevIndexes) => ({
			...prevIndexes,
			[index]: {
				...prevIndexes[index],
				[subIndex]: {
					...prevIndexes[index]?.[subIndex],
					[subSubIndex]:
						!prevIndexes[index]?.[subIndex]?.[subSubIndex],
				},
			},
		}));
	};

	return (
		<>
			{accordionData.map((item, index) => (
				<div key={index}>
					<div
						className={`flex cursor-pointer items-center justify-between rounded-sm p-2 px-5 py-4 transition-all duration-200 ease-in-out ${openIndex === index ? 'bg-[#e7f1ff] text-blue-500' : 'bg-[#f8ca2b] hover:bg-[#f1b924]'}`}
						onClick={() => toggleAccordion(index)}
					>
						<span>{item.title}</span>
						<ChevronDownIcon
							className={`h-5 w-5 transition-transform ${openIndex === index ? 'rotate-180 transform' : ''}`}
						/>
					</div>
					{openIndex === index && (
						<div className='rounded-md bg-white p-2'>
							{item.subItems && item.subItems.length > 0 && (
								<div className='mt-2'>
									{item.subItems.map((subItem, subIndex) => (
										<div key={subIndex} className='mb-2'>
											<div
												className={`mt-2 flex cursor-pointer items-center justify-between rounded-md p-2 px-5 py-4 transition-all duration-200 ease-in-out ${openSubIndexes[index]?.[subIndex] ? 'bg-[#e7f1ff] text-blue-500' : 'bg-[#f8ca2b] hover:bg-[#f1b924]'}`}
												onClick={() =>
													toggleSubAccordion(
														index,
														subIndex,
													)
												}
											>
												<span>{subItem.title}</span>
												<ChevronDownIcon
													className={`h-4 w-4 transition-transform ${openSubIndexes[index]?.[subIndex] ? 'rotate-180 transform' : ''}`}
												/>
											</div>
											{openSubIndexes[index]?.[
												subIndex
											] && (
												<div className='mt-4 rounded-md bg-[#e7f1ff] p-4 text-center text-blue-500'>
													{subItem.content.map(
														(
															content,
															contentIndex,
														) => (
															<div
																key={
																	contentIndex
																}
																className='mb-4 rounded-md bg-[#0d6efd] p-4 shadow-md hover:bg-[#1b65d4]'
															>
																<Link
																	href={
																		content.link
																	}
																	className='text-white hover:underline'
																	target='_blank'
																	rel='noopener noreferrer'
																>
																	{
																		content.text
																	}
																</Link>
															</div>
														),
													)}
													{subItem.subSubItems &&
														subItem.subSubItems
															.length > 0 && (
															<div className='mt-4'>
																{subItem.subSubItems.map(
																	(
																		subSubItem,
																		subSubIndex,
																	) => (
																		<div
																			key={
																				subSubIndex
																			}
																			className='mb-2'
																		>
																			<div
																				className={`mt-2 cursor-pointer items-center justify-center rounded-md p-2 px-5 py-4 transition-all duration-200 ease-in-out ${
																					openSubSubIndexes[
																						index
																					]?.[
																						subIndex
																					]?.[
																						subSubIndex
																					]
																						? 'bg-[#ffffff] text-blue-500'
																						: 'bg-[#0d6efd] text-white hover:bg-[#1b65d4]'
																				}`}
																				onClick={() =>
																					toggleSubSubAccordion(
																						index,
																						subIndex,
																						subSubIndex,
																					)
																				}
																			>
																				<span>
																					{
																						subSubItem.title
																					}
																				</span>
																				<ChevronDownIcon
																					className={`h-4 w-4 justify-self-center transition-transform ${openSubSubIndexes[index]?.[subIndex]?.[subSubIndex] ? 'rotate-180 transform' : ''}`}
																				/>
																			</div>
																			{openSubSubIndexes[
																				index
																			]?.[
																				subIndex
																			]?.[
																				subSubIndex
																			] && (
																				<div className='mt-4 rounded-md bg-[#e7f1ff] p-4 text-center text-blue-500'>
																					{subSubItem.content.map(
																						(
																							content,
																							contentIndex,
																						) => (
																							<div
																								key={
																									contentIndex
																								}
																								className='mb-4 rounded-md bg-[#ffffff] p-4 shadow-md hover:bg-[#e9ecef]'
																							>
																								<Link
																									href={
																										content.link
																									}
																									className='text-black hover:underline'
																									target='_blank'
																									rel='noopener noreferrer'
																								>
																									{
																										content.text
																									}
																								</Link>
																							</div>
																						),
																					)}
																				</div>
																			)}
																		</div>
																	),
																)}
															</div>
														)}
												</div>
											)}
										</div>
									))}
								</div>
							)}
						</div>
					)}
				</div>
			))}
		</>
	);
}

export default Accordion;
