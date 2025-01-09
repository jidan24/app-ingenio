import Accordion from '@/components/accordion/accordion';
import { Tryout } from '@/components/accordion/tryout';
import { tapLink } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function OfficialsPage() {
	return (
		<>
			<div className='mt-28 flex min-h-screen justify-center bg-gray-100 font-sans'>
				<div className='flex w-full flex-col gap-4 p-4 text-black md:w-1/2'>
					<div className='mb-2 flex justify-center'>
						<Image
							alt='ingenio logo'
							width={300}
							height={300}
							src='/logos/karakter.png'
							priority
						/>
					</div>

					<Accordion />

					<div>
						<Link
							className='text-center'
							href={tapLink[0].url}
							target='_blank'
						>
							<div className='rounded-sm bg-[#f8ca2b] p-2 px-5 py-4 hover:bg-[#e9c02c]'>
								{tapLink[0].text}
							</div>
						</Link>
					</div>

					<div>
						<Tryout />
					</div>

					<div>
						<Link
							className='text-center'
							href={tapLink[1].url}
							target='_blank'
						>
							<div className='rounded-sm bg-[#f8ca2b] p-2 px-5 py-4 hover:bg-[#e9c02c]'>
								{tapLink[1].text}
							</div>
						</Link>
					</div>

					{tapLink.slice(2).map((item, index) => (
						<div key={index + 2}>
							<Link
								className='text-center'
								href={item.url}
								target='_blank'
							>
								<div className='rounded-sm bg-[#f8ca2b] p-2 px-5 py-4 hover:bg-[#e9c02c]'>
									{item.text}
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
