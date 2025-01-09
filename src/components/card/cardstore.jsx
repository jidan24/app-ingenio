'use client';
import { cardItems } from '@/utils/constants';
import Image from 'next/image';
import { useState } from 'react';

function StoreCard() {
	const [isPopupOpen, setPopupOpen] = useState(false);
	const [popupImages, setPopupImages] = useState([]);

	const openPopup = (images) => {
		setPopupImages(images || []);
		setPopupOpen(true);
	};

	const closePopup = () => {
		setPopupOpen(false);
		setPopupImages([]);
	};

	return (
		<>
			<div className='container mx-auto mb-24 mt-4 pt-7'>
				<h1 id='catalog' className='mb-4 text-[32px] text-[#212529]'>
					Catalog
				</h1>
				<div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{cardItems.map((card) => (
						<div className='rounded-xl border-2 bg-white p-4 gap-4 shadow-lg'
							key={card.id}
						>
							<div className='flex flex-col items-center pb-3'>
								<div className='mb-4 overflow-hidden rounded-xl'>
									<Image
										src={card.image}
										alt={card.title}
										width={500}
										height={500}
										className='object-cover'
										priority
									/>
								</div>
								<h3 className='h-16 text-left text-[16px] font-normal text-black'>
									{card.title}
								</h3>
							</div>
							<button
								className='flex items-center gap-1 rounded-e bg-[#0d6efd] px-3 py-1.5 text-[20px] italic text-[#fff]'
								onClick={() => openPopup(card.popupImages)}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									className='bi bi-bag-plus-fill'
									viewBox='0 0 16 16'
								>
									<path
										fillRule='evenodd'
										d='M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z'
									></path>
								</svg>
								Checkout
							</button>
						</div>
					))}
				</div>
			</div>

			{isPopupOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='relative w-3/4 max-w-[800px] rounded-lg bg-white p-6'>
						<button
							className='absolute right-2 top-2 text-lg font-bold text-black'
							onClick={closePopup}
						>
							X
						</button>
						<div className='flex items-center justify-between'>
							{popupImages.length > 0 && (
								<Image
									src={popupImages[0]}
									alt='Popup Left'
									width={300}
									height={300}
									className='rounded-lg object-cover'
									priority
								/>
							)}
							{popupImages.length > 1 && (
								<Image
									src={popupImages[1]}
									alt='Popup Right'
									width={300}
									height={300}
									className='rounded-lg object-cover'
									priority
								/>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export { StoreCard };
