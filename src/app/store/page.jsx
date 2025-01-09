import { StoreCard } from '@/components/card/cardstore';
import { NavbarStore } from '@/components/navbar/navbarstore';

export default function StorePage() {
	return (
		<>
			<NavbarStore />
			<StoreCard />
		</>
	);
}
