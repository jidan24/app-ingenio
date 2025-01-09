import Image from 'next/image';
import React from 'react';

export default function LoginPage() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center space-y-4 bg-gray-200'>
			<div className='text-center'>
				<h1 className='text-2xl font-semibold text-gray-800'>
					Halo official Ingenio & Tutor
				</h1>
				<p className='text-gray-600'>
					Silahkan Login untuk Masuk ke Apps
				</p>
			</div>

			<div className='w-full max-w-xl rounded-lg bg-white p-4 shadow-lg'>
				<div className='mb-6 flex justify-center'>
					<Image
						src='/logos/loginuser.png'
						width={300}
						height={300}
						alt='Profile'
						className='h-24 w-24 rounded-full'
						priority
					/>
				</div>

				<form>
					<div className='mb-4'>
						<label
							className='mb-2 block text-sm font-medium text-gray-700'
							htmlFor='email'
						>
							Email
						</label>
						<input
							id='email'
							type='email'
							placeholder='email@ingenioindonesia.co.id'
							className='w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C2DBFE]'
						/>
					</div>

					<div className='mb-4'>
						<label
							className='mb-2 block text-sm font-medium text-gray-700'
							htmlFor='password'
						>
							Password
						</label>
						<input
							id='password'
							type='password'
							placeholder='Enter your password'
							className='w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C2DBFE]'
						/>
					</div>

					<div className='mb-4 flex items-center justify-between'>
						<a href='#' className='text-sm text-blue-500'>
							Forgot password?
						</a>
					</div>

					<div className='mb-4 flex items-center'>
						<input id='remember' type='checkbox' className='mr-2' />
						<label
							htmlFor='remember'
							className='text-sm text-gray-700'
						>
							Remember me next time
						</label>
					</div>
				</form>
				<div className='text-center'>
					<button
						type='submit'
						className='w-1/2 rounded-lg bg-blue-500 py-2 font-semibold text-white transition duration-200 hover:bg-blue-600'
					>
						Sign in
					</button>
				</div>
			</div>
		</div>
	);
}
