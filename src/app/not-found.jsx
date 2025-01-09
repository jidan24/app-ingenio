import { redirect } from 'next/navigation';

export default function RootNotFoundPage() {
	return redirect('/');
}
