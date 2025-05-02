import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

const Reviews = () => {
	return (
		<div className='max-w-[1920px] w-full h-auto min-h-[543px] flex flex-col justify-center items-center px-4'>
			<div className='w-full max-w-[1280px] flex flex-col justify-center items-center gap-[74px]'>
				<p className='w-full text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-[#010205] font-semibold text-center md:text-left'>
					“ They thoroughly analyze our industry and target audience, allowing
					them to develop customized campaigns that effectively reach and engage
					our customers. Their creative ideas and cutting-edge techniques have
					helped us stay ahead of the competition.”
				</p>

				<div className='w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0'>
					<div className='flex gap-[24px] items-center'>
						<div className='w-[70px] h-[70px] bg-[#878C91] rounded-full'></div>
						<div className='flex flex-col gap-[8px]'>
							<p className='text-[18px] md:text-[20px] text-[#010205] font-semibold'>
								Michael Kaizer
							</p>
							<p className='text-[14px] md:text-[16px] text-[#878C91] font-medium'>
								CEO of Basecamp Corp
							</p>
						</div>
					</div>

					<div className='flex justify-between items-center gap-[20px]'>
						<button className='w-[56px] h-[56px] md:w-[88px] md:h-[56px] rounded-[70px] text-[#00245F] hover:text-white bg-white hover:bg-[#00245F] border border-[#00245F]'>
							<ArrowBackRoundedIcon className='h-[24px] w-[24px]' />
						</button>
						<p className='text-[18px] md:text-[20px] flex justify-center items-center'>
							<span className='text-[#00245F] underline'>01</span>
							<span className='text-[#878C91]'>/05</span>
						</p>
						<button className='w-[56px] h-[56px] md:w-[88px] md:h-[56px] rounded-[70px] text-white hover:text-[#00245F] bg-[#00245F] hover:bg-white hover:border hover:border-[#00245F]'>
							<ArrowForwardRoundedIcon className='h-[24px] w-[24px]' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Reviews
