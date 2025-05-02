'use client'

import { useState } from 'react'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<div className='max-w-[1920px] w-full'>
			<div className='max-w-[1440px] w-full h-[108px] flex justify-between items-center px-4 py-[30px] mx-auto'>
				<div className='flex items-center gap-[40px] lg:gap-[74px]'>
					<div className='flex items-center gap-[9.33px]'>
						<img
							src='/images/logo.png'
							alt='Logo'
							className='w-[39.47px] h-[41.89px]'
						/>
						<div className='flex flex-col gap-[4.57px]'>
							<img
								src='/images/brandname.png'
								alt='Brand Name'
								className='w-[159.45px] h-[20.48px]'
							/>
							<img
								src='/images/branddialogue.png'
								alt='Brand Dialogue'
								className='w-[159.36px] h-[2.68px]'
							/>
						</div>
					</div>

					<nav className='hidden md:flex gap-[20px] lg:gap-[33px] h-[18px]'>
						{['Home', 'About', 'Pricing', 'Consulting', 'Ai Coach'].map(
							(item) => (
								<p
									key={item}
									className='text-[14px] text-[#020407] font-semibold cursor-pointer h-[18px]'
								>
									{item}
								</p>
							),
						)}
					</nav>
				</div>

				<div className='flex items-center gap-4'>
					<button className='hidden sm:flex items-center justify-center w-[156px] h-[48px] rounded-[50px] border border-[#010205] px-[16px] py-[13px] cursor-pointer'>
						<p className='text-[16px] text-[#010205] font-bold'>Get Started</p>
					</button>

					<button
						className='md:hidden flex flex-col gap-[3px]'
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span className='w-6 h-[2px] bg-black'></span>
						<span className='w-6 h-[2px] bg-black'></span>
						<span className='w-6 h-[2px] bg-black'></span>
					</button>
				</div>
			</div>

			{menuOpen && (
				<div className='md:hidden flex flex-col gap-4 px-4 pb-4'>
					{['Home', 'About', 'Pricing', 'Consulting', 'Ai Coach'].map(
						(item) => (
							<p
								key={item}
								className='text-[14px] text-[#020407] font-semibold cursor-pointer'
							>
								{item}
							</p>
						),
					)}
					<button className='w-full flex items-center justify-center h-[48px] rounded-[50px] border border-[#010205] px-[16px] py-[13px] cursor-pointer'>
						<p className='text-[16px] text-[#010205] font-bold'>Get Started</p>
					</button>
				</div>
			)}
		</div>
	)
}

export default Header
