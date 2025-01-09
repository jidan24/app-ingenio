import Accordion from '@/components/accordion/accordion';
import { Cbt } from '@/components/accordion/cbt';
import { Doktergigi } from '@/components/accordion/doktergigi';
import { Doktermuda } from '@/components/accordion/doktermuda';
import { Kebidanan } from '@/components/accordion/kebidanan';
import { Mengajar } from '@/components/accordion/mengajar';
import { Osce } from '@/components/accordion/osce';
import { Preklinik } from '@/components/accordion/preklinik';
import { Tryout } from '@/components/accordion/tryout';
import Image from 'next/image';
import Link from 'next/link';

export default function TutorPage() {
	return (
		<>
			<div className='mt-28 flex min-h-screen justify-center bg-gray-100'>
				<div className='mt-4 flex w-full flex-col gap-5 p-4 text-center text-black md:w-1/2'>
					<div className='mb-2 flex justify-center'>
						<Image
							src='/logos/logotutor.png'
							alt='logo'
							width={400}
							height={174}
							priority
						/>
					</div>
					<h1 className='text-[40px]'>INGENIO INDONESIA</h1>
					<p>
						Halo kakak-kakak Tutor Ingenio Indonesia! ‌Berikut
						halaman tautan integrasi untuk seluruh proses layanan
						akademik Ingenio Indonesia! Tautan ini terbatas untuk
						tutor Ingenio Indonesia. ‌Terima Kasih.
					</p>
					<div className='mt-4'>---------------------------</div>
					<div className='bg-[#0d6efd] px-4 py-5 text-white hover:bg-[#1b65d4]'>
						<Link
							target='_blank'
							href='https://docs.google.com/forms/d/e/1FAIpQLSel25ZxVgmCgubCC9rxDngZik-tA3KWfcfFYAAqDSyxwKhZmA/viewform'
						>
							<h6>Formulir Pemesanan Zoom / Ruanagan Mengajar</h6>
							<p>
								formulir ini diisi setiap hari oleh tutor setiap
								harinya maksimal pengisian formulir ini H-1
								sebelum jadwal bimbingan akan
							</p>
						</Link>
					</div>
					<div className='mt-4 bg-[#0d6efd] px-4 py-5 text-white hover:bg-[#1b65d4]'>
						<Link
							target='_blank'
							href='https://docs.google.com/spreadsheets/d/17pn0__0BOfEswkVpX5O8L24cul5cYTjGlu3zTN6CSgI/edit?usp=sharing'
						>
							<h6>
								SPREADSHEET PEMBAGIAN ZOOM / RUANGAN MENGAJAR
							</h6>
							<p>
								Zoom atau ruangan untuk tutor mengajar dapat
								dilihat melalui spreadsheet berikut setiap
								harinya pukul 18.oo WIB
							</p>
						</Link>
					</div>
					<div className='mt-4'>---------------------------</div>
					<Preklinik />
					<Doktermuda />
					<div className='mt-4'>---------------------------</div>
					<h5>LAYANAN BIMBINGAN UKMPPD</h5>
					<Cbt />
					<Osce />
					<Mengajar />
					<div className='mt-4'>---------------------------</div>
					<Doktergigi />
					<Kebidanan />
					<div className='mb-4 mt-4'>---------------------------</div>
					<div className='mt-4 bg-[#0d6efd] px-4 py-5 text-white hover:bg-[#1b65d4]'>
						<Link
							target='_blank'
							href='https://docs.google.com/forms/d/e/1FAIpQLSfbSbj-QESJNp8zrVkn7AoZ2nqkSAV5gK-51zcHVbyg2-EBtQ/viewform'
						>
							<h6>FORMULIR ABSENSI RAPAT AKADEMIK</h6>
						</Link>
					</div>
					<div className='mt-4'>---------------------------</div>
					<div className='mt-4 bg-[#0d6efd] px-4 py-5 text-white hover:bg-[#1b65d4]'>
						<Link
							target='_blank'
							href='https://api.whatsapp.com/send/?phone=6281358889123&text&type=phone_number&app_absent=0'
						>
							<h6>KONSULTASI DENGAN TIM AKADEMIK</h6>
						</Link>
					</div>
					<div className='mt-4 bg-[#0d6efd] px-4 py-5 text-white hover:bg-[#1b65d4]'>
						<Link
							target='_blank'
							href='https://api.whatsapp.com/send/?phone=6281358889133&text&type=phone_number&app_absent=0'
						>
							<h6>KONSULTASI DENGAN TIM HRD</h6>
						</Link>
					</div>
					<div className='mt-4 bg-[#0d6efd] px-4 py-5 text-white hover:bg-[#1b65d4]'>
						<Link
							target='_blank'
							href='https://api.whatsapp.com/send/?phone=6282143260751&text&type=phone_number&app_absent=0'
						>
							<h6>KONSULTASI DENGAN TIM IT</h6>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
