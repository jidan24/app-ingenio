import { navItems, navStore } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

function NavbarStore() {
	return (
		<nav className='fixed start-0 top-0 z-20 h-28 w-full bg-[#FFC107]'>
			<div className='container mx-auto flex h-28 max-w-screen-xl items-center justify-between p-4'>
				<Link href='/' className='flex items-center space-x-3'>
					<Image
						src='/logos/logotutor.png'
						alt='logo'
						width={150}
						height={170}
						priority
					/>
				</Link>
				<div>
					<ul className='flex flex-col rounded-lg border border-[#FFC107] bg-[#FFC107] p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-[#FFC107] md:p-0 rtl:space-x-reverse'>
						{navStore.map((item, index) => (
							<li key={index}>
								<Link
									href={item.slug}
									className='flex items-center gap-4 text-black/65 hover:text-black/80'
								>
									{item.name}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										className='bi bi-basket-fill'
										viewBox='0 0 16 16'
									>
										<path d='M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z'></path>
									</svg>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
export { NavbarStore };
