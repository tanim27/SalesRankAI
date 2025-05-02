import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import RoomIcon from '@mui/icons-material/Room'
import TwitterIcon from '@mui/icons-material/Twitter'

const Footer = () => {
	return (
		<div className='bg-[#FAFAFA] max-w-[1920px] w-full flex flex-col justify-between items-center px-4 py-8'>
			<div className='max-w-[1440px] w-full py-[32px]'>
				<div className='mx-auto bg-gradient-to-r from-[#103570] to-[#004FCE] rounded-[24px] py-[80px] text-white flex flex-col items-center gap-[48px] text-center px-4'>
					<div className='max-w-[416px] flex flex-col items-center gap-[12px]'>
						<h2 className='text-white text-[38px] md:text-4xl font-semibold'>
							Ready to Hire Smarter?
						</h2>
						<p className='text-[#B9BDC7] text-[16px]'>
							Unlock Exclusive Insights. Subscribe to Our Newsletter
						</p>
					</div>

					<button className='bg-[#FCE38A] text-[#00245F] text-center font-medium w-[139px] h-[58px] rounded-full cursor-pointer'>
						Join Now
					</button>
				</div>
			</div>

			<div className='max-w-[1440px] w-full'>
				<div className='flex flex-col lg:flex-row justify-between gap-10 flex-wrap px-4'>
					<div className='flex flex-col gap-[30px] max-w-[534px]'>
						<div className='flex items-center gap-4'>
							<div className='w-12 h-12 bg-[#E5CF7E] rounded-br-full rounded-tl-md rounded-tr-md flex items-center justify-center'>
								<div className='w-5 h-5 bg-[#191F33] rounded-br-full rounded-tl-md rounded-tr-md'></div>
							</div>
							<span className='text-3xl font-bold text-[#020407]'>Logo</span>
						</div>
						<p className='text-[14px] leading-relaxed text-[#335386]'>
							SalesRank.AI offers a comprehensive suite of AI-powered solutions
							to help you find expert sales professionals who can elevate every
							aspect of your business. From performance rankings and skill
							verification to industry benchmarking and real-time analytics, we
							provide the insights and tools to optimize your sales strategy and
							drive growth.
						</p>
						<div className='flex gap-3 mt-2 flex-wrap'>
							<a href=''>
								<span className='bg-white rounded-full h-[34px] w-[34px] flex items-center justify-center'>
									<FacebookIcon className='text-[#002868] cursor-pointer' />
								</span>
							</a>
							<a href=''>
								<span className='bg-white rounded-full h-[34px] w-[34px] flex items-center justify-center'>
									<TwitterIcon className='text-[#002868] cursor-pointer' />
								</span>
							</a>
							<a href=''>
								<span className='bg-white rounded-full h-[34px] w-[34px] flex items-center justify-center'>
									<LinkedInIcon className='text-[#002868] cursor-pointer' />
								</span>
							</a>
							<a href=''>
								<span className='bg-white rounded-full h-[34px] w-[34px] flex items-center justify-center'>
									<InstagramIcon className='text-[#002868] cursor-pointer' />
								</span>
							</a>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row gap-10 flex-wrap'>
						<div>
							<h4 className='text-lg font-semibold text-[#001C4A] text-[18px] mb-4'>
								Navigation
							</h4>
							<ul className='space-y-4 text-[#335386] text-[14px]'>
								<li>Service</li>
								<li>Agency</li>
								<li>Case Study</li>
								<li>Resource</li>
								<li>Contact</li>
							</ul>
						</div>
						<div>
							<h4 className='text-lg font-semibold text-[#001C4A] text-[18px] mb-4'>
								License
							</h4>
							<ul className='space-y-4 text-[#335386] text-[14px]'>
								<li>Privacy Policy</li>
								<li>Copyright</li>
								<li>Email Address</li>
							</ul>
						</div>
						<div>
							<h4 className='text-lg font-semibold text-[#001C4A] text-[18px] mb-4'>
								Contact
							</h4>
							<ul className='space-y-4'>
								<li className='flex items-center gap-2 text-[14px]'>
									<CallIcon className='text-[#002868]' />
									<span className='text-[#335386]'> (406) 555-0120 </span>
								</li>
								<li className='flex items-center gap-2'>
									<EmailIcon className='text-[#002868]' />
									<span className='text-[#335386]'> Hey@boostim.com </span>
								</li>
								<li className='flex items-start gap-2'>
									<RoomIcon className='text-[#002868]' />
									<span className='text-[#335386]'>
										2972 Westheimer Rd. Santa Ana, Illinois 85486
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<hr className='w-[1920px] text-[#B4B4B4] mt-8' />
		</div>
	)
}

export default Footer
