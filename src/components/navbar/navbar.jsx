'use client';
import { navItems } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div>
			<nav className='fixed start-0 top-0 z-20 h-28 w-full bg-[#FFC107] shadow-md'>
				<div className='container mx-auto flex h-28 max-w-screen-xl items-center justify-between bg-[#FFC107] p-4'>
					<Link
						href='/'
						className='flex items-center space-x-3'
						onClick={toggleMenu}
					>
						<Image
							src='/logos/logotutor.png'
							alt='logo'
							width={150}
							height={170}
							priority
						/>
					</Link>

					<button
						className='rounded-lg p-1 text-black/70 md:hidden'
						aria-controls='mobile-menu'
						aria-expanded={isMenuOpen}
						onClick={toggleMenu}
					>
						<svg
							className='h-6 w-6'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							aria-hidden='true'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d={
									isMenuOpen
										? 'M6 18L18 6M6 6l12 12'
										: 'M4 6h16M4 12h16m-7 6h7'
								}
							/>
						</svg>
					</button>

					<div
						className={`hidden w-full md:flex md:w-auto`}
						id='mobile-menu'
					>
						<ul className='mt-4 flex flex-col rounded-lg border border-[#FFC107] bg-[#FFC107] p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-[#FFC107] md:p-0 rtl:space-x-reverse'>
							{navItems.map((item, index) => (
								<li key={index}>
									<Link
										href={item.slug}
										className='block px-4 py-2 text-black/65 hover:text-black/80 md:px-0 md:py-0'
										onClick={toggleMenu}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div
					className={`relative duration-150 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} -z-10 block md:hidden`}
				>
					<ul className='-mt-1 flex flex-col justify-center border border-[#FFC107] bg-[#FFC107] p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-[#FFC107] md:p-0 rtl:space-x-reverse'>
						{navItems.map((item, index) => (
							<li key={index}>
								<Link
									href={item.slug}
									className='block px-4 py-2 text-black/65 hover:text-black/80 md:px-0 md:py-0'
									onClick={toggleMenu}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</div>
	);
}

export { Navbar };
