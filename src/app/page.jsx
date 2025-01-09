import { Carousel } from '@/components/carousel/carousel';

export default function HomePage() {
	return (
		<>
			<Carousel />
			<iframe
				className='aspect-video w-full'
				src='https://www.youtube.com/embed/Wk2p0yduAI4?si=rqsON9YTJS9xMu-n'
			/>
		</>
	);
}
